import React, { Component } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import Register from './Register'
import Dashboard from './Dashboard'

export default class Homepage extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {({isAuth})=>{
                    return (
                    <>
                        <Register />
                        {isAuth && <Dashboard />}
                    </>
                    )

                }}
                
            </AuthContext.Consumer>
        )
    }
}
