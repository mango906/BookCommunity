import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import ReactQuill from "react-quill";
import { inject, observer } from "mobx-react";

@inject("article")
@observer
class Editor extends Component {
   state = {
      page: 1,
      defaultValue: ""
   };

   componentDidUpdate(prevProps, prevState) {
      const { article } = this.props;

      if (this.state.page !== article.getPage) {
         this.setState(
            {
               page: article.getPage
            },
            () => {
               this.setState({
                  defaultValue: article.getArticle
               });
            }
         );
      }
   }

   handleChange = text => {
      const { article } = this.props;
      const data = {
         page: article.getPage,
         text
      };

      article.setArticle(data);
   };

   handlePrev = () => {
      const { article } = this.props;
      article.setPrev();
   };

   handleNext = () => {
      const { article } = this.props;
      article.setNext();
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

      const { article } = this.props;

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
                  defaultValue={this.state.defaultValue}
                  placeholder="내용을 입력해주세요"
                  onChange={this.handleChange}
               />
               <Footer
                  handlePrev={this.handlePrev}
                  handleNext={this.handleNext}
                  page={article.getPage}
               />
            </div>
         </Wrapper>
      );
   }
}

export default Editor;
