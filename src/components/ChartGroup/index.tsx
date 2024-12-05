import React from "react";
import Styles from "./style.module.scss";
import Chart from "../Chart";

export default function ChartGroup() {
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.col1}>
				<Chart />
				<Chart />
			</div>
			<div className={Styles.col2}>
				<Chart />
				<Chart />
			</div>
		</div>
	);
}
