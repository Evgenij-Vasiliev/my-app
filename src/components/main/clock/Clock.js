// import React, { Component } from 'react';
import styles from './Clock.module.css';

function Clock() {
	let clock;
	const [ changeOfClock, setChangeOfClock ] = useState(true);
	if (changeOfClock) {
		clock = function Timer() {
			const [ newDateString, setNewDateString ] = useState(newDate());
			useEffect(
				() => {
					setTimeout(() => {
						setNewDateString(newDate());
					}, 1000);
				},
				[ newDateString ]
			);
			return (
				<div className={styles.clock}>
					<div>{newDateString}</div>
				</div>
			);
		};
	} else {
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
	}

	return (
		<div className={styles.clock}>
			<div>{clock}</div>
		</div>
	);
}
export default Clock;
