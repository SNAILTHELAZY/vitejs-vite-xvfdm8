import Chart from 'chart.js/auto';

/**
 * @param {Array<string>} labels
 * @param {Array<string>} values
 * @param {NodeElement} element
 * @param {string} title
 * @param {string} dotColor
 * @param {string} lineColor
 *
 * @returns a line chart object
 */
function createLineChart(
  labels,
  values,
  element,
  title = 'My Dataset',
  dotColor = 'rgb(255, 99, 132)',
  lineColor = 'rgb(255, 99, 132)'
) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        backgroundColor: dotColor,
        borderColor: lineColor,
        data: values,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {},
  };

  return new Chart(element, config);
}

export { createLineChart };
