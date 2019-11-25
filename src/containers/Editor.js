import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import ReactQuill from "react-quill";
import { inject, observer } from "mobx-react";
import config from "../config";

@inject("editor")
@observer
class Editor extends Component {
   state = {
      page: 1,
      defaultValue: ""
   };

   componentDidUpdate(prevProps, prevState) {
      const { editor } = this.props;

      if (this.state.page !== editor.getPage) {
         this.setState(
            {
               page: editor.getPage
            },
            () => {
               this.setState({
                  defaultValue: editor.getArticles
               });
            }
         );
      }
   }

   handleChange = text => {
      const { editor } = this.props;
      const data = {
         page: editor.getPage,
         text
      };

      editor.setArticle(data);
   };

   handlePrev = () => {
      const { editor } = this.props;
      editor.setPrev();
   };

   handleNext = () => {
      const { editor } = this.props;
      editor.setNext();
   };

   render() {
      const Wrapper = styled("div")`
         flex: 1;
      `;

      const Input = styled(ReactQuill)`
         color: white;
         padding: 12px;
         flex: 9.5;
         overflowy: scroll;
      `;

      const { editor } = this.props;

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
               <Input
                  modules={config.modules}
                  formats={config.formats}
                  theme="bubble"
                  defaultValue={this.state.defaultValue}
                  placeholder="내용을 입력해주세요"
                  onChange={this.handleChange}
               />
               <Footer
                  color="#fff"
                  handlePrev={this.handlePrev}
                  handleNext={this.handleNext}
                  page={editor.getPage}
               />
            </div>
         </Wrapper>
      );
   }
}

export default Editor;
