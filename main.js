const ctx = document.querySelector("#myChart").getContext("2d");

const labels = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];

const data = {
  labels,
  datasets: [
    {
      data: [200, 300, 400, 1900, 600, 2700, 1100, 2000, 200],
      label: "Sales",
      backgroundColor: "rgb(230,230,250)",
      borderColor: "rgb(255, 99, 132)",
      fill: true,
    },
  ],
};

const config = {
  type: "line",
  data,
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: (val) => `${val} $`,
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);
