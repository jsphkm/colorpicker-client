import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty, email} from '../validators';
import './login-form.css'

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.email, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <Field
            af={true}
            component={Input}
            type="email"
            name="email"
            id="email"
            label="Email"
            autocomplete="username"
            validate={[required, nonEmpty, email]}
          />
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            label="Password"
            autocomplete="current-password"
            validate={[required, nonEmpty]}
          />
          <div className="form-buttons-container">
            <button className="form-submit-button"
              disabled={this.props.pristine || this.props.submitting || this.props.invalid}>
              Sign in
            </button>
            <Link className="signup-redirect" to="/signup">Create account</Link>
          </div>
        </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);

