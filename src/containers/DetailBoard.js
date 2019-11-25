import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Board from "../components/Board";
import { toJS } from "mobx";

@inject("article")
@observer
class DetailBoard extends Component {
   state = {
      page: 1,
      text: ""
   };

   componentDidMount() {
      const { article } = this.props;
      const text = article.getArticle(this.state.page);
      this.setState({
         text
      });
   }

   render() {
      const { text } = this.state;

      console.log(toJS(this.props.article.articles));

      const Wrapper = styled("div")`
         display: flex;
         flex-direction: column;
         height: 100%;
         align-items: center;
      `;

      return (
         <Wrapper>
            <Board article={text} />
         </Wrapper>
      );
   }
}

export default DetailBoard;
