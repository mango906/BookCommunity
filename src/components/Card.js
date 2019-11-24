import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrapper = styled("div")`
   width: 250px;
   background-color: #fff;
   box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
   cursor: pointer;
`;

const Content = styled("div")`
   padding: 20px 20px;
`;

const Thumbnail = styled("img")`
   transition: 0.3s;
   width: 100%;

   &:hover {
      opacity: 0.8;
   }
`;

const Title = styled("p")`
   font-weight: 800;
`;

const Date = styled("p")`
   color: #cccccc;
`;

const Card = props => {
   const handleRedirect = () => {
      props.history.push("/detail");
   };

   return (
      <Wrapper onClick={handleRedirect}>
         <Thumbnail
            src="https://i.ytimg.com/vi/y4ViOEXp8LE/maxresdefault.jpg"
            alt="img"
         />
         <Content>
            <Title>대충 제목이란 내용</Title>
            <Date>2019년 10월 20일</Date>
         </Content>
      </Wrapper>
   );
};

export default withRouter(Card);