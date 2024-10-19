const ctx = document.getElementById("chart2");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Pensil", "Kertas", "Tinta", "Clipper", "Map"],
    datasets: [
      {
        label: "Diambil",
        data: [12, 19, 3, 5, 2],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
