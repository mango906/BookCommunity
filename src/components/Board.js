import React, { useRef } from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled("div")`
   display: flex;
   flex-direction: column;
   min-width: 50%;
   height: 100%;
`;

const Article = styled("div")`
   padding: 2rem 0px;
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
         <Footer></Footer>
      </Wrapper>
   );
};

export default Board;
