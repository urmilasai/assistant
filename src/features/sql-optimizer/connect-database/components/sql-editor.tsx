import { Button, Checkbox, Input, Select } from "antd";
// import "antd/dist/antd.min.css";
import type { NextPage } from "next";
import { useEffect } from "react";

type SqlEditorType = {
  onClose?: () => void;
};

const SqlEditor: NextPage<SqlEditorType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="self-stretch h-full relative bg-white w-[890px] overflow-y-auto shrink-0 flex flex-col py-10 px-8 box-border items-start justify-start gap-[24px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] max-w-full max-h-full overflow-auto text-left text-xl text-dimgray font-manrope"
      data-animate-on-scroll
    >
      <h5 className="m-0 self-stretch relative text-[inherit] font-bold font-inherit text-[inherit]">
        Sql Editor
      </h5>
      <div className="self-stretch flex flex-row items-center justify-start">
        <Input
          className="bg-[transparent] self-stretch flex-1"
          type="text"
          size="middle"
          placeholder="Ask anything about database"
        />
      </div>
      <Checkbox className="self-stretch">Query DB</Checkbox>
      <Checkbox className="self-stretch">Interpret Result</Checkbox>
      <div className="self-stretch rounded-lg bg-white overflow-hidden shrink-0 flex flex-col py-[13px] px-4 items-start justify-start gap-[24px] text-base border-[1px] border-solid border-silver-200">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="w-[802px] flex flex-row items-center justify-start gap-[32px]">
            <div className="flex-1 relative capitalize font-medium">
              Enter ORM Details
            </div>
            <img
              className="relative w-[17.84px] h-[9.1px]"
              alt=""
              src="/group-60950.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="relative capitalize font-medium inline-block w-[746px] shrink-0">
              Language
            </div>
            <div className="relative w-6 h-6 overflow-hidden shrink-0" />
          </div>
          <Select
            className="self-stretch"
            size="large"
            placeholder="PHP"
            virtual={true}
            showArrow={true}
          >{` `}</Select>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="relative capitalize font-medium inline-block w-[746px] shrink-0">
              Framework
            </div>
            <div className="relative w-6 h-6 overflow-hidden shrink-0" />
          </div>
          <Select
            className="self-stretch"
            size="large"
            placeholder="PHP"
            virtual={true}
            showArrow={true}
          >{` `}</Select>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="relative capitalize font-medium inline-block w-[746px] shrink-0">
              ORM
            </div>
            <div className="relative w-6 h-6 overflow-hidden shrink-0" />
          </div>
          <Select
            className="self-stretch"
            size="large"
            placeholder="PHP"
            virtual={true}
            showArrow={true}
          >{` `}</Select>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
            <div className="relative capitalize font-medium inline-block w-[746px] shrink-0">
              Execution Type
            </div>
            <div className="relative w-6 h-6 overflow-hidden shrink-0" />
          </div>
          <Select
            className="self-stretch"
            size="large"
            placeholder="PHP"
            virtual={true}
            showArrow={true}
          >{` `}</Select>
        </div>
      </div>
      <h5 className="m-0 self-stretch relative text-[inherit] font-bold font-inherit text-[inherit]">
        Result
      </h5>
      <div className="self-stretch relative rounded-lg bg-gray-100 h-[383px] overflow-hidden shrink-0" />
      <Button
        style={{ width: "194px" }}
        type="primary"
        size="middle"
        shape="default"
      >
        Generate
      </Button>
    </div>
  );
};

export default SqlEditor;
