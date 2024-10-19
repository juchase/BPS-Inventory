const line = document.getElementById("chart1");

new Chart(line, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Jumlah pengambilan barang",
        data: [12, 19, 3, 5, 2, 3, 7, 6, 17, 13, 7, 8],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
