import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled("div")`
   background-color: ${props => props.background};
   display: ${props => (props.visible ? "block" : "none")}
   color: #fff;
   position: fixed;
   right: 1.75rem;
   bottom: 1.75rem;
   font-size: 0.75rem;
   padding: 0.5rem 3rem;
   border-radius: 3rem;
   animation-name: move;
   animation-duration: 0.3s;

   @keyframes move {
      0% {
         transform: translateY(100px);
      }
   }
`;

const ToolTip = props => {
   const { variant, text, visible } = props;

   const [background, setBackground] = useState("");

   useEffect(() => {
      switch (variant) {
         case "success":
            setBackground("#f03e3e");
            return;
         case "danger":
            setBackground("#ff6b6b");
            return;
         default:
            setBackground("#fff");
      }
   }, [variant]);

   return (
      <Wrapper visible={visible} background={background}>
         {text}
      </Wrapper>
   );
};

export default ToolTip;
