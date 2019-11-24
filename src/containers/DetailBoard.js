import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import Board from "../components/Board";
import Footer from "../components/Footer";

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
      const { article } = this.props;
      const { text } = this.state;

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
