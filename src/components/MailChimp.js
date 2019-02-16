import React from 'react'

class MailChimp extends React.Component {
  constructor() {
    super();
  }

    render() {
        return (
            <form action="https://mica.us20.list-manage.com/subscribe/post" method="POST">
            <input type="hidden" name="u" value="b766b2cbbd7c7f8ef0c6ddf71"/>
            <input type="hidden" name="id" value="69e75b390a"/>
            
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                    <label htmlFor="b_email">Email: </label>
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                    <label htmlFor="b_comment">Comment: </label>
                    <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
                </div>
              </form>
        )
    }
}

export default MailChimp

