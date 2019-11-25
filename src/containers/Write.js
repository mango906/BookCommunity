import React, { Component } from "react";
import Editor from "./Editor";
import Header from "../components/Header";
import Board from "./Board";
import styled from "styled-components";

import { inject, observer } from "mobx-react";

@inject("editor", "article")
@observer
class Write extends Component {
   _isMounted = false;

   state = {
      title: "",
      article: ""
   };

   handleWrite = () => {
      const { article, editor } = this.props;
      const data = {
         title: "제목",
         article: editor.articles
      };
      article.postArticle(data);
   };

   render() {
      const WriteArea = styled("div")`
         display: flex;
      `;

      return (
         <div>
            <Header handleWrite={this.handleWrite} />
            <WriteArea>
               <Editor />
               <Board />
            </WriteArea>
         </div>
      );
   }
}

export default Write;
