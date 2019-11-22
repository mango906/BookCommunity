import React, { useRef, useEffect } from "react";

const Board = ({ article, title }) => {
   const section = useRef();

   useEffect(() => {
      if (section.current.clientHeight > 968) alert(1);
   }, [article]);

   return (
      <div style={{ padding: 12, overflowY: "scroll" }}>
         <h1>{title}</h1>
         <div ref={section} dangerouslySetInnerHTML={{ __html: article }} />
      </div>
   );
};

export default Board;
