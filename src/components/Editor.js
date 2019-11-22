import React from "react";
import useInput from "../hooks/useInput";
import Board from "./Board";
import Footer from "./Footer";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";

const Editor = ({ title }) => {
   const [article, setArticle] = useInput("");

   const modules = {
      toolbar: [
         [{ header: [1, 2, 3] }],
         ["bold", "italic", "underline", "strike"],
         [{ list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
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
      "code",
      "list",
      "bullet",
      "indent",
      "link"
   ];

   const style = {
      input: {
         color: "white",
         padding: 12,
         flex: 9.5,
         overflowY: "scroll"
      }
   };

   return (
      <div
         style={{
            display: "flex"
         }}
      >
         <div style={{ flex: 1 }}>
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "calc(100vh - 4rem)",
                  backgroundColor: "#222"
               }}
            >
               <ReactQuill
                  style={style.input}
                  modules={modules}
                  formats={formats}
                  theme="bubble"
                  placeholder="내용을 입력해주세요"
                  onChange={e => setArticle(e)}
               />
               <Footer />
            </div>
         </div>
         <div
            style={{
               flex: 1,
               padding: 12,
               overflowY: "scroll",
               height: "calc(100vh - 4rem)"
            }}
         >
            <Board title={title} article={article}></Board>
         </div>
      </div>
   );
};

export default Editor;
