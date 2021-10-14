
import React, { Component } from 'react';
import { padZero } from '../../../helper/date';
import styles from  './Timer2.module.css';
const date = new Date();
class Timer2 extends Component {
    state = {
        hours: padZero(date.getHours()),
        minutes: padZero(date.getMinutes()),
        seconds: padZero(date.getSeconds())        
    };

    tamerId;

    componentDidMount() {
        this.tamerId = setInterval(() => {
            const date = new Date()
            this.setState((state) => ({
                hours: padZero(date.getHours()),                
                minutes: padZero(date.getMinutes()),                
                seconds: padZero(date.getSeconds())                
            }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.tamerId);
    }
    render() {
        return(
            <div className={styles.clock}>
                {this.state.hours}:{this.state.minutes}:{this.state.seconds}
            </div>
        );
    }
}

export default Timer2;


