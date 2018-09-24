import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
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
      <section>
        <div className="login-title">Log in to Colorpicker</div>
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          {/* <label htmlFor="email">Email</label> */}
          <Field
            component={Input}
            type="email"
            name="email"
            id="email"
            label="Email"
            autocomplete="username"
            validate={[required, nonEmpty]}
          />
          {/* <label htmlFor="password">Password</label> */}
          <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            label="Password"
            autocomplete="current-password"
            validate={[required, nonEmpty]}
          />
          <button disabled={this.props.pristine || this.props.submitting}>Sign in</button>
        </form>
        <div>New to Colorpicker? <Link to="/createaccount">Create account</Link></div>
      </section>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);