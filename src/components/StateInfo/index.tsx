import React from "react";
import Styles from "./style.module.scss";

export default function StateInfo() {
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.state}>
				<div className={Styles.connet}>Connection IP: 192.02.0.102</div>
				<div className={Styles.usage}>Total usage time: 09:03:28</div>
				<div className={Styles.closing}>
					Estimated return based on the closing time:0.2%
				</div>
			</div>
			<div className={Styles.time}>00:59:32</div>
			<div className={Styles.btn1}>ON</div>
			<div className={Styles.btn2}>MY</div>
		</div>
	);
}
