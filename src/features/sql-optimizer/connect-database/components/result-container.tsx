import CSS, { Property } from "csstype";
import { editorIcon } from "imageConfig";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import PortalPopup from "./portal-popup";
import SqlEditor from "./sql-editor";

type BigmartContainerType = {
  productIds?: string;
  productDimensions?: string;
  productIds1939?: string;

  /** Style props */
  propCursor?: Property.Cursor;
  propCursor1?: Property.Cursor;

  /** Action props */
  onFrameContainer5Click?: () => void;
};

const BigmartContainer: NextPage<BigmartContainerType> = ({
  productIds,
  productDimensions,
  productIds1939,
  propCursor,
  propCursor1,
  onFrameContainer5Click,
}) => {
  const [isSqlEditorOpen, setSqlEditorOpen] = useState(false);
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const router = useRouter();

  const onFrameContainer1Click = useCallback(() => {
    router.push("/s-q-l-optimizer-table");
  }, [router]);

  const openSqlEditor = useCallback(() => {
    setSqlEditorOpen(true);
  }, []);

  const closeSqlEditor = useCallback(() => {
    setSqlEditorOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch flex flex-row pt-[1.5rem] px-[0rem] pb-[0rem] items-center justify-start gap-[1.5rem] text-left text-[1.25rem] text-darkslategray-100 font-manrope">
        <div className="flex-1 flex flex-col items-start justify-start">
          <h2 className="m-0 self-stretch relative text-[inherit] font-bold font-inherit">
            Bigmart
          </h2>
          <span className="self-stretch relative text-[0.88rem] font-medium text-silver-100">
            Your Enterprise AI-Powered tools
          </span>
        </div>
        <div className="w-[16.96rem] flex flex-row items-center justify-end gap-[1.31rem] text-[0.75rem] text-dimgray font-inter">
          <div
            className="flex flex-row p-[0.19rem] items-center justify-start gap-[0.44rem] cursor-pointer"
            onClick={onFrameContainer5Click}
            style={frameDivStyle}
          >
            <img
              className="relative rounded-lg w-[1.5rem] h-[1.5rem]"
              alt=""
              src={productIds}
            />
            <div className="relative font-semibold">Database</div>
          </div>
          <div
            className="flex flex-row p-[0.19rem] items-center justify-start gap-[0.44rem] cursor-pointer"
            onClick={onFrameContainer1Click}
          >
            <img
              className="relative rounded-lg w-[1.5rem] h-[1.33rem]"
              alt=""
              src={productDimensions}
            />
            <div className="relative font-semibold">Table</div>
          </div>
          <div
            className="flex flex-row p-[0.19rem] items-center justify-start gap-[0.44rem] cursor-pointer"
            onClick={openSqlEditor}
          >
            <img
              className="relative w-[1.6rem] h-[1.6rem]"
              alt=""
              src={editorIcon}
            />
            <div className="relative font-semibold">Editor</div>
          </div>
        </div>
      </div>
      {isSqlEditorOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSqlEditor}
        >
          <SqlEditor onClose={closeSqlEditor} />
        </PortalPopup>
      )}
    </>
  );
};

export default BigmartContainer;
