import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/interfaces';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public tabs = [
    {
      name: "TEXT",
      icon: "typcn-edit"
    },
    {
      name: "PHOTOS",
      icon: "typcn-image"
    },
    {
      name: "ELEMENTS",
      icon: "typcn-star-outline"
    },
    {
      name: "EMOJIS",
      icon: "typcn-heart-outline"
    },
    {
      name: "PEN",
      icon: "typcn-pencil"
    },
    {
      name: "UPLOAD",
      icon: "typcn-upload-outline"
    },
  ];
  public selectedTab = 'TEXT';

  constructor() { }

  ngOnInit(): void {
  }

  public selectTab = (tab: Tab) => {
    this.selectedTab = tab.name;
    console.log(this.selectedTab, tab.name);
  }

}
