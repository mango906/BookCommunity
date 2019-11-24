import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

const WriteHeader = styled("div")`
   background-color: #343a40;
   height: 4rem;
   display: flex;
   align-items: center;
   padding: 0px 1rem;
`;

const TitleInput = styled("input")`
   background: none;
   font-size: 1.2rem;
   color: #fff;
   outline: none;
   border: none;
   margin-left: 1rem;
`;

const Button = styled("button")`
   background-color: #a61e4d;
   color: white;
   border: none;
   outline: none;
   border-radius: 2px;
   padding: 5px 15px;
   cursor: pointer;
   font-size: 0.875rem;
`;

const Actions = styled("div")`
   display: flex;
   margin-left: auto;
`;

const BackBtn = styled(IoMdArrowBack)`
   color: #cccccc;
   cursor: pointer;
   font-size: 1.75rem;

   &:hover {
      color: #fff;
   }
`;

const Header = ({ handleChange }) => {
   return (
      <WriteHeader>
         <BackBtn></BackBtn>
         <TitleInput placeholder="제목을 입력해주세요..." />
         <Actions>
            <Button>작성하기</Button>
         </Actions>
      </WriteHeader>
   );
};

export default Header;
