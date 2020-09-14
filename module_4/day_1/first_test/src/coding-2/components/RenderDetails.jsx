import React, { Component } from 'react'
import Forms from './Forms'
import Render from './Render'
import { JobContext } from '../context/NewJobContext'


export default class RenderDetails extends React.PureComponent {
    render() {
        const {data,sort,filter,Isremote} = this.context
        return (
            <div>
                <Forms />
                

                {/* Output data to be rendered */}

                {data && data?.filter(item=>{
                    if(Isremote===false){
                        return true;
                    }
                    return Isremote === item.remote
                })?.filter(item=>{
                    if(filter==="all"){
                        return true;
                    }
                    return filter === item.location
                })?.sort((a,b)=>{
                    if(sort==="none"){
                        return a.date-b.date
                    }
                    else if(sort==="desc"){
                        return a.salary - b.salary;
                    }
                    else{
                        return b.salary - a.salary;
                    }
                }).reverse().map((item, i) => <Render key={i*4} item={item}/>)}
            </div>
        )
    }
}
RenderDetails.contextType = JobContext
