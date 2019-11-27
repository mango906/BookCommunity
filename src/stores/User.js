import { action, observable } from "mobx";

class UserStore {
   @observable user = {};

   @action setUser(data) {
      this.user = data;
   }
}

export default UserStore;
