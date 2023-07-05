import {
  ArrowLeftOutlined
} from "@ant-design/icons";
import { Button, Checkbox, Collapse, Layout, Select } from "antd";
// import "antd/dist/antd.min.css";
import 'highlight.js/styles/default.css';
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import Highlight from 'react-highlight';

import MainLayoutHeader from "@shared/layouts/main/header";
import { useAppSelector } from "@store/redux-Hooks";
import { databaseIcon, tableIcon } from "imageConfig";
import BigmartContainer from "./components/result-container";
import SideMenuLinks from "./components/side-menu-links";
import SqlEditor from "./components/sql-editor";
const { Option } = Select;
const { Panel } = Collapse;



type SQLOptimizerProjectDetailType = {
  onClose?: () => void;
};

const SQLOptimizerProjectDetail: NextPage<SQLOptimizerProjectDetailType> = ({
  onClose,
}) => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const {databaseTables, databaseSchema}= useAppSelector(state=>state.userDatabase)

  const onFrameContainerClick = useCallback(() => {
    router.push("/s-q-l-optimizer-database-edit1");
  }, [router]);

  const onBackbtnClick = useCallback(() => {
    router.push("/s-q-l-optimizer");
  }, [router]);

  return (
    // <div className="relative bg-whitesmoke-100 w-full h-[67.5rem] overflow-hidden flex flex-col items-start justify-start text-left text-[1rem] text-dimgray font-manrope">
      <Layout>
      <MainLayoutHeader />
      <div className="self-stretch flex-1 overflow-y-auto flex flex-row items-start justify-start">
        <SideMenuLinks
          vector="/vector3.svg"
          chatsCircle="/chatscircle211.svg"
        />
        <div className="self-stretch bg-white box-border w-[17.25rem] overflow-hidden shrink-0 flex flex-col py-[1.63rem] px-[1.5rem] items-start justify-start gap-[1.19rem] border-r-[1px] border-solid border-gray-600">
          <Button
            className="cursor-pointer"
            type="default"
            icon={<ArrowLeftOutlined />}
            size="middle"
            shape="default"
            onClick={onBackbtnClick}
          >
            Back
          </Button>
          <div className="w-[14.31rem] flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="relative capitalize font-semibold inline-block w-[13rem]">
              Select your Database
            </div>
            <Select
              className="self-stretch relative"
              size="large"
              placeholder="Select Project"
              filterOption={(input: any, option: any) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              showArrow={true}
            >
              <Select.Option value="Bigmart">Bigmart</Select.Option>
              <Select.Option value="Foodmandu">Foodmandu</Select.Option>
              <Select.Option value="City Pay">City Pay</Select.Option>
              <Select.Option value="Yeti Airline">Yeti Airline</Select.Option>
            </Select>
          </div>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-col py-[1.25rem] px-[1rem] items-start justify-start gap-[1rem] border-[1px] border-solid border-silver-200">
            <div className="relative capitalize font-semibold inline-block w-[13.31rem]">
              Select table to query
            </div>
            {databaseTables.map((table, index) => (
              <Checkbox key={index} className="self-stretch">{table}</Checkbox>
            ))}
          </div>
          <div className="w-[14.31rem] flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="relative capitalize font-semibold inline-block w-[13rem]">
              Extracted Schema
            </div>
            <Collapse>
              <Panel header="See Schema" key="1">
                <div style={{ 
                  width: '500px', 
                  height: 'auto', 
                  overflow: 'scroll', 
                  whiteSpace: 'pre-wrap' 
                }}>
                  <Highlight language="json">
                    {databaseSchema}
                  </Highlight>
                </div>
              </Panel>
            </Collapse>
          </div>
                  </div>
                  <SqlEditor />
                  <div className="self-stretch flex-1 flex flex-col py-[0rem] px-[2rem] items-start justify-start">
                    <BigmartContainer
                      productIds={databaseIcon}
                      productDimensions={tableIcon}
                      onFrameContainer5Click={onFrameContainerClick}
                    />
                  </div>
      </div>
    </Layout>
  );
};

export default SQLOptimizerProjectDetail;
