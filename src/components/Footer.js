import React from "react";
import styled from "styled-components";

const ArticleFooter = styled("div")`
   display: flex;
   flex: 0.5;
   z-index: 100;
   color: red;
   justify-content: space-around;
   margin-bottom: 30px;
`;

const FooterBtn = styled("button")``;

const Footer = () => {
   return (
      <ArticleFooter>
         <FooterBtn>이전 페이지</FooterBtn>
         <FooterBtn>다음 페이지</FooterBtn>
      </ArticleFooter>
   );
};

export default Footer;
