import React, { Component } from "react";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { inject, observer } from "mobx-react";

@inject("article")
@observer
class Write extends Component {
   state = {
      title: ""
   };

   handleArticle = text => {
      const { article } = this.props;
      const data = {
         page: article.getPage,
         text
      };
      article.setArticle(data);
   };

   handleChange = title => {
      this.setState({
         title
      });
   };

   render() {
      const { article } = this.props;
      return (
         <div>
            <Header handleChange={this.handleChange} />
            <Editor
               handleArticle={this.handleArticle}
               article={article.getArticle}
               title={this.state.title}
            ></Editor>
         </div>
      );
   }
}

export default Write;
