import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

class MainBoard extends Component {
   render() {
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
         }
      `;

      return (
         <Wrapper>
            <NavBar />
            <CardList>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </CardList>
         </Wrapper>
      );
   }
}

export default MainBoard;
