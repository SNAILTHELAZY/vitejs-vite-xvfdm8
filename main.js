import './style.css';
import * as Chart from './chart.js';
import * as Plotly from './plotly.js';

/**
 * Comparison between Chart.js and Plotly
 * Chart.js:
 * 1. Responsive
 * 2. Have Animation
 * 3. Does not have Toolkits
 *
 * Plotly:
 * 1. Not Responsive
 * 2. Does not have Animation
 * 3. Has Toolkits
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
