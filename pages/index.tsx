import { useState } from "react";
import { Htag, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";

function Home() {
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
    </>
  );
}

export default withLayout(Home);
