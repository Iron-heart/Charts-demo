import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dx-page',
  templateUrl: './dx-page.component.html',
  styleUrls: ['./dx-page.component.css']
})
export class DxPageComponent implements OnInit {
  dataSource = [
    { complaint: "Cold pizza", count: 780 },
    { complaint: "Not enough cheese", count: 120 },
    { complaint: "Underbaked or Overbaked", count: 52 },
    { complaint: "Delayed delivery", count: 1123 },
    { complaint: "Damaged pizza", count: 321 },
    { complaint: "Incorrect billing", count: 89 },
    { complaint: "Wrong size delivered", count: 222 }
  ];

  customizeTooltip = (info: any) => {
    return {
      html: "<div><div class='tooltip-header'>" +
        info.argumentText + "</div>" +
        "<div class='tooltip-body'><div class='series-name'>" +
        "<span class='top-series-name'>" + info.points[0].seriesName + "</span>" +
        ": </div><div class='value-text'>" +
        "<span class='top-series-value'>" + info.points[0].valueText + "</span>" +
        "</div><div class='series-name'>" +
        "<span class='bottom-series-name'>" + info.points[1].seriesName + "</span>" +
        ": </div><div class='value-text'>" +
        "<span class='bottom-series-value'>" + info.points[1].valueText + "</span>" +
        "% </div></div></div>"
    };
  }

  customizeLabelText = (info: any) => {
    return info.valueText + "%";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
