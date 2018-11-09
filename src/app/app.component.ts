import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-app';


  columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'}
  ];

  rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];


 // lineChart
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

}
