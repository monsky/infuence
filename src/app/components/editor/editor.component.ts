import {Component, OnInit, AfterViewInit} from '@angular/core';
import {fabric} from 'fabric';
import {Tab} from 'src/app/interfaces';
import {EditorService} from './editor.service';
import {PexelsService} from './pexels.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
  public canvas: any;
  public image: string;

  public tabs = [
    {
      name: 'TEXT',
      icon: 'typcn-edit'
    },
    {
      name: 'IMAGES',
      icon: 'typcn-image'
    },
    {
      name: 'ELEMENTS',
      icon: 'typcn-star-outline'
    },
    {
      name: 'EMOJIS',
      icon: 'typcn-heart-outline'
    },
    {
      name: 'DRAW',
      icon: 'typcn-pencil'
    },
    {
      name: 'UPLOAD',
      icon: 'typcn-upload-outline'
    },
  ];
  public selectedTab = 'TEXT';
  public images = [];

  constructor(public editorService: EditorService,
              private pexelsService: PexelsService) {
  }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas');
  }

  ngAfterViewInit() {
  }


  public selectTab = (tab: Tab) => {
    this.selectedTab = tab.name;
  };

  public addText = (text: string, font?: string, size?: number) => {
    let newText = new fabric.IText(text, {left: 100, top: 100, fontFamily: font, fontSize: size});
    this.canvas.add(newText);
  };

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
  };

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
        // cornersize: 10,
        hasRotatingPoint: true,
        // peloas: 12
      });
      // this.extend(image, this.randomId());
      this.canvas.add(image);
      // this.selectItemAfterAdded(image);
    });
  };

  public searchImage = () => {
    console.log(this.image);
    this.pexelsService.imageSearch(this.image)
      .subscribe(res => {
        console.log(res);
      });
  };

}
