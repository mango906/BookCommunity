import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import { inject, observer } from "mobx-react";

@inject("article")
@observer
class Editor extends Component {
   handleChange = text => {
      const { article } = this.props;
      const data = {
         page: article.getPage,
         text
      };

      article.setArticle(data);
   };

   render() {
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

      const Wrapper = styled("div")`
         flex: 1;
      `;

      return (
         <Wrapper>
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
                  onChange={this.handleChange}
               />
               <Footer />
            </div>
         </Wrapper>
      );
   }
}

export default Editor;
