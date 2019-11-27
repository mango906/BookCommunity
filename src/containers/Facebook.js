import React from "react";
import FacebookLogin from "react-facebook-login";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

@inject("user")
@observer
class Facebook extends React.Component {
   responseFacebook = response => {
      const { user, history } = this.props;
      if (!response.id) return;
      const data = {
         id: response.id,
         accessToken: response.accessToken,
         name: response.name,
         picture: response.picture.data.url
      };
      user.setUser(data);
      history.push("/");
   };

   render() {
      return (
         <FacebookLogin
            appId={518427429008174}
            fields="name, picture"
            isMobile={true}
            disableMobileRedirect={true}
            callback={this.responseFacebook}
         />
      );
   }
}

export default withRouter(Facebook);
