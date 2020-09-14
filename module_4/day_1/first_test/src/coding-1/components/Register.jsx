import React from 'react'
import { AuthContext } from '../context/AuthContextProvider'

export default function Login(){
        return (
            <AuthContext.Consumer>
                {({email,password,isAuth, handleChange,onSubmit})=>{

                        return (
                        !isAuth && <div>
                            <form onSubmit={(e)=>onSubmit(e)} className="App">
                                <div>
                                    <label>Email:
                                        <input name="email" value={email} onChange={(e)=>handleChange(e)} type="text"/>
                                    </label>
                                </div>
                                <div>
                                    <label>Password:
                                        <input name="password" value={password} onChange={(e)=>handleChange(e)} type="text"/>
                                    </label>
                                </div>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                )}}
            </AuthContext.Consumer>
        )
}
