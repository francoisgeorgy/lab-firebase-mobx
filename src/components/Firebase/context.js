import React, {Component} from 'react';
import Firebase from "./firebase";

const FirebaseContext = React.createContext(null);
// const FirebaseContext = React.createContext<Firebase | null>(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase}/>}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;
