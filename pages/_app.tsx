import type { AppProps } from "next/app";

import Head from "next/head";
import { Layout, PageHeader } from "antd";

import "../styles/tailwind.css";
import "../styles/antd.less";

const { Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>nextjs-antd-tailwind</title>
        <meta
          name="description"
          content="NextJS 12 setup with Typescript, Ant Design and Tailwind CSS"
        />
      </Head>

      <PageHeader title="nextjs-antd-tailwind" />

      <Content className="px-6">
        <Component {...pageProps} />
      </Content>
    </>
  );
}

export default MyApp;
