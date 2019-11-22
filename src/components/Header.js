import React from "react";
import styled from "styled-components";

const WriteHeader = styled("div")`
   background-color: #343a40;
   height: 4rem;
   display: flex;
   align-items: center;
   padding-left: 2rem;
`;

const TitleInput = styled("input")`
   background: none;
   font-size: 1.25rem;
   color: #fff;
   outline: none;
   border: none;
`;

const Header = ({ handleChange }) => {
   return (
      <WriteHeader>
         <TitleInput
            onChange={e => handleChange(e.target.value)}
            placeholder="제목을 입력해주세요..."
         ></TitleInput>
      </WriteHeader>
   );
};

export default Header;
