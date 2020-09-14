import React, { Component } from 'react'
import { JobContext } from '../context/NewJobContext'
import styles from './Forms.module.css'

export default class Forms extends React.PureComponent {
    render() {
        const {title,salary,companyName,location,remote,logo_url,sort,filter,Isremote,onChange,onSubmit} = this.context
        return (
            <div className={styles.container}>

                {/* Form Container */}

                <form className={styles.table} onSubmit={(e)=>onSubmit(e)}>
                    <h3 >ADD A NEW JOB</h3>
                    <div >
                            <label> Title : {" "}  </label>
                            <input name="title" value={title} onChange={(e)=>onChange(e)} placeholder="Job Title" type="text" />
                       
                    </div>
                    <div>
                        <label> Salary : {" "}</label>
                            <input name="salary" value={salary} onChange={(e)=>onChange(e)} placeholder="Salary" type="text" />
                        
                    </div>
                    <div>
                        <label> Company Name : {" "}</label>
                            <input name="companyName" value={companyName} onChange={(e)=>onChange(e)} placeholder="Name of Company"  type="text" />
                        
                    </div>
                    <div>
                        <label> Location : {" "}</label>
                            <select name="location" value={location} onChange={(e)=>onChange(e)}>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                       
                    </div>
                    <div>
                        <label> Remote : {" "} </label>
                            <input type="checkbox" name="remote" value={remote} onChange={(e)=>onChange(e)} />
                        
                    </div>
                    <div>
                        <label> Company Logo : {" "} </label>
                            <input type="url" placeholder="Enter company logo url" name="logo_url" value={logo_url} onChange={(e)=>onChange(e)} />
                       
                    </div>
                    <button type="submit" value="submit">Submit</button>
                </form>



                {/* Sorting and Filter Container */}


                <div className={styles.filterBox}>
                    <div>
                        <label>Sort : {" "} </label>
                            <select name="sort" value={sort} onChange={(e)=>onChange(e)}>
                                <option value="none">none</option>
                                <option value="asc">ascending</option>
                                <option value="desc">descending</option>
                            </select>
                        
                    </div>
                    <div>
                        <label> Filter : {" "} </label>
                            <select name="filter" value={filter} onChange={(e)=>onChange(e)}>
                                <option value="all">All</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                       
                    </div>
                    <div>
                        <label>Show Remote Only : </label>
                            <input name="Isremote" value={Isremote} onChange={(e)=>onChange(e)} type="checkbox"/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

Forms.contextType = JobContext