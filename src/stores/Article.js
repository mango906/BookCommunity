import { observable, action, computed } from "mobx";

class ArticleStore {
   @observable
   articles = [];

   @observable
   text = "";

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

      this.text = this.articles.find(el => el.page === data.page).text;
   }

   @computed get getArticle() {
      return this.text;
   }

   @computed get getPage() {
      return this.page;
   }
}

export default ArticleStore;
