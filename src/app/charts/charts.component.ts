import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "chart.js";
import { ChartConfigurations } from "./chart-configurations";
import { DatePipe } from "@angular/common";


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  chartData: any;
  yieldReportDates = [];
  @Input() set portfoliosChartData(value: any) {
    if (value) {
      this.chartData = value;
      this.initChart();
    }
  }

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {}

  initChart() {
    const {
      options,
      yieldReportDates,
      cumulativeYieldPreTax
    } = this.buildBarChart();
    var myChart = new Chart("myChart", {
      type: "line",
      data: {
        labels: yieldReportDates,
        datasets: [
          { 
            borderWidth: 2,
            borderColor: "#6D6E71",
            pointRadius: 3,
            pointBackgroundColor: "#6D6E71",
            backgroundColor: "transparent",
            data: cumulativeYieldPreTax
          }
        ]
      },
    });
  }

  buildBarChart() {
    const format = "MM.yy";
    const { options } = ChartConfigurations;
    const yieldReportDates = this.chartData.map((item: { TranValueDate: string | number | Date; }) =>
      this.datePipe.transform(new Date(item.TranValueDate), format)
    );
    const cumulativeYieldPreTax = this.chartData.map((item: { CumulativeYieldPreTax: any; Balacne: any; }) => ({
      y: item.CumulativeYieldPreTax,
      x: item.Balacne
    }));

    return { options, yieldReportDates, cumulativeYieldPreTax };
  }

}
