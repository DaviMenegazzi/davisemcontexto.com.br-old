import React from "react";
import { verifyToken } from '../api/api';

// Essa é a admin, ou seja, o caminho "/admin" do website
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    state = {
        isAuth: false
    }
    render () {
        if(verifyToken()) this.state.isAuth = true;
        console.log(this.state.isAuth);
        return (
            <AuthContext.Provider value = {{ isAuth: this.props.isAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer };