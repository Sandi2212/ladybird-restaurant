import React, {Component} from 'react';
import "./ChefLogin.css";

class ChefLogin extends Component {
   constructor() {
      super()
      this.state = {
         statekey:''
      }
   }

   render() {
      return (
          <div className="oc-chef-login" style={{ paddingTop: `${this.props.headerOffset}px` }}>
            <form className="oc-chef-login-form">
                <img className="oc-chef-login-logo" src="/assets/logo-trans/logo-trans-header.png" alt="logo" />
                <h1 className="oc-chef-login-header">Welcome Chef! Please Click The Button Below to sign in via Google</h1>
                <a href="/auth/google"><button className="oc-chef-login-button">Login</button></a>
            </form>
         </div>
      )
   }
}

export default ChefLogin;