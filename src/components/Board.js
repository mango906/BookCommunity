import React, { useRef, useEffect } from "react";

const Board = ({ article }) => {
   const section = useRef();

   useEffect(() => {
      if (section.current.clientHeight > 968) alert(1);
   }, [article]);

   return (
      <div
         ref={section}
         dangerouslySetInnerHTML={{ __html: article }}
         style={{ padding: 12 }}
      />
   );
};

export default Board;
