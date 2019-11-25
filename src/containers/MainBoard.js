import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { inject, observer } from "mobx-react";

@inject("article")
@observer
class MainBoard extends Component {
   componentDidMount() {
      const { article } = this.props;
      article.fetchArticles();
   }

   render() {
      const { article } = this.props;
      const Wrapper = styled("div")`
         display: flex;
         background-color: #f1f3f5;
         height: 100%;
      `;

      const CardList = styled("div")`
         display: flex;
         flex-wrap: wrap;
         overflow-y: scroll;
         margin-left: 15rem;

         @media (max-width: 768px) {
            margin: 0;
            margin-top: 5rem;
         }
      `;

      const itemList = article.boards.map(el => <Card title={el.title}></Card>);

      return (
         <Wrapper>
            <NavBar />
            <CardList>{itemList}</CardList>
         </Wrapper>
      );
   }
}

export default MainBoard;
