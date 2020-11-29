import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fabric } from 'fabric';
import { Tab } from 'src/app/interfaces';
import { Util } from 'src/app/components/editor/classes/util';
import { EditorService } from './services/editor.service';
import { PexelsService } from './services/pexels.service';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  public canvas: any;
  public image: string;
  public selectedElement = null;
  public selectedElementType = 'none';
  public underline = false;
  public color = 'rgb(0,0,0)';
  public util: Util;

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
              public stateService: StateService,
              private pexelsService: PexelsService) { 
                this.util = new Util();
              }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      hoverCursor: 'pointer',
      selection: true,
      selectionBorderColor: 'blue',
      preserveObjectStacking: true,
      backgroundColor: '#fff',
      // stateful: true
    });
    fabric.Image.fromURL('../../../assets/back-black.svg', (img) => {
      this.canvas.setBackgroundImage(img, this.canvas.renderAll.bind(this.canvas), {
        scaleX: this.canvas.width / img.width,
        scaleY: this.canvas.height / img.height
      });
      this.stateService.state = this.canvas.toDatalessJSON();
      this.stateService.currentState$
      .subscribe(res => {
        if (!this.stateService.saved) {
          this.canvas.loadFromJSON(res);
        }
      });
    });

  }

  ngAfterViewInit() {
    this.canvas.on({
      'selection:created': (e) => {
        this.newSelection(e);
      },
      'selection:updated': (e) => {
        this.newSelection(e); 
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
        if (this.selectedElementType === 'i-text') {
          e.target.fontSize *= e.target.scaleX;
          e.target.fontSize = e.target.fontSize.toFixed(0);
          e.target.scaleX = 1;
          e.target.scaleY = 1;
          e.target._clearCache();
        };
        this.saveState();
      },
      'object:modified': (e) => {
        this.saveState();
      }
    });
  }


  public selectTab = (tab: Tab) => {
    this.selectedTab = tab.name;
  }

  //Canvas selection

  public newSelection = (e: any) => {
    console.log(e.target);
    console.log(e.target.type);
    this.selectedElement = e.target;
    this.selectedElementType = e.target.type;
    switch (this.selectedElementType) {
      case 'i-text':
        this.underline = this.selectedElement.styles["0"]["0"].underline;
        this.color = this.selectedElement.fill;
        break;
      case 'path':
        this.color = this.selectedElement.fill;
        break;
      case 'circle':
        this.color = this.selectedElement.fill;
        break;
      case 'rect':
        this.color = this.selectedElement.fill;
        break;
      case 'triangle':
        this.color = this.selectedElement.fill;
        break;
      case 'group':
        break;
    
      default:
        break;
    }

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
    this.canvas.requestRenderAll();
    this.saveState();
  }

  public addElement = (url: string, type: string, scale: number) => {
    let group = [];
    fabric.loadSVGFromURL(url, (objects, options) => {
      let image: any = fabric.util.groupSVGElements(group);
      if (type === 'element') {
        image.scale(scale);
      } else if (type === 'emoji') {
        image.toObject = (function(toObject) {
      return function() {
        return fabric.util.object.extend(toObject.call(this), {
          emoji: this.emoji
        });
          };
        })(image.toObject);
        image.emoji = true;
      }
      image.set({
        left: 100,
        top: 100,
      });
      
      this.canvas.add(image); 
      this.canvas.requestRenderAll(); 
      this.saveState();
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
    this.saveState();
  }

  public searchImage = () => {
    console.log(this.image);
    this.pexelsService.imageSearch(this.image)
    .subscribe(res => {
      console.log(res)
    });
  }

  extend(obj, type) {
    obj.toObject = (function(toObject) {
      return function() {
        return fabric.util.object.extend(toObject.call(this), {
          emoji: type
        });
      };
    })(obj.toObject);
  }

  //Toolbar utilites
  public selectColor = (color: string) => {
    this.selectedElement.set('fill', color);
    this.canvas.requestRenderAll();
    this.saveState();
  }

  //Edit objects on canvas
  //Edit Text

  public changeFont = (font: string) => {
    this.selectedElement.fontFamily = font;
    this.canvas.requestRenderAll();
    this.saveState();
  }

  public changeFontSize = (size: number) => {
    this.selectedElement.fontSize = size;
    this.canvas.requestRenderAll();
    this.saveState();
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
    this.canvas.requestRenderAll();
    this.saveState();
  }

  public saveState = () => {
    console.log('saved');
    let newState = this.canvas.toDatalessJSON();
    this.stateService.saveState(newState);
    if (this.selectedElement) {
      this.canvas.setActiveObject(this.selectedElement);
    }
    console.log(this.stateService.undoStack.length);
  }

  public undo = () => {
    this.stateService.undo();
  }

  public redo = () => {
    this.stateService.redo();
  }

}
