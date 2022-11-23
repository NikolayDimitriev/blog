import { Htag, Button, Paragraph, Tag } from "../components";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
