import React, { Component, createRef } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@inject("article")
@observer
class Board extends Component {
   section = createRef();

   render() {
      const { article } = this.props;

      const Wrapper = styled("div")`
         flex: 1;
         padding: 12;
         overflow-y: scroll;
         height: calc(100vh - 4rem);
      `;

      return (
         <Wrapper>
            <h1>{}</h1>
            <div
               ref={this.section}
               dangerouslySetInnerHTML={{ __html: article.getArticle }}
            />
         </Wrapper>
      );
   }
}

export default Board;
