import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export default function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      {/* <LoginForm /> */}
      
      <section>
          Display a bunch of public palettes here...
        </section>
    </div>
  );
}



// export default connect(mapStateToProps)(LandingPage);