import { observable, action } from "mobx";

class ArticleStore {
   @observable
   articles = [];
}

export default ArticleStore;
