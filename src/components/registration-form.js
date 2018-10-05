import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import './registration-form.css';
import {required, nonEmpty, matches, length, isTrimmed, email} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {email, password, firstName, lastName} = values;
    const user = {email, password, firstname: firstName, lastname: lastName};
    return this.props
        .dispatch(registerUser(user))
        .then(() => this.props.dispatch(login(email, password)));
  }

  render() {
    return (
      <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => {
              console.log(values);
              this.onSubmit(values);
             }
          )}>
          <Field component={Input} type="text" name="firstName" label="First name"/>
          <Field component={Input} type="text" name="lastName" label="Last name"/>
          <Field
              component={Input}
              type="email"
              name="email"
              validate={[required, nonEmpty, isTrimmed, email]}
              label="Email"
          />
          <Field
              component={Input}
              type="password"
              name="password"
              validate={[required, passwordLength, isTrimmed]}
              label="Password"
          />
          <Field
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
              label="Confirm password"
          />
          <div className="form-buttons-container">
            <button
                className="form-submit-button"
                type="submit"
                disabled={this.props.pristine || this.props.submitting || this.props.invalid}>
                Sign up
            </button>
            <Link className="login-redirect" to="/login">Log in instead</Link>
          </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => {
    if (errors){
        dispatch(focus('registration', Object.keys(errors)[0]));
    }
  }
})(RegistrationForm);