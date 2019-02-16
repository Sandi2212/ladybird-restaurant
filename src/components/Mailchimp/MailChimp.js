import React from 'react'
import './Mailchimp.css'

class MailChimp extends React.Component {
  constructor() {
    super();
    this.state = {
    emailValue: ''
   
};
}

 render() {
    return (
      <div className="parent">
      
        <form action="https://mica.us20.list-manage.com/subscribe/post" method="POST">
        <input type="hidden" name="u" value="b766b2cbbd7c7f8ef0c6ddf71"/>
        <input type="hidden" name="id" value="69e75b390a"/>
              <div className="Join-the-Mailing-List">
                      Join the Mailing List
              </div>
              <label htmlFor='MERGE0'>
                  
                  <input 
                      className="Email-Address"
                      type="email" 
                      placeholder="Email Address" 
                      id="MERGE0"

                      value={this.state.emailValue} 
                      onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                      autoCapitalize="off" 
                      autoCorrect="off"
                    /> 
              </label>
              
        <input type="submit" value="Sign Up" name="Sign Up" id="mc-embedded-subscribe" className="Sign-Up"/>
      
      </form>
      </div>
        )
    }
}

export default MailChimp

