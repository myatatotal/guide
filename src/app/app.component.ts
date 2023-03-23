import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
 Chart.register(...registerables);
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   portfoliosChartData: any;
   constructor(private http: HttpClient) {}
   ngOnInit() {
     this.initChartData();
   }
 
   initChartData() {
     const post$: Observable<any> = this.http.get<any>("./assets/data.json");
     post$.subscribe(data => {
       if (data?.meta) {
       this.portfoliosChartData = data.meta;
       }
     })
   }

}
