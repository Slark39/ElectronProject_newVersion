import React from "react";
import Styles from "./style.module.scss";
const logoURL = "/assets/images/CM_logo.avif";

export default function LogoComponent() {
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.logo}>
				<img
					src={logoURL}
					className={Styles.logoImage}
					alt="token image"
				/>
			</div>
			<div className={Styles.text}>
				<div className={Styles.subText1}>
					<span className="text-primaryColor">C</span>rade
					<span className="text-thirdColor">M</span>aster
				</div>
				<div className={Styles.subText2}>AI-Auto Trading System</div>
			</div>
		</div>
	);
}
