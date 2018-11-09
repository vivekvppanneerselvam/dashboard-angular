import { Component } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {DashboardService} from './service/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DashboardService]  
})
export class AppComponent {
  title = 'dashboard-app';

  constructor(private dashboardService: DashboardService){}
  rowData = [
    {
      "January":1,
      "February":60,
      "March":50,
      "April":20,
      "May":1150,
      "June":100,
      "July":25	
    }   
  ];
  ngOnInit() { 
    this.onLoadData();
  }
  columnDefs = [
    { headerName: 'January', field: 'January' },
    { headerName: 'February', field: 'February' },
    { headerName: 'March', field: 'March' },
    { headerName: 'April', field: 'April' },
    { headerName: 'May', field: 'May' },
    { headerName: 'June', field: 'June' },
    { headerName: 'July', field: 'July' }
  ];

  

  public SystemName: string = "MF1";
  firstCopy = false;

  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  onLoadData(){    
  this.dashboardService.getData().subscribe(
    response =>{ console.log(response._body)
      this.rowData = JSON.parse(response._body);
    },
    error => {  console.log("Error"+error); 
   });
  }


}
