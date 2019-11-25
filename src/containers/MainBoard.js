import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";

class MainBoard extends Component {
   render() {
      const Wrapper = styled("div")`
         display: flex;
         flex-wrap: wrap;
         background-color: #f1f3f5;
         height: 100%;
      `;

      return (
         <Wrapper>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </Wrapper>
      );
   }
}

export default MainBoard;
