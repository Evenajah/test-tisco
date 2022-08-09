import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  data: any;
  constructor(private dataService: DataService, private route: Router) {}

  ngOnInit() {
    this.dataService.getData().subscribe((val: any) => {
      if (val.sex === 'หญิง' && val.age > 50) {
        alert(`อายุ ${val.age} เกินเกณฑ์ ที่กำหนด`);
        this.route.navigate(['']);
      }
      this.data = val;
    });
  }
}
