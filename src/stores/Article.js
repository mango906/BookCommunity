import { observable, action, computed } from "mobx";

class ArticleStore {
   @observable
   articles = [];

   @observable
   page = 1;

   @action
   setArticle(data) {
      const finding = this.articles.find(el => el.page === data.page);
      if (!finding) {
         this.articles = [...this.articles, data];
      } else {
         this.articles = this.articles.map(el =>
            el.page === data.page ? { ...el, text: data.text } : el
         );
      }
   }

   @computed get getArticle() {
      const data = this.articles.find(el => el.page === this.page);
      return data && data.text;
   }

   @computed get getPage() {
      return this.page;
   }
}

export default ArticleStore;
