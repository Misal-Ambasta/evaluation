import React, { Component } from 'react';
import styles from './Forms.module.css'


export default class Render extends React.PureComponent {
    render() {
        const {title,salary,companyName,location,remote,logo_url} = this.props.item
        return (
            <div className={styles.renderBox}>
                <img src={logo_url} alt="logo_url"/>
                <h3>{companyName}</h3>
                <h3>{title}</h3>
                <h3>{salary}</h3>
                <h3>{location}</h3>
                <div className={styles.remote}>

                    <h3 >Remote</h3>
                    <div className={styles.bubble} style={{ width: 15, height: 15, borderRadius: "50%", background: remote? "green": "red"}}></div>
                </div>
               
            </div>
        )
    }
}

