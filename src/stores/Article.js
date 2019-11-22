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
   }

   @action
   setPage(page) {
      this.page = page;
   }

   @action
   setPrev() {
      if (this.page === 1) return;
      this.page = this.page - 1;
   }

   @action
   setNext() {
      this.page = this.page + 1;
   }

   @computed get getArticle() {
      const data = this.articles.find(el => el.page === this.page);
      if (data) return data.text;
      else return "";
   }

   @computed get getPage() {
      return this.page;
   }
}

export default ArticleStore;
