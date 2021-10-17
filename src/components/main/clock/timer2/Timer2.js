import React, { Component } from 'react';
import styles from './Timer2.module.css';
import { newDate, currenDate } from '../../../../helper/date';

class Timer2 extends Component {
	state = {
		currenDate,
		newTimeString: newDate()
	};

	tamerId;

	componentDidMount() {
		this.tamerId = setInterval(() => {
			this.setState(currenDate());
		}, 1000);

		this.intervalId = setInterval(() => {
			this.setState({
				newTimeString: newDate()
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.tamerId);
		clearInterval(this.intervalId);
	}

	render() {
		return <div className={styles.clock}>{this.state.newTimeString}</div>;
	}
}
export default Timer2;
