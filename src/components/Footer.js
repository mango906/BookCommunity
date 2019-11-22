import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArticleFooter = styled("div")`
   display: flex;
   flex: 0.5;
   z-index: 100;
   color: red;
   justify-content: space-around;
   margin-bottom: 30px;
`;

const FooterBtn = styled("button")`
   background-color: #222;
   color: white;
   border: none;
   outline: none;
   cursor: pointer;
   font-size: 1rem;
   transition: 0.3s;

   &:hover {
      color: #bdbdbd;
   }
`;

const Footer = () => {
   return (
      <ArticleFooter>
         <FooterBtn>
            <FaChevronLeft />
            이전 페이지
         </FooterBtn>
         <FooterBtn>
            다음 페이지 <FaChevronRight />
         </FooterBtn>
      </ArticleFooter>
   );
};

export default Footer;
