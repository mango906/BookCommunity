import React, { Component } from "react";
import Editor from "./Editor";
import Header from "../components/Header";
import Board from "./Board";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("editor", "article")
@observer
class Write extends Component {
   _isMounted = false;

   state = {
      title: "",
      article: ""
   };

   handleWrite = async () => {
      const { article, editor, history } = this.props;
      const data = {
         title: this.state.title,
         article: editor.articles
      };
      const res = await article.postArticle(data);
      alert(res.data);
      if (res.status === 200) {
         history.push("/");
      }
   };

   handleTitle = title => {
      this.setState({
         title
      });
   };

   render() {
      const WriteArea = styled("div")`
         display: flex;
      `;

      return (
         <div>
            <Header
               handleWrite={this.handleWrite}
               handleTitle={this.handleTitle}
            />
            <WriteArea>
               <Editor />
               <Board />
            </WriteArea>
         </div>
      );
   }
}

export default withRouter(Write);
