import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;

   @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
   }
`;

const Article = styled("div")`
   padding: 2rem;
   flex: 9.5;
   overflow-y: scroll;
`;

const Board = props => {
   const { article } = props;

   const section = useRef();

   return (
      <Wrapper>
         <Article
            ref={section}
            dangerouslySetInnerHTML={{
               __html: article
            }}
         />
      </Wrapper>
   );
};

export default Board;
