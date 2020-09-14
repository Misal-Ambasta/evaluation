import React, { Component } from 'react'
import { AuthContext } from '../context/AuthContextProvider';


export default class Dashboard extends Component {
    render() {
        return (
            <AuthContext.Consumer>
                {({token,email,data})=>{
                    return (
                        <div>
                            <div>
                                <h3>email: {email}</h3>
                                <h3>token: {token}</h3>
                            </div>
                            
                            {data.map(item=> <div className="databox">{item.title}</div>)}
                        </div>
                    )
                }}
            </AuthContext.Consumer>
        )
    }
}
