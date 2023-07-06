import CSS, { Property } from "csstype";
import type { NextPage } from "next";
import Link from "next/link";
import { useMemo } from "react";

type SideMenuLinksType = {
  pdfReaderHref?: string;
  vector?: string;
  chatsCircle?: string;

  /** Style props */
  chatsCircleWidth?: Property.Width;
  chatsCircleDisplay?: Property.Display;
  frame13679Display?: Property.Display;
  chatsCircleTextAlign?: Property.TextAlign;
  frame13668Background?: Property.Background;
  frame13668Cursor?: Property.Cursor;
  frame13668BackgroundColor?: Property.BackgroundColor;
  frame13668Color?: Property.Color;
  frame13669Display?: Property.Display;
  chatsCircleBackgroundColor?: Property.BackgroundColor;
  chatsCircleBackground?: Property.Background;
  chatsCircleCursor?: Property.Cursor;
  frame13668Color1?: Property.Color;
  frame13668Display?: Property.Display;
  chatsCircleAlignItems?: Property.AlignItems;
  chatAssistantTextAlign?: Property.TextAlign;
  showhideDisplay?: Property.Display;
  chatAssistantDisplay?: Property.Display;
  chatAssistantDisplay1?: Property.Display;
  propDisplay?: Property.Display;
  propDisplay1?: Property.Display;
  propDisplay2?: Property.Display;
  propDisplay3?: Property.Display;

  /** Action props */
  onSqlOptimizerClick?: () => void;
};

const SideMenuLinks: NextPage<SideMenuLinksType> = ({
  pdfReaderHref,
  vector,
  chatsCircle,
  chatsCircleWidth,
  chatsCircleDisplay,
  frame13679Display,
  chatsCircleTextAlign,
  frame13668Background,
  frame13668Cursor,
  frame13668BackgroundColor,
  frame13668Color,
  frame13669Display,
  chatsCircleBackgroundColor,
  chatsCircleBackground,
  chatsCircleCursor,
  frame13668Color1,
  frame13668Display,
  chatsCircleAlignItems,
  chatAssistantTextAlign,
  showhideDisplay,
  chatAssistantDisplay,
  chatAssistantDisplay1,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  onSqlOptimizerClick,
}) => {
  const sideMenuStyle: CSS.Properties = useMemo(() => {
    return {
      width: chatsCircleWidth,
      display: chatsCircleDisplay,
    };
  }, [chatsCircleWidth, chatsCircleDisplay]);

  const libraryStyle: CSS.Properties = useMemo(() => {
    return {
      display: frame13679Display,
    };
  }, [frame13679Display]);

  const mYAPPStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: chatsCircleTextAlign,
    };
  }, [chatsCircleTextAlign]);

  const pdfReaderStyle: CSS.Properties = useMemo(() => {
    return {
      background: frame13668Background,
      cursor: frame13668Cursor,
      backgroundColor: frame13668BackgroundColor,
    };
  }, [frame13668Background, frame13668Cursor, frame13668BackgroundColor]);

  const pDFReaderStyle: CSS.Properties = useMemo(() => {
    return {
      color: frame13668Color,
    };
  }, [frame13668Color]);

  const chatAssistantStyle: CSS.Properties = useMemo(() => {
    return {
      display: frame13669Display,
    };
  }, [frame13669Display]);

  const sqlOptimizerStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: chatsCircleBackgroundColor,
      background: chatsCircleBackground,
      cursor: chatsCircleCursor,
    };
  }, [chatsCircleBackgroundColor, chatsCircleBackground, chatsCircleCursor]);

  const chatAssistant1Style: CSS.Properties = useMemo(() => {
    return {
      color: frame13668Color1,
      display: frame13668Display,
    };
  }, [frame13668Color1, frame13668Display]);

  const otherAppStyle: CSS.Properties = useMemo(() => {
    return {
      alignItems: chatsCircleAlignItems,
    };
  }, [chatsCircleAlignItems]);

  const oTHERStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: chatAssistantTextAlign,
    };
  }, [chatAssistantTextAlign]);

  const chatAssistant2Style: CSS.Properties = useMemo(() => {
    return {
      display: showhideDisplay,
    };
  }, [showhideDisplay]);

  const chatAssistant3Style: CSS.Properties = useMemo(() => {
    return {
      display: chatAssistantDisplay,
    };
  }, [chatAssistantDisplay]);

  const chatAssistant4Style: CSS.Properties = useMemo(() => {
    return {
      display: chatAssistantDisplay1,
    };
  }, [chatAssistantDisplay1]);

  const chatAssistant5Style: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const chatAssistant6Style: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const chatAssistant7Style: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const chatAssistant8Style: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  return (
    <div
      className="self-stretch bg-white box-border w-[5.88rem] hidden flex-col py-[1.5rem] px-[1rem] items-start justify-between text-center text-[0.88rem] text-dimgray font-manrope border-r-[1px] border-solid border-gray-600 md:w-[5.5rem]"
      style={sideMenuStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
        <Link
          className="cursor-pointer [text-decoration:none] self-stretch rounded-lg bg-white flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-left text-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]"
          href="/dashboard1"
        >
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/chatscircle4.svg"
          />
          <div
            className="relative font-semibold hidden md:hidden"
            style={libraryStyle}
          >
            Library
          </div>
        </Link>
        <div className="self-stretch flex flex-col py-[1rem] px-[0rem] items-start justify-center gap-[1rem] border-b-[1px] border-solid border-gray-500">
          <b className="self-stretch relative" style={mYAPPStyle}>
            MY APP
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-left text-[1rem]">
            <a
              className="[text-decoration:none] self-stretch rounded-lg [background:linear-gradient(93.45deg,_#9d50bb,_#6e48aa)] flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-white hover:bg-mediumorchid-100 hover:text-[ffffff]"
              style={pdfReaderStyle}
            >
              <div className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0">
                <img
                  className="absolute h-3/4 w-[71.88%] top-[12.5%] right-[12.5%] bottom-[12.5%] left-[15.63%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src={vector}
                />
              </div>
              <div
                className="relative font-semibold md:hidden"
                style={pDFReaderStyle}
              >
                PDF Reader
              </div>
            </a>
            <a className="[text-decoration:none] self-stretch rounded-lg bg-white flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]">
              <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/chatscircle121.svg"
              />
              <div
                className="relative font-semibold hidden md:hidden"
                style={chatAssistantStyle}
              >
                Data Analysis
              </div>
            </a>
            <a
              className="[text-decoration:none] self-stretch rounded-lg bg-white flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]"
              style={sqlOptimizerStyle}
              onClick={onSqlOptimizerClick}
            >
              <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src={chatsCircle}
              />
              <div
                className="relative font-semibold hidden md:hidden"
                style={chatAssistant1Style}
              >
                SQL Optimizer
              </div>
            </a>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col py-[1rem] px-[0rem] items-center justify-start gap-[1rem]"
          style={otherAppStyle}
        >
          <b className="self-stretch relative" style={oTHERStyle}>
            OTHER
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-left text-[1rem]">
            <a className="[text-decoration:none] self-stretch rounded-lg flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]">
              <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/chatscircle31.svg"
              />
              <div
                className="relative font-semibold hidden md:hidden"
                style={chatAssistant2Style}
              >
                Image Generator
              </div>
            </a>
            <a className="[text-decoration:none] self-stretch rounded-lg flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]">
              <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/chatscircle41.svg"
              />
              <div
                className="relative font-semibold hidden md:hidden"
                style={chatAssistant3Style}
              >
                Coding
              </div>
            </a>
            <a className="[text-decoration:none] self-stretch rounded-lg flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]">
              <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/chatscircle5.svg"
              />
              <div
                className="relative font-semibold hidden md:hidden"
                style={chatAssistant4Style}
              >
                Resume Analyzer
              </div>
            </a>
            <a className="[text-decoration:none] self-stretch rounded-lg flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]">
              <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/chatscircle61.svg"
              />
              <div
                className="relative font-semibold hidden md:hidden"
                style={chatAssistant5Style}
              >
                Project Document
              </div>
            </a>
            <a className="[text-decoration:none] self-stretch rounded-lg flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]">
              <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/chatscircle7.svg"
              />
              <div
                className="relative font-semibold hidden md:hidden"
                style={chatAssistant6Style}
              >
                Sales
              </div>
            </a>
            <a className="[text-decoration:none] self-stretch rounded-lg flex flex-row py-[0.5rem] px-[1rem] items-center justify-start gap-[1rem] text-[inherit] hover:bg-mediumorchid-100 hover:text-[ffffff]">
              <img
                className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
                alt=""
                src="/chatscircle81.svg"
              />
              <div
                className="relative font-semibold hidden md:hidden"
                style={chatAssistant7Style}
              >
                User Stories
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-left text-[1rem]">
        <div className="rounded-lg bg-white w-[13.69rem] hidden flex-row py-[0.5rem] px-[1rem] box-border items-center justify-start gap-[1rem]">
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/chatscircle91.svg"
          />
          <div className="relative font-semibold">Hide</div>
        </div>
        <div className="rounded-lg bg-white w-[13.69rem] flex flex-row py-[0.5rem] px-[1rem] box-border items-center justify-start gap-[1rem] md:hidden">
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/chatscircle101.svg"
          />
          <div
            className="relative font-semibold hidden"
            style={chatAssistant8Style}
          >
            Show
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuLinks;
