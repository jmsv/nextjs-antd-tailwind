import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout, PageHeader } from 'antd';

import '../styles/antd.less';
import '../styles/tailwind.css';

const { Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>nextjs-antd-tailwind</title>
      </Head>

      <PageHeader
        title="nextjs-antd-tailwind"
        onBack={router.route !== '/' ? () => router.push('/') : undefined}
      />

      <Content className="px-6">
        <Component {...pageProps} />
      </Content>
    </>
  );
}

export default MyApp;
