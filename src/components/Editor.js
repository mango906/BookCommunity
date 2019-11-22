import React, { useState } from "react";
import useInput from "../hooks/useInput";

import Board from "./Board";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";

const Editor = ({ title }) => {
   const [article, setArticle] = useInput("");

   const modules = {
      toolbar: [
         [{ header: [1, 2, 3] }],
         ["bold", "italic", "underline", "strike"],
         ["link", "image"],
         ["clean"]
      ]
   };

   const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link"
   ];

   return (
      <div
         style={{
            display: "flex"
         }}
      >
         <div style={{ flex: 1 }}>
            <ReactQuill
               style={{
                  backgroundColor: "#222",
                  color: "white",
                  height: "968px",
                  padding: 12
               }}
               modules={modules}
               formats={formats}
               theme="bubble"
               placeholder="내용을 입력해주세요"
               onChange={e => setArticle(e)}
            />
         </div>
         <div style={{ flex: 1, padding: 12 }}>
            <Board title={title} article={article}></Board>
         </div>
      </div>
   );
};

export default Editor;
