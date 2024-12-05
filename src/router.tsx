import { FC } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/index";

export const Router: FC = () => {
	return (
		<HashRouter>
			<Switch>
				<Route path="/" component={IndexPage}></Route>
			</Switch>
		</HashRouter>
	);
};
