import React, {Fragment} from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import SwipibleTabs from "../SwipibleTabs";
import { connect } from "react-redux";
import userLogin from "../../actions/AuthActions/userLogin";
import userRegister from "../../actions/AuthActions/userRegister";
import Error from "../Error";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false
  };
  handleChangeField = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  handleLoginSubmit = e => {
    const { formValid, email, password } = this.state;
    if (formValid) {
      this.props.userLogin(email, password);
      e.preventDefault();
    }
  };

  handleRegisterSubmit = e => {
    const { formValid, email, password } = this.state;
    if (formValid) {
      this.props.userRegister(email, password);
      e.preventDefault();
    }
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 4;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  };
  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  render() {
    if (this.props.isAuthorized) {
      this.props.history.goBack();
    }
    if (this.props.error) {
      return <Error />;
    }
    return (
      <SwipibleTabs>
        <SignInForm
          handleChangeField={this.handleChangeField}
          handleSubmit={this.handleLoginSubmit}
          email={this.state.email}
          password={this.state.password}
          formValid={this.state.formValid}
        />
        <SignUpForm
          handleChangeField={this.handleChangeField}
          handleSubmit={this.handleRegisterSubmit}
          email={this.state.email}
          password={this.state.password}
          formErrors={this.state.formErrors}
          formValid={this.state.formValid}
        />
        <Error />
      </SwipibleTabs>
    );
  }
}
const mapStateToProps = store => {
  return {
    isAuthorized: store.auth.isAuthorized,
    error: store.errorHandling.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (email, pass) => dispatch(userLogin(email, pass)),
    userRegister: (email, pass) => dispatch(userRegister(email, pass))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
