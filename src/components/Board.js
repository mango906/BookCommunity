import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
   flex: 1;
   padding: 12;
   overflow-y: scroll;
   height: calc(100vh - 4rem);
`;

const Board = ({ article }) => {
   const section = useRef();

   return (
      <Wrapper>
         <h1>{}</h1>
         <div ref={section} dangerouslySetInnerHTML={{ __html: article }} />
      </Wrapper>
   );
};

export default Board;
