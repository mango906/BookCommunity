import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArticleFooter = styled("div")`
   display: flex;
   flex: 0.5;
   color: red;
   justify-content: space-around;
   margin-bottom: 30px;
`;

const FooterBtn = styled("button")`
   background-color: rgba(255, 255, 255, 0);
   color: ${props => props.color};
   border: none;
   outline: none;
   cursor: pointer;
   font-size: 1rem;
   transition: 0.3s;

   &:hover {
      color: #bdbdbd;
   }
`;

const PageText = styled("p")`
   color: ${props => props.color};
`;

const Footer = ({ handlePrev, handleNext, page, color }) => {
   return (
      <ArticleFooter>
         <FooterBtn color={color} onClick={handlePrev}>
            <FaChevronLeft />
            이전 페이지
         </FooterBtn>
         <PageText color={color}>{page}</PageText>
         <FooterBtn color={color} onClick={handleNext}>
            다음 페이지 <FaChevronRight />
         </FooterBtn>
      </ArticleFooter>
   );
};

export default Footer;
