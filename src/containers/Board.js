import React, { Component } from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@inject("editor")
@observer
class Board extends Component {
   constructor(props) {
      super(props);
      this.section = null;
   }

   componentDidUpdate() {
      if (this.section.clientHeight > 900) return;
   }

   render() {
      const { editor } = this.props;

      const Wrapper = styled("div")`
         flex: 1;
      `;

      const Inner = styled("div")`
         padding: 24px 27px;
         overflow-y: scroll;
         height: calc(100vh - 4rem);
      `;

      return (
         <Wrapper>
            <Inner>
               <div
                  ref={ref => (this.section = ref)}
                  dangerouslySetInnerHTML={{
                     __html: editor.getArticles && editor.getArticles
                  }}
               />
            </Inner>
         </Wrapper>
      );
   }
}

export default Board;
