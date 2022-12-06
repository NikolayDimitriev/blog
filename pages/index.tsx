import { GetStaticProps } from "next";
import { useState } from "react";
import axios from "axios";
import { Htag, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps) {
  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Htag tag="h1">Test</Htag>
      <Button appearance="primary">Узнать подробнее</Button>
      <Button appearance="ghost" arrow="right">
        Buy
      </Button>
      <Paragraph size="m">Small</Paragraph>
      <Paragraph>medium</Paragraph>
      <Paragraph size="l">large</Paragraph>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        M Red
      </Tag>
      <Tag size="m" color="green">
        M Grren
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="primary" href="google.com">
        Primary href
      </Tag>
      <Rating isEditable rating={rating} setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
