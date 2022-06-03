import { Component, enableProdMode, ViewChild, OnInit, Inject} from '@angular/core';
import { Service } from './farms.service';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridLine, GridComponent } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})
export class AppComponent implements OnInit{
  @ViewChild('local', {static: false}) public listObj!: DropDownListComponent;
  @ViewChild('grid', {static: false})  public grid!: GridComponent;
  lines!: GridLine;
  title = 'Farms';
FarmsList : any[]= [];
ListFiltered : any[]= [];
list: Object = { text: 'name', value: 'id' };
placeholder_dropdwn = "Select farm"
  data!: any[];
  constructor(private service : Service, ){
    this.getFarmsList();

  }

  getFarmsList (): void
  {
    this.FarmsList = this.service.getFarms();
    console.log(this.FarmsList)
  }

  changeSelect(e : any): void
  {
    let id = e.value
    this.ListFiltered.splice(0,1)    
    let r = this.FarmsList.filter((f : any)=> f.id == id);
      this.ListFiltered.push(r[0]);
      console.log(this.ListFiltered);
      this.grid.refresh();

    
  }

  ngOnInit(): void {
    this.data = this.ListFiltered
  }

  

}