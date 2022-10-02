const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data1 = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config1 = {
    type: 'line',
    data: data1,
    options: {}
  };
  const myChart1 = new Chart(
    document.getElementById('myChart1'),
    config1
  );




  const data2 = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
const config2 = {
    type: 'pie',
    data: data2,
    options: {}
  };



  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
  );