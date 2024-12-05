import React from "react";
import Styles from "./style.module.scss";

export default function StatusTable() {
	return (
		<div className={Styles.tableContainer}>
			<div className={Styles.flexible}>
				<div className={Styles.inlineBlock}>
					<div className={Styles.overFlowHidden}>
						<table className={Styles.tableStyle}>
							<thead className={Styles.thead}>
								<tr>
									<th scope="col" className={Styles.th}>
										status
									</th>
									<th scope="col" className={Styles.th}>
										Exchange
									</th>
									<th scope="col" className={Styles.th}>
										Level
									</th>
									<th scope="col" className={Styles.th}>
										Leverage
									</th>
									<th scope="col" className={Styles.th}>
										M.mode
									</th>
									<th scope="col" className={Styles.th}>
										Quantity
									</th>
									<th scope="col" className={Styles.th}>
										ROI
									</th>
									<th scope="col" className={Styles.th}>
										profit and loss
									</th>
									<th scope="col" className={Styles.th}>
										Margin
									</th>
									<th scope="col" className={Styles.th}>
										Current Price
									</th>
									<th scope="col" className={Styles.th}>
										Average Price
									</th>
									<th scope="col" className={Styles.th}>
										Evaluation amount
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className={Styles.tr}>
									<td className={Styles.td1}>
										<span className="ml-1 mr-1 text-white">
											BTC
										</span>
										<span className="text-fivthColor">
											Bitcoin
										</span>
									</td>
									<td className={Styles.td3}>
										<p className="text-thirdColor">Sell</p>
									</td>
									<td className={Styles.td3}>
										<p className="text-secondaryColor">
											Buy
										</p>
									</td>
									<td className={Styles.td3}>
										<p className="text-secondaryColor">
											Buy
										</p>
									</td>
								</tr>
								<tr className={Styles.tr}>
									<td className={Styles.td1}>
										<span className="ml-1 mr-1 text-white">
											BTC
										</span>
										<span className="text-fivthColor">
											Bitcoin
										</span>
									</td>
									<td className={Styles.td3}>
										<p className="text-thirdColor">Sell</p>
									</td>
									<td className={Styles.td3}>
										<p className="text-secondaryColor">
											Buy
										</p>
									</td>
									<td className={Styles.td3}>
										<p className="text-secondaryColor">
											Buy
										</p>
									</td>
								</tr>
								<tr className={Styles.tr}>
									<td className={Styles.td1}>
										<span className="ml-1 mr-1 text-white">
											BTC
										</span>
										<span className="text-fivthColor">
											Bitcoin
										</span>
									</td>
									<td className={Styles.td3}>
										<p className="text-thirdColor">Sell</p>
									</td>
									<td className={Styles.td3}>
										<p className="text-secondaryColor">
											Buy
										</p>
									</td>
									<td className={Styles.td3}>
										<p className="text-secondaryColor">
											Buy
										</p>
									</td>
								</tr>

								{/* {holderDistributionList.map((item, index) => (
    <tr
      key={index}
      className={Styles.tr}>
      <td className={Styles.td1}></td>
      <td className={Styles.td3}>{item.percentage}</td>
    </tr>
  ))} */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
