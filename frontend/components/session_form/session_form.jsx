import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInDemo = this.signInDemo.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  }

  signInDemo() {
    this.setState({username:"demo", password:"password"})
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul className="render-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let capitalizeFormType;
    let demoButton; 
    if (this.props.formType === "login")  {
      capitalizeFormType = this.props.formType[0].toUpperCase() + this.props.formType.slice(1);
      demoButton =  <button className="session-submit" onClick={this.signInDemo}>
                {" "}
                Demo User{" "}
              </button>
    } 
    else {
      capitalizeFormType = this.props.formType[0].toUpperCase() + this.props.formType.slice(1,4) + " " + this.props.formType.slice(4)
      demoButton = ""
    } 
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />

          <div className="login-form">
            <div className="login-welcome">
              <span className="login-header-text">
                {" "}
                Welcome to Lyrical Genius{" "}
              </span>
            </div>
            <br />
            {this.renderErrors()}
            <br />
            <label>
              <input
                type="username"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                placeholder=" Username"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
                placeholder=" Password"
              />
            </label>
            <br />
            <div className="inputs-box">
              <input
                className="session-submit"
                type="submit"
                value={capitalizeFormType}
              />
              {demoButton}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
