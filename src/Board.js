import React from "react";

const Board = ({ article }) => {
   return (
      <div
         dangerouslySetInnerHTML={{ __html: article }}
         style={{ pading: 12 }}
      />
   );
};

export default Board;
