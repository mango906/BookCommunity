import React, { useState } from "react";

import Board from "./Board";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";

const Editor = () => {
   const [value, setValue] = useState("");

   const modules = {
      toolbar: [
         [{ header: [1, 2, "large"] }],
         ["bold", "italic", "underline", "strike", "blockquote"],
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
                  backgroundColor: "gray",
                  color: "white",
                  height: "968px",
                  padding: 12,
                  fontSize: "20px"
               }}
               modules={modules}
               formats={formats}
               theme="bubble"
               placeholder="내용을 입력해주세요"
               onChange={e => setValue(e)}
            />
         </div>
         <div style={{ flex: 1, padding: 12 }}>
            <Board article={value}></Board>
         </div>
      </div>
   );
};

export default Editor;
