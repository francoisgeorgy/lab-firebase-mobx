import React from 'react';

import AuthUserContext from './context';
import {withFirebase} from '../Firebase';

const withAuthentication = Component => {

    class WithAuthentication extends React.Component {

        constructor(props) {
            super(props);

            console.log("WithAuthentication.constructor");

            this.state = {
                authUser: JSON.parse(localStorage.getItem('authUser')),
            };
        }

        componentDidMount() {

            console.log("WithAuthentication componentDidMount");

            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    console.log("WithAuthentication componentDidMount authUser", authUser);
                    localStorage.setItem('authUser', JSON.stringify(authUser));
                    this.setState({authUser});
                },
                () => {
                    console.warn("WithAuthentication componentDidMount fallback");
                    localStorage.removeItem('authUser');
                    this.setState({authUser: null});
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;
