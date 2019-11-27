import ArticleStore from "./Article";
import EditorStore from "./Editor";
import UserStore from "./User";

export default {
   article: new ArticleStore(),
   editor: new EditorStore(),
   user: new UserStore()
};
