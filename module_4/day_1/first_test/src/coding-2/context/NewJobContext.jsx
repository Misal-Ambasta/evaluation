import React, { Component } from 'react'
export const JobContext = React.createContext()

class JobContextProvider extends React.PureComponent {
    constructor(props){
        super(props)
        this.state= {
            title: "",
            salary: "",
            companyName: "",
            location: "Bangalore",
            remote: false,
            logo_url:"",
            sort:"none",
            filter: "all",
            Isremote: false,
            data:[]
        }
    }
    
    // On changing Input details 

    onChange = (e)=>{
        const {name,value,type,checked} = e.target
        let val = type==="checkbox"? checked: value
        this.setState({
            [name] : val
        })
    }

    // On submitting the form

    onSubmit= (e) => {
        e.preventDefault()
        const {data, ...FormState} = this.state
        let newData = {
            ...FormState,
            date: Date.now()
        }
        this.setState({
            data: [newData, ...data]
        })

    }
    
    render() {
        console.log(this.state)
        const {title,salary,companyName,location,remote,logo_url,data,date,sort,filter,Isremote} = this.state
        const {onChange,onSubmit} = this
        return (
            <JobContext.Provider value={{title,salary,companyName,location,remote,logo_url,data,date,sort,filter,Isremote,onChange,onSubmit}}>
                {this.props.children}
            </JobContext.Provider>
        )
    }
}

export default JobContextProvider