import React from 'react';

import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Reports = () => {
	const options = {
		animationEnabled: true,
		exportEnabled: false,
		theme: 'dark2', // "light1", "dark1", "dark2"
		data: [
			{
				type: 'pie',
				indexLabel: '{label}: {y}%',
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: 'Airfare' },
					{ y: 24, label: 'Food & Drinks' },
					{ y: 20, label: 'Accomodation' },
					{ y: 14, label: 'Transportation' },
					{ y: 12, label: 'Activities' },
					{ y: 10, label: 'Misc' }
				]
			}
		]
	};

	const options2 = {
		animationEnabled: true,
		title: {
			text: 'Number of New Customers'
		},
		axisY: {
			title: 'Number of Customers',
			includeZero: false
		},
		toolTip: {
			shared: true
		},
		data: [
			{
				type: 'spline',
				name: '2016',
				showInLegend: true,
				dataPoints: [
					{ y: 155, label: 'Jan' },
					{ y: 150, label: 'Feb' },
					{ y: 152, label: 'Mar' },
					{ y: 148, label: 'Apr' },
					{ y: 142, label: 'May' },
					{ y: 150, label: 'Jun' },
					{ y: 146, label: 'Jul' },
					{ y: 149, label: 'Aug' },
					{ y: 153, label: 'Sept' },
					{ y: 158, label: 'Oct' },
					{ y: 154, label: 'Nov' },
					{ y: 150, label: 'Dec' }
				]
			},
			{
				type: 'spline',
				name: '2017',
				showInLegend: true,
				dataPoints: [
					{ y: 172, label: 'Jan' },
					{ y: 173, label: 'Feb' },
					{ y: 175, label: 'Mar' },
					{ y: 172, label: 'Apr' },
					{ y: 162, label: 'May' },
					{ y: 165, label: 'Jun' },
					{ y: 172, label: 'Jul' },
					{ y: 168, label: 'Aug' },
					{ y: 175, label: 'Sept' },
					{ y: 170, label: 'Oct' },
					{ y: 165, label: 'Nov' },
					{ y: 169, label: 'Dec' }
				]
			}
		]
	};

	return (
		<div>
			<CanvasJSChart
				options={options}
				/* onRef={ref => this.chart = ref} */
			/>

      <CanvasJSChart options = {options2} 
				/* onRef={ref => this.chart = ref} */
			/>
		</div>
	);
};

export default Reports;
