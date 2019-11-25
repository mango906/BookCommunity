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
      height: 5rem;
   }
`;

const ItemList = styled("ul")`
   width: 100%;

   @media (max-width: 768px) {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      width: auto;
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
`;

const NavBar = props => {
   const handleRedirect = () => {
      props.history.push("/post");
   };

   return (
      <Wrapper>
         <ItemList>
            <Item onClick={handleRedirect}>
               <FaPen />
               <p style={{ paddingLeft: "1rem" }}>새 글 작성</p>
            </Item>
         </ItemList>
      </Wrapper>
   );
};

export default withRouter(NavBar);
