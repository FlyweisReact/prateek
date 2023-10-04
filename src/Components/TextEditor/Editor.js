import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import ReactQuill, { Quill } from "react-quill-with-table";
import QuillBetterTable from "quill-better-table";
import { Parser as HtmlToReactParser } from "html-to-react";

import "./styles.css";
import "react-quill-with-table/dist/quill.snow.css";
import "react-quill-with-table/dist/quill.bubble.css";
import * as QuillTableUI from "quill-table-ui";

var htmlToReactParser = new HtmlToReactParser();

Quill.register("modules/better-table", QuillBetterTable);

const editorModules = {
  table: false, // disable table module
  "better-table": {
    operationMenu: {
      items: {
        unmergeCells: {
          text: "Another unmerge cells name"
        }
      }
    }
  },
  keyboard: {
    bindings: QuillBetterTable.keyboardBindings
  }
};

export default function Editor() {
  const editor = useRef();
  const [text, setText] = useState("");
  var reactElement = htmlToReactParser.parse(text);
  // useEffect(() => {
  //   const editon = editor.current.getEditor();
  //   //console.log(editon.getModule("toolbar"));
  //   let tableModule = editon.getModule("better-table");
  //   // tableModule.insertTable(3, 3);
  //   console.log(tableModule);
  // }, []);
  const handleTableInsert = (e) => {
    e.preventDefault();
    const editon = editor.current.getEditor();
    console.log(editon);
    //console.log(editon.getModule("toolbar"));
    let tableModule = editon.getModule("better-table");
    tableModule.insertTable(2, 2);
  };

  const addRowBelow = () => {
    const editon = editor.current.getEditor();
    //console.log(editon.getModule("toolbar"));
    let tableModule = editon.getModule("better-table");
    tableModule.insertRowBelow();
  };

  const addColRight = () => {
    const editon = editor.current.getEditor();
    //console.log(editon.getModule("toolbar"));
    let tableModule = editon.getModule("better-table");
    tableModule.insertColumnRight();
  };

  return (
    <div>
      <div>
        <button id="insert-table" onClick={handleTableInsert}>
          Insert table
        </button>
        <button onClick={addRowBelow} id="get-table">
          Add row below
        </button>
        <button onClick={addColRight} id="get-contents">
          Add column right
        </button>
      </div>
      <ReactQuill
        ref={editor}
        value={text}
        modules={editorModules}
        onChange={(value) => setText(value)}
        theme="snow"
      />

      {reactElement}
    </div>
  );
}
