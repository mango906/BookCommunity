import { observable, flow } from "mobx";
import axios from "axios";

class ArticleStore {
   @observable
   boards = [];

   fetchArticles = flow(function*() {
      const response = yield axios.get("http://localhost:4000/boards");
      if (response.status === 200) {
         this.boards = response.data;
      }
   });

   fetchArticle = flow(function*(id) {
      const response = yield axios.get(`http://localhost:4000/board/${id}`);
      if (response.status === 200) {
         return response.data;
      }
   });

   postArticle = flow(function*(data) {
      const response = yield axios.post("http://localhost:4000/post", data);
      return response;
   });
}

export default ArticleStore;
