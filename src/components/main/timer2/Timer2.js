
import React, { Component } from 'react/cjs/react.development';
import styles from  './Timer2.module.css';
const date = new Date();
class Timer2 extends Component {
    state = {
        hours: date.getHours() < 10 ? '0' + date.getHours(): date.getHours(),
        minutes: date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes(),
        seconds: date.getSeconds() < 10 ? '0' + date.getMinutes(): date.getSeconds()
    };

    tamerId;

    componentDidMount() {
        this.tamerId = setInterval(() => {
            const date = new Date()
            this.setState((state) => ({
                hours: date.getHours() < 10 ? '0' + date.getHours(): date.getHours(),
                minutes: date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes(),
                seconds: date.getSeconds() < 10 ? '0' + date.getMinutes(): date.getSeconds()
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


