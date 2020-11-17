import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fabric } from 'fabric';
import { Tab } from 'src/app/interfaces';
import { EditorService } from './editor.service';
import {svg} from '../../../assets/elements/'

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  public canvas: any;

  public tabs = [
    {
      name: "TEXT",
      icon: "typcn-edit"
    },
    {
      name: "IMAGES",
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
      name: "DRAW",
      icon: "typcn-pencil"
    },
    {
      name: "UPLOAD",
      icon: "typcn-upload-outline"
    },
  ];
  public selectedTab = 'TEXT';

  constructor(public editorService: EditorService) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas');
  }
  ngAfterViewInit() {
       const rect = new fabric.Rect({
          top : 100,
          left : 100,
          width : 60,
          height : 70,
          fill : 'red'
       });
       this.canvas.add(rect);
}


  public selectTab = (tab: Tab) => {
    this.selectedTab = tab.name;
  }

  public addText = (text: string, size?: number) => {
    let newText = new fabric.Text(text, {left: 100, top:100, fontFamily:'Lato', fontSize:size});
    this.canvas.add(newText);
  }

  public addElement = (url: string) => {
    let group = [];
    fabric.loadSVGFromURL(url, (objects, options) => {
      let image = fabric.util.groupSVGElements(group);
      image.scale(0.2);
      image.set({
        left: 100,
        top: 100,
        // height: 100,
        // width: 100,
      });
      
      this.canvas.add(image); 
      this.canvas.renderAll(); 
    },
    function(item, object) {
      object.set('id', item.getAttribute('id'));
      group.push(object);
    });
  }

}
