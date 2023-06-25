import { NextPageWithLayout } from '@pages/_app';
import MainLayout from '@shared/layouts/main';
import { Tabs } from 'antd';
import React from 'react';
const { TabPane } = Tabs;

const items = [
  {
    key: '1',
    label: `SQL Optimizer`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Projects`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Connect Database`,
    children: `Content of Tab Pane 3`,
  },
];

const renderTabBar = (props: any, DefaultTabBar: any) => (
  <DefaultTabBar {...props}>
    {(node: any) => {
      const isActive = props.activeKey === node.key;
      const className = `text-dark bg-white dark:bg-dark dark:text-white cursor-pointer rounded-lg w-[194px] px-2 py-3 text-base font-semibold border border-solid border-[#b3b6bf33] text-center ${
        isActive ? 'gradient-bg text-white' : ''
      }`;
      return React.cloneElement(node, { className });
    }}
  </DefaultTabBar>
);

const SqlOptimizer: NextPageWithLayout = () => {
  return (
    <div className="common-tab-wrapper">
      <Tabs renderTabBar={renderTabBar}>
        {items.map((item) => (
          <TabPane key={item.key} tab={item.label}>
            {item.children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default SqlOptimizer;

SqlOptimizer.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
