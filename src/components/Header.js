import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import ToolTip from "../components/ToolTip";
import useToolTip from "../hooks/useToolTip";

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

const Header = props => {
   const { handleWrite, history } = props;

   const [visible, setVisible] = useToolTip(false);

   const handleBack = () => {
      history.goBack();
   };

   // const handleWrite = () => {
   //    history.push("/");
   // };

   return (
      <WriteHeader>
         <BackBtn onClick={handleBack} />
         <TitleInput placeholder="제목을 입력해주세요..." />
         <Actions>
            <Button onClick={handleWrite}>작성하기</Button>
         </Actions>
         <ToolTip
            visible={visible}
            variant="danger"
            text="오류가 발생했습니다."
         />
      </WriteHeader>
   );
};

export default withRouter(Header);
