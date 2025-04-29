import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import type { ColDef, GridReadyEvent } from "ag-grid-community";
import { AllCommunityModule, ClientSideRowModelModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule,AllCommunityModule]);
import { FormsModule } from '@angular/forms';
 

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  imports: [AgGridModule, FormsModule, ],
  templateUrl: './ag-grid.component.html',
  styleUrl: './ag-grid.component.css'
})
export class AgGridComponent {
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: false },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: false },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ];

  colDefs: ColDef<IRow>[] = [
    { field: 'make' },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 120,
    resizable: true,
    editable: true
  };
  gridApi: any;
  searchValue: any;

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  priceColor(params: any) {
    return params.value > 1000 ? { color: 'red', fontWeight: 'bold' } : { color: 'green' };
  }

  addRow() {
    const newRow = { id: Date.now(), name: 'New Mobile', ram: '4GB', rom: '64GB', price: 400 };
    this.gridApi.applyTransaction({ add: [newRow] });
  }

  deleteSelectedRows() {
    const selectedRows = this.gridApi.getSelectedRows();
    this.gridApi.applyTransaction({ remove: selectedRows });
  }

  quickSearch() {
    this.gridApi.setQuickFilter(this.searchValue);
  }

  exportCSV() {
    this.gridApi.exportDataAsCsv();
  }

  // exportExcel() {
  //   this.gridApi.exportDataAsExcel();
  // }






}
