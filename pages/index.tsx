import { Htag, Button } from "../components";

export default function Home() {
  return (
    <div>
      <Htag tag="h1">Test</Htag>
      <Button appearance="primary">Узнать подробнее</Button>
      <Button appearance="ghost" arrow="right">
        Buy
      </Button>
    </div>
  );
}
