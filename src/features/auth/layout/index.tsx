import { Card, Layout } from 'antd';
import { logo } from 'imageConfig';
import Head from 'next/head';
import Image from 'next/image';

const { Content } = Layout;
const AuthLayout = ({ children, title }: any) => {
  return (
    <Layout>
      <Head>
        <title>{title ? `${title} - Codebase` : 'Codebase'} </title>
      </Head>
      <Content className={'min-h-[100vh] flex  justify-center items-center'}>
        <Card
          title={
            <h2 className="uppercase flex items-center justify-center gap-[0.5rem]">
              <Image
                //   className="relative w-[3.18rem] h-[2.55rem]"
                height={40}
                width={40}
                alt="Logo"
                src={logo}
              />
              Assistant
            </h2>
          }
          style={{ width: 400 }}
        >
          {children}
        </Card>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
