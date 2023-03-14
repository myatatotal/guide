import { Component, OnInit } from '@angular/core';
import { OneService } from './services.service';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
interface Cidade {
  exchangeName: any;
  firstTradeDate: any,
  regularMarketTime: any,
  exchangeTimezoneName: any,
  currency: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  cidades: Cidade[] = [];

  //dataArray: any = [];
  constructor(private cidadeService: OneService) {}

  ngOnInit(): void {
   // this.consultar();
  }

  ngAfterViewInit() {
    let data: any,
      options: any,
      chart: any,
      ctx: any = document.getElementById('areaChart') as HTMLElement;

data = {
  labels: ['Apples', 'Oranges', 'Mixed Fruit'],
  datasets: [
    {
      label: 'Apples',
      //data: [0, 50, 45, 100],
      backgroundColor: 'rgba(40,125,200,.5)',
      borderColor: 'rgb(40,100,200)',
      fill: true,
      lineTension: 0,
      radius: 5,
      data:[
        1678108200,
        1678108260,
        1678108320,
        1678108380,
        1678108440,
        1678108476
     ],
    },
    {
      label: 'Oranges',
      //data: [30, 90, 111, 20],
      data:[
        25.700000762939453,
        25.65999984741211,
        25.639999389648438,
        25.600000381469727,
        25.65999984748811,
        25.690000534057617
     ],  
      backgroundColor: 'rgba(75,10,125,.5)',
      borderColor: 'rgb(75,10,125)',
      fill: true,
      lineTension: 0.2,
      radius: 5,
    },
  ],
    "meta":{
       "currency":"BRL",
       "symbol":"PETR4.SA",
       "exchangeName":"SAO",
       "instrumentType":"EQUITY",
       "firstTradeDate":946900800,
       "regularMarketTime":1678108476,
       "gmtoffset":-10800,
       "timezone":"BRT",
       "exchangeTimezoneName":"America/Sao_Paulo",
       "regularMarketPrice":25.69,
       "chartPreviousClose":25.7,
       "previousClose":25.7,
       "scale":3,
       "priceHint":2,
       "currentTradingPeriod":{
          "pre":{
             "timezone":"BRT",
             "start":1678106700,
             "end":1678107600,
             "gmtoffset":-10800
          },
          "regular":{
             "timezone":"BRT",
             "start":1678107600,
             "end":1678132800,
             "gmtoffset":-10800
          },
          "post":{
             "timezone":"BRT",
             "start":1678132800,
             "end":1678136400,
             "gmtoffset":-10800
          }
       },
       "tradingPeriods":[
          [
             {
                "timezone":"BRT",
                "start":1678107600,
                "end":1678132800,
                "gmtoffset":-10800
             }
          ]
       ],
       "dataGranularity":"1m",
       "range":"1d",
       "validRanges":[
          "1d",
          "5d",
          "1mo",
          "3mo",
          "6mo",
          "1y",
          "2y",
          "5y",
          "10y",
          "ytd",
          "max"
       ]
    },
    "timestamp":[
       1678108200,
       1678108260,
       1678108320,
       1678108380,
       1678108440,
       1678108476
    ],
    "indicators":{
       "quote":[
          {
             "open":[
                25.700000762939453,
                25.65999984741211,
                25.639999389648438,
                25.600000381469727,
                null,
                25.690000534057617
             ],
             "volume":[
                0,
                214400,
                400600,
                106000,
                null,
                0
             ],
             "low":[
                25.6200008392334,
                25.610000610351562,
                25.559999465942383,
                25.600000381469727,
                null,
                25.690000534057617
             ],
             "close":[
                25.6200008392334,
                25.639999389648438,
                25.600000381469727,
                25.649999618530273,
                null,
                25.690000534057617
             ],
             "high":[
                25.709999084472656,
                25.739999771118164,
                25.639999389648438,
                25.649999618530273,
                null,
                25.690000534057617
             ]
          }
       ]
    
 }
}

    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }

  consultar() {
    this.cidadeService.consultar()
      .then(dados => {
        this.cidades = dados;
      })
  }



}
