const config = {
   modules: {
      toolbar: [
         [{ header: [1, 2, 3] }],
         ["bold", "italic", "underline", "strike"],
         [{ list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
         ["link", "image"],
         ["clean"]
      ]
   },
   formats: [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "code",
      "list",
      "bullet",
      "indent",
      "link"
   ]
};

export default config;
