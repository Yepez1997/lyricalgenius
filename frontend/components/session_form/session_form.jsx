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
    // if not sucess do not close modal 
    // this.props.closeModal();
  }
 // want to clear errors here ? 
 // add styling
  renderErrors() {
    return (
      <ul className="render-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  //Please {this.props.formType} or {this.props.navLink}
  // signin
  // only want to render errors if 
  render() {
    let capitalizeFormType;
    if (this.props.formType === "login")  {
      capitalizeFormType = this.props.formType[0].toUpperCase() + this.props.formType.slice(1);
    } 
    else {
      capitalizeFormType = this.props.formType[0].toUpperCase() + this.props.formType.slice(1,4) + " " + this.props.formType.slice(4)
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
            <br/>
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
            <input
              className="session-submit"
              type="submit"
              value={capitalizeFormType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
