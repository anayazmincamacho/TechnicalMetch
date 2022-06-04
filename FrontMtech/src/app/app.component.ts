import { Component, enableProdMode, ViewChild, OnInit, Inject} from '@angular/core';
import { Service } from './farms.service';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridLine, GridComponent } from '@syncfusion/ej2-angular-grids';
import { DatePipe } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})
export class AppComponent implements OnInit{
  @ViewChild('local', {static: false}) public listObj!: DropDownListComponent;
  @ViewChild('filter', {static: false}) public lObject!: DropDownListComponent;
  @ViewChild('grid', {static: false})  public grid!: GridComponent;
  lines!: GridLine;
  title = 'Farms';
FarmsList : any[]= [];
ListFiltered : any[]= [];
Filterby : any[]= [{value : 100, name : 'No'},
{value : 2020, name : 'Active Date'}]
list: Object = { text: 'Name', value: 'id' };
listFilterdby : Object = {text: 'name', value : 'value'}
placeholder_dropdwn = "Select farm"
placeholder_filter = "Filter by"
  data!: any[];
  constructor(private service : Service, private datepipe : DatePipe, private msj: MatSnackBar){
    this.getFarmsList();

  }

  getFarmsList (): void
  {
    let msj= this.service.getFarms();
    for(var i = 0; i < msj.length; i++)
    {
      this.FarmsList.push({
        "id": msj[i].id,
        "No": msj[i].no,
        "Name" : msj[i].name,
        "Address": msj[i].address,
        "Active Date" : this.datepipe.transform(msj[i].activeDate,'dd/MM/YYYY')
      })
    }
    console.log(this.FarmsList)
  }

  changeSelect(e : any): void
  {
    let id = e.value
    this.ListFiltered.splice(0,1)    
    let r = this.FarmsList.filter((f : any)=> f.id == id);
      r[0].acct
      this.ListFiltered.push(r[0]);
      console.log(this.ListFiltered);
      this.grid.refresh();
  }

catchException(a : any)
{
    try {
      throw new Error('En error happened');
    }
    catch{
      if (a == 2)
      {
        this.msj.open('An error has occurred', '',{
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        });
      }
    }
}

getFilter(e : any)
{
  console.log(e.value);   
}

  ngOnInit(): void {
    this.data = this.ListFiltered
  }

  

}