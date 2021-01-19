import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {
  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getData().subscribe(result => {
      var allData = [];
      result.map((data, index) => {
        allData.push(Array(index+1, data))
      })
      $(() => {
      $('#catagories-table').DataTable({
        data: allData,
        columns: [
          { title: "Number" },
          { title: "Category" },
        ]
      });
    });
    })
  }
}