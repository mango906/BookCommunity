import { observable, action, computed, flow } from "mobx";
import axios from "axios";

class EditorStore {
   @observable
   title = "";

   @observable
   articles = [];

   @observable
   page = 1;

   @action
   setTitle(text) {
      this.title = text;
   }

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
   getArticle(page) {
      const finding = this.articles.find(el => el.page === page);
      return finding ? finding.text : "데이터가 업소용";
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

   @computed get getArticles() {
      const data = this.articles.find(el => el.page === this.page);
      if (data) return data.text;
      else return "";
   }

   @computed get getPage() {
      return this.page;
   }
}

export default EditorStore;
