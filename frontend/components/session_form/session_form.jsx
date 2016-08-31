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
      return <Link to="/signup">Sign up instead</Link>;
    } else {
      return <Link to="/login">Log in instead</Link>;
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
			<ul className="auth-errors">
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
			<div className="background-image">
				<div className="auth-content">
					<div className="greeting" id="greeting">
						<h1>Noted</h1>
						<h3>Keep thoughts organized.</h3>
						<button onClick={this._guestDemoLogin} className="guest-demo-button">
							GUEST DEMO
						</button>
					</div>

					<div className="auth-form-container">
						<form onSubmit={this.handleSubmit} className="auth-form">
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

							<input type="submit" value={this.submitButtonText()}
								className="auth-form-button"/>
							{this.navLink()}
						</form>
						{ this.renderErrors() }
					</div>
				</div>
			</div>
		);
	}

}

export default withRouter(SessionForm);
