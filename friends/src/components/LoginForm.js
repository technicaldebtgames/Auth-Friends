import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class LoginForm extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = event => {

        this.setState({

            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }

        });

    };

    login = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(response => {
                window.localStorage.setItem('token', response.data.payload);
                this.props.history.push('/friends');})
            .catch(error => console.log(error));
    };

    render() {

        return (
            <div className='login-form-container'>
                <form onSubmit={this.login} className='login-form'>
                    <label htmlFor="username">User:</label>
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={this.state.credentials.password} onChange={this.handleChange} />
                    <br />
                    <button>Login</button>
                </form>
            </div>
        );

    };

};

export default LoginForm;