import Plotly from 'plotly.js-dist';

/**
 * @param {Array<string>} labels
 * @param {Array<string>} values
 * @param {NodeElment} element
 * @param {string} mode
 * @param {string} title
 */
function createLineChart(
  labels,
  values,
  element,
  mode = 'lines+markers',
  title = 'My Line Chart'
) {
  const data = [
    {
      x: labels,
      y: values,
      mode: mode,
    },
  ];
  const layout = {
    title: title,
  };

  return Plotly.newPlot(element, data, layout);
}

export { createLineChart };
