import { Layout } from 'antd';
import Head from 'next/head';
import React from 'react';
import MainLayoutHeader from './header';
import MainLayoutSidebar from './side-bar';

const { Content } = Layout;

type IProps = {
  children: React.ReactNode;
  title?: string;
};

const MainLayout: React.FC<IProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{!title ? 'Dashboard - Codebase' : `${title} - Codebase`}</title>
        <meta
          name="description"
          content="Codebase for dashboard designed with Ant Design."
        />
      </Head>
      <Layout className="layout">
        <MainLayoutHeader />
        <Layout className="site-layout min-h-[100vh]">
          <MainLayoutSidebar />
          <Content className="mx-1 p-10">{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
