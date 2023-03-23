export const ChartConfigurations = {
  type: "line",
  data: {
    labels: [],
    datasets: []
  },
  options: {
    responsive: true,
    // cornerRadius: 20,
    barRoundness: 1,
    maintainAspectRatio: false,
    animation: {
      duration: 0
    },
    hover: {
      animationDuration: 0,
      intersect: true
    },
    responsiveAnimationDuration: 0,
    legend: {
      display: false
    },
    tooltips: {
      displayColors: false,
      enabled: true,
      titleFontSize: 0,
      backgroundColor: "#6D6E71",
      xPadding: 15,
      cornerRadius: 20,
      callbacks: {
        label: (tooltipItem: { xLabel: null; label: any; value: any; index: string | number; }, data: { datasets: { data: any; }[]; }) => {
          const datasetsData = data.datasets[0].data;
          console.log({ tooltipItem, datasetsData });
          tooltipItem.xLabel = null;
          const label = `${tooltipItem.label}  |  ${
            tooltipItem.value
          }%  |  ₪${datasetsData[tooltipItem.index].x
            .toString()
            .replace(/,/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
          return label;
        }
      }
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 0
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      },
      rectangle: {
        borderSkipped: "left"
      }
    },
    datasets: {
      horizontalBar: {
        barPercentage: 0.3
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            categoryPercentage: 0.8,
            barPercentage: 1.0,
            circular: true,
            display: true,
            offsetGridLines: true,
            drawTicks: false,
            drawBorder: false,
            color: "#EAEEF0"
          },
          ticks: {
            padding: 10
          }
        }
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            categoryPercentage: 0.8,
            barPercentage: 1.0,
            circular: true,
            drawTicks: false,
            drawBorder: false,
            color: "#EAEEF0"
          },
          ticks: {
            padding: 10,
            callback: (value: any) => {
              return `${value}%`;
            }
          }
        }
      ]
    }
  }
};
