import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrapper = styled("div")`
   background-color: #fff;
   box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
   cursor: pointer;
   margin: 0.85rem;
   height: 30rem;

   @media (max-width: 1920px) {
      width: calc(25% - 1.7rem);
   }

   @media (max-width: 1600px) {
      width: calc(33.333% - 1.7rem);
   }

   @media (max-width: 1024px) {
      width: calc(50% - 1.7rem);
   }

   @media (max-width: 768px) {
      width: 100%;
   }
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
   font-size: 0.85rem;
   color: #cccccc;
`;

const Card = props => {
   const { id, title, history } = props;

   const handleRedirect = () => {
      history.push(`/detail/${id}`);
   };

   return (
      <Wrapper onClick={handleRedirect}>
         <Thumbnail
            src="https://i.ytimg.com/vi/y4ViOEXp8LE/maxresdefault.jpg"
            alt="img"
         />
         <Content>
            <Title>{title}</Title>
            <Date>2019년 10월 20일</Date>
         </Content>
      </Wrapper>
   );
};

export default withRouter(Card);
