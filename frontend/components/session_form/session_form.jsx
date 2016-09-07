import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			modalOpen: false,
			formType: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this._guestDemoLogin = this._guestDemoLogin.bind(this);
		this.submitButtonText = this.submitButtonText.bind(this);
		this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  submitButtonText () {
    if (this.state.formType === "login") {
      return "Log in";
    } else {
      return "Sign up";
    }
  }

	handleSubmit(e){
		if (e) {
			e.preventDefault();
		}
		const user = {username: this.state.username,
			password: this.state.password};
	  const processForm = (this.state.formType === 'login') ?
			this.props.login : this.props.signup;
		processForm(user);
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
				const user = {username: this.state.username,
					password: this.state.password};
				this.props.login(user);
			}
    );
	}

	closeModal () {
    this.setState({ modalOpen: false });
  }

  openModal (formType) {
    return () => {
			this.setState({ modalOpen: true, formType: formType});
		};
  }

	render() {
		return (
			<div className="background-image">
				<div className="auth-header">
					<div>Noted</div>
					<div className="auth-header-right">
						<div onClick={this.openModal("login")}>Log in</div>
						<div onClick={this.openModal("signup")}>Sign up</div>
						<div className="auth-header-info">
							<a className="linkedin" href="https://www.linkedin.com/in/sisiyao" target="_blank">
								<i className="fa fa-info-circle" aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>

				<div className="auth-greeting">
					<div className="auth-tagline">Beautiful notes for</div>
					<div className="auth-tagline">capturing all your thoughts</div>
					<button onClick={this._guestDemoLogin} className="guest-demo-button">
						GUEST DEMO
					</button>
				</div>

				<Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
					<div>{this.submitButtonText()}</div>
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
					</form>
					{ this.renderErrors() }
				</Modal>
			</div>
		);
	}

}

export default withRouter(SessionForm);
