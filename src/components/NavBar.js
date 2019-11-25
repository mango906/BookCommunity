import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
   position: fixed;
   left: 0;
   top: 0;
   height: 100%;
   background-color: #fff;
   width: 15rem;

   @media (max-width: 768px) {
      display: none;
   }
`;

const NavBar = () => {
   return <Wrapper />;
};

export default NavBar;
