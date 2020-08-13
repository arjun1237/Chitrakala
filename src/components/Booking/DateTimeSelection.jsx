import React, { Component } from "react";
import styles from "./css/Booking.module.css";
import { DataContext } from "../../context/DataContextProvider";

export default class DateTimeSelection extends Component {
	constructor(props) {
		super(props);
	}

	getDetails = () => {
		let slots = this.context.slotDisplay;
		if (slots) {
			return Object.keys(slots);
		} else {
			return [];
		}
	};

	getNext5days = () => {
		let date = new Date();
		let res = [];
		for (let i = 0; i < 5; i++) {
			let temp = new Date(date.setDate(date.getDate() + 1));
			res.push([
				temp.getDate(),
				this.getDay(temp.getDay()),
				this.context.destructureDate(temp),
			]);
		}
		return res;
	};

	getDay = (num) => {
		switch (num) {
			case 1:
				return "MON";
			case 2:
				return "TUE";
			case 3:
				return "WED";
			case 4:
				return "THU";
			case 5:
				return "FRI";
			case 6:
				return "SAT";
			case 0:
				return "SUN";
		}
	};

	render() {
		let payload = this.context.slotDisplay;
		let theatres = this.getDetails();
		let dSelect = this.context.dateSelect;
		let next5 = this.getNext5days(dSelect);
		return (
			<div>
				<div className={styles.infobar}>
					<div className={styles["data-handler"]}>
						{next5 &&
							next5.map((x) => (
								<div
									onClick={() => this.context.changeDate(x[2])}
									className={x[2] === dSelect ? styles.active : styles.inactive}
								>
									<p>{x[0]}</p>
									<p>{x[1]}</p>
								</div>
							))}
					</div>
					<div className={styles.otherinfo}>
						<div>{this.context.language}</div>
						{/* <div>{this.context.location}</div> */}
						<div>
							<select value={this.context.location} onChange={this.context.locationChange}>
								<option value="Bengaluru">Bengaluru</option>
								<option value="Alwar">Alwar</option>
								<option value="Hyderabad">Hyderabad</option>
								<option value="Mumbai">Mumbai</option>
							</select>
						</div>
					</div>
				</div>

				<div className={styles.info}>
					{theatres &&
						theatres.map((x) => (
							<div className={styles.nametime}>
								<div className={styles.theatre}>Theatre {x}</div>
								<div className={styles.timeHandle}>
									{payload[x].map((y) => (
										<div
											className={styles.time}
											onClick={() => this.context.dataChange2(y.id)}
											key={y.id}
										>
											{y.time}
										</div>
									))}
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
}

DateTimeSelection.contextType = DataContext;
