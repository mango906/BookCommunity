import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import config from "../config";

const Wrapper = styled("div")`
   flex: 1;
`;

const Input = styled(ReactQuill)`
   color: white;
   padding: 12px;
   flex: 9.5;
   overflowy: scroll;
`;

const Editor = props => {
   const { handleWrite } = props;
   const [input, setInput] = useState("");

   return (
      <Wrapper>
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               height: "calc(100vh - 4rem)",
               backgroundColor: "#222"
            }}
         >
            <Input
               modules={config.modules}
               formats={config.formats}
               theme="bubble"
               // defaultValue={this.state.defaultValue}
               placeholder="내용을 입력해주세요"
               onChange={value => handleWrite(value)}
            />
            {/* <Footer
               color="#fff"
               handlePrev={this.handlePrev}
               handleNext={this.handleNext}
               page={article.getPage}
            /> */}
         </div>
      </Wrapper>
   );
};

export default Editor;
