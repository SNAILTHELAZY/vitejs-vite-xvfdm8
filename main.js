import './style.css';
import * as Chart from './chart.js';
import * as Plotly from './plotly.js';
import ApexCharts from 'apexcharts';

/**
 * Comparison between Chart.js and Plotly
 * Chart.js:
 * 1. Responsive
 * 2. Have Animation
 * 3. Does not have Toolkits
 *
 * Plotly:
 * 1. Not Responsive (requires reloads upon the screensize changes)
 * 2. Does not have Animation
 * 3. Has Toolkits
 *
 * ApexCharts:
 *
 */

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const values = [0, 10, 5, 2, 20, 30, 45];

const chartLineChart = Chart.createLineChart(
  labels,
  values,
  document.getElementById('lineChart')
);

const plotlyLineChart = Plotly.createLineChart(
  labels,
  values,
  document.getElementById('plotly')
);

var options = {
  chart: {
    type: 'line',
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};
var chart = new ApexCharts(document.querySelector('#apex'), options);
chart.render();
