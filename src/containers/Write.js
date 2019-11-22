import React, { Component } from "react";
import Editor from "./Editor";
import Header from "../components/Header";
import Board from "./Board";
import styled from "styled-components";

import { inject, observer } from "mobx-react";

@inject("article")
@observer
class Write extends Component {
   state = {
      title: "",
      article: ""
   };

   handleArticle = text => {
      this.setState({
         article: text
      });
      console.log(text);
   };

   handleChange = title => {
      console.log(title);
   };

   render() {
      const WriteArea = styled("div")`
         display: flex;
      `;

      return (
         <div>
            <Header handleChange={this.handleChange} />
            <WriteArea>
               <Editor />
               <Board />
            </WriteArea>
         </div>
      );
   }
}

export default Write;
