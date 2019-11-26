import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FaPen } from "react-icons/fa";

const Wrapper = styled("div")`
   position: fixed;
   left: 0;
   top: 0;
   height: 100%;
   background-color: #fff;
   width: 15rem;

   @media (max-width: 768px) {
      width: 100%;
      height: auto;
   }
`;

const ItemList = styled("ul")`
   width: 100%;

   @media (max-width: 768px) {
      display: flex;
      height: 100%;
      justify-content: space-around;
      width: auto;
   }
`;

const Logo = styled("div")`
   font-weight: 500;
   padding: 1.5rem;
   cursor: pointer;
   font-size: 1.2rem;

   @media (max-width: 768px) {
      text-align: center;
   }
`;

const Item = styled("li")`
   width: 100%;
   display: flex;
   align-items: center;
   font-size: 1.05rem;
   padding: 1rem 0;
   padding-left: 1.5rem;
   cursor: pointer;

   &:hover {
      background-color: #f1f3f5;
   }

   @media (max-width: 768px) {
      padding: 0.7rem 0;
      justify-content: center;
      background-color: #fff;

      &:hover {
         background-color: #fff;
      }
   }
`;

const Icon = styled("span")`
   display: flex;
   margin-right: 1rem;

   @media (max-width: 768px) {
      display: none;
   }
`;

const NavBar = props => {
   const handleRedirect = () => {
      props.history.push("/post");
   };

   return (
      <Wrapper>
         <Logo>Community</Logo>
         <ItemList>
            <Item onClick={handleRedirect}>
               <Icon>
                  <FaPen />
               </Icon>
               <p>새 글 작성</p>
            </Item>
         </ItemList>
      </Wrapper>
   );
};

export default withRouter(NavBar);
