import React from "react";
import Editor from "../components/Editor";
import Header from "../components/Header";
import useInput from "../hooks/useInput";

const App = () => {
   const [title, setTitle] = useInput("");

   const handleChange = value => {
      setTitle(value);
   };

   return (
      <div className="App">
         <Header handleChange={handleChange} />
         <Editor title={title}></Editor>
      </div>
   );
};

export default App;
