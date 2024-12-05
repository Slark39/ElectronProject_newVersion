import { FC } from "react";
import { Layout } from "../components/Layout";
import Styles from "./style.module.scss";
import LogoComponent from "../components/LogoComponent";
import BalanceTable from "../components/BalanceTable";
import AiTable from "../components/AiTable";
import SignalTable from "../components/SignalTable";
import StateInfo from "../components/StateInfo";
import ChartGroup from "../components/ChartGroup";
import StatusTable from "../components/StatusTable";

const IndexPage: FC = () => {
	return (
		<Layout>
			<div className={Styles.wrapper}>
				<div className={Styles.addInfo}>
					<LogoComponent />
					<BalanceTable />
					<AiTable />
					<SignalTable />
				</div>
				<div className={Styles.mainInfo}>
					<StateInfo />
					<ChartGroup />
					<StatusTable />
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
