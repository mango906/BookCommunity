import React, { Component } from "react";
import styled from "styled-components";
import Card from "../components/Card";

export default class MainBoard extends Component {
   render() {
      const Wrapper = styled("div")`
         background-color: #f1f3f5;
         height: 100%;
      `;

      return (
         <Wrapper>
            <Card />
         </Wrapper>
      );
   }
}
