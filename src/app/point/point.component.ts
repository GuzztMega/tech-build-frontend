import { Component, OnInit } from '@angular/core';
import { Point } from './point.model';
import { PointService } from './point.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})

export class PointComponent implements OnInit {
  pointList: Point[] = [];

  constructor(private pointService: PointService) {}

  ngOnInit() {
    this.pointService.getPoints().subscribe(points => {
      this.pointList = points;
    });
  }
}
