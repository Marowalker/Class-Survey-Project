import React, { Component } from 'react';
import './App.css';
import background from './Background.png';
import box from './Untitled-1.png';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        return this.setState({ error: '' });
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)

        return (

            <div className="Login">
                <img src={background} className="background" alt="background" />
                <img src={box} className="white" alt="box" />
                <form class="att" onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <label id="title">Login</label>
                    <br />
                    <label>Username</label>
                    <input type="text" placeholder="enter username" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                    <br />
                    <label>Password</label>
                    <input type="password" placeholder="enter password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
                    <br />
                    <input type="checkbox" id="box" />
                    <label class="checkbox">Remember me</label>
                    <br />
                    <input id="login" type="submit" value="Log In" data-test="submit" />
                </form>
            </div>
        );
    }
}

export default LoginPage;