import Head from "next/head";
import { Button, Card } from "antd";

export default function Home() {
  return (
    <>
      <Head>
        <title>nextjs-antd-tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <div className="flex flex-row gap-3">
          <Button size="large">Hello</Button>

          <Button size="large" type="primary">
            World
          </Button>
        </div>
      </Card>
    </>
  );
}
