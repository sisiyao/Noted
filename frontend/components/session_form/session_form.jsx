import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this._guestDemoLogin = this._guestDemoLogin.bind(this);
	}

	update (field) {
		return e => this.setState(
      { [field]: e.currentTarget.value }
    );
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			this.props.router.push("/home");
		}
	}

  navLink () {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign up here</Link>;
    } else {
      return <Link to="/login">Log in here</Link>;
    }
  }

  submitButtonText () {
    if (this.props.formType === "login") {
      return "LOG IN";
    } else {
      return "SIGN UP";
    }
  }

	handleSubmit(e){
		if (e) {
			e.preventDefault();
		}
		const user = this.state;
		this.props.processForm(user);
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, idx) => (
					<li key={`autherror${idx}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	_guestDemoLogin (e) {
		this.setState(
      { username: "guest", password: "password" },
			() => {
				const user = this.state;
				this.props.login(user);
			}
    );
	}

	render() {
		return (
			<div className="auth-form-container">
				<div>
					<h1>Noted</h1>
					<h3>Beautiful, organized notes.</h3>
					<button onClick={this._guestDemoLogin}>GUEST DEMO</button>
				</div>
				<form onSubmit={this.handleSubmit} className="auth-form">
					{ this.renderErrors() }
					<input type="text"
						value={this.state.username}
						onChange={this.update("username")}
            placeholder="Username"
						className="auth-form-input" />

					<input type="password"
						value={this.state.password}
						onChange={this.update("password")}
            placeholder="Password"
						className="auth-form-input" />

          <input type="submit" value={this.submitButtonText()} />
				</form>
        {this.navLink()}
			</div>
		);
	}

}

export default withRouter(SessionForm);
