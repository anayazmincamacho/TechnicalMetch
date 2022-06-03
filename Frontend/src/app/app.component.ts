import { Component, enableProdMode, ViewChild, OnInit } from '@angular/core';
import { Service } from './farms.service';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})
export class AppComponent implements OnInit{
  @ViewChild('local', {static: false}) public listObj!: DropDownListComponent;
  title = 'Farms';
FarmsList : any[]= [];
list: Object = { text: 'name', value: 'id' };
placeholder_dropdwn = "Select farm"
  constructor(private service : Service){
    this.getFarmsList()
  }

  getFarmsList (): void
  {
    this.FarmsList = this.service.getFarms();
    console.log(this.FarmsList)
  }

  ngOnInit(): void {
    
  }

  

}
