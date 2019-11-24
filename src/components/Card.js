import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
   width: 300px;
   background-color: #fff;
   box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

const Content = styled("div")`
   padding: 20px 20px;
`;

const Title = styled("p")`
   font-weight: 800;
`;

const Date = styled("p")`
   color: #cccccc;
`;

const Card = () => {
   return (
      <Wrapper>
         <img
            style={{ width: "100%" }}
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

export default Card;
