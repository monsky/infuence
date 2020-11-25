import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fabric } from 'fabric';
import { Tab } from 'src/app/interfaces';
import { EditorService } from './editor.service';
import { PexelsService } from './pexels.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  public canvas: any;
  public image: string;
  public selectedElement: any;
  public selectedElementType: string;
  public underline = false;

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
  public images = [];

  constructor(public editorService: EditorService,
              private pexelsService: PexelsService) { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      hoverCursor: 'pointer',
      selection: true,
      selectionBorderColor: 'blue',
      stateful: true
    });
  }

  ngAfterViewInit() {
    this.canvas.on({
      'selection:created': (e) => {
        console.log(e.target.styles);
        this.selectedElement = e.target;
        this.selectedElementType = e.target.type;
        this.underline = e.target.styles["0"]["0"].underline;
      },
      'selection:updated': (e) => {
        console.log(e.target);
        this.selectedElement = e.target;
        this.selectedElementType = e.target.type;
        this.underline = e.target.styles["0"]["0"].underline;
      },
      'selection:cleared': (e) => {
        this.selectedElement = null;
        this.selectedElementType = 'none';
      },
      'object:scaling': (e) => {
        if(e.target.type === 'i-text') {
          this.selectedElement.fontSize = (this.selectedElement.fontSize * e.target.scaleX).toFixed(0);
        }
      },
      'object:scaled': (e) => {
        if (this.selectedElementType = 'i-text') {
          e.target.fontSize *= e.target.scaleX;
          e.target.fontSize = e.target.fontSize.toFixed(0);
          e.target.scaleX = 1;
          e.target.scaleY = 1;
          e.target._clearCache();
        };
      }
    })
  }


  public selectTab = (tab: Tab) => {
    this.selectedTab = tab.name;
  }


  //Add to canvas

  public addText = (text: string, font?: string, size?: number) => {
    let newText = new fabric.IText(text, 
      {
        left: 100, 
        top:100, 
        fontFamily:font, 
        fontSize:size,
        lockUniScaling:true,
        textAlign: 'left',
      });
    newText.setControlsVisibility({
      mr: false,
      ml: false,
      mt: false,
      mb: false
    });
    newText.setSelectionStyles({underline: false}, 0, text.length);
    this.canvas.add(newText);
    this.canvas.renderAll();
  }

  public addElement = (url: string, type: string, scale: number) => {
    let group = [];
    fabric.loadSVGFromURL(url, (objects, options) => {
      let image = fabric.util.groupSVGElements(group);
      if (type === 'element') {
        image.scale(scale);
        
      }
      image.set({
        left: 100,
        top: 100,
        // height: 50,
        // width: 50,
      });
      
      this.canvas.add(image); 
      this.canvas.renderAll(); 
    },
    function(item, object) {
      object.set('id', item.getAttribute('id'));
      group.push(object);
    });
  }

  public addImage = (url: string) => {
    // let el = event.target;
    fabric.Image.fromURL(url, (image) => {
      image.set({
        left: 10,
        top: 10,
        angle: 0,
        padding: 10,
        height: 150,
        width: 150,
        hasRotatingPoint: true,
      });
      // this.extend(image, this.randomId());
      this.canvas.add(image);
      // this.selectItemAfterAdded(image);
    });
  }

  public searchImage = () => {
    console.log(this.image);
    this.pexelsService.imageSearch(this.image)
    .subscribe(res => {
      console.log(res)
    });
  }

  //Edit objects on canvas
  //Edit Text

  public changeFont = (font: string) => {
    this.selectedElement.fontFamily = font;
    this.canvas.renderAll();
  }

  public changeFontSize = (size: number) => {
    this.selectedElement.fontSize = size;
    this.canvas.renderAll();
  }

  public changeFontStyle = (style: string) => {
    switch (style) {
      case 'bold':
        if (this.selectedElement.fontWeight === style) {
          delete this.selectedElement.fontWeight;
        } else {
          this.selectedElement.fontWeight = style;
        }
        break;
      case 'italic':
        if (this.selectedElement.fontStyle === style) {
          delete this.selectedElement.fontStyle;
        } else {
          this.selectedElement.fontStyle = style;
        }
        break;
      case 'underline':
        let length = this.selectedElement.text.length;
        if (this.underline === true) {
          this.selectedElement.setSelectionStyles({underline: false}, 0, length);
          this.underline = false; 
        } else {
          this.selectedElement.setSelectionStyles({underline: true}, 0, length);
          this.underline = true; 
        }
        break;
    }
    this.canvas.renderAll();
  }

}
