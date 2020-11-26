import { fabric } from 'fabric';


export class Util {

  public clipboard: any;

  constructor() {}

  public copy = (canvas: fabric.Canvas): fabric.Object => {
    let obj: any = canvas.getActiveObject();
    if (obj.emoji) {
    obj.clone((cloned) => {
      // cloned.emoji = true;
      this.clipboard = cloned;
    },['emoji']);
 
    } else {
      obj.clone((cloned) => {
        this.clipboard = cloned;
      });
    }
    return this.clipboard;
  }

  public paste = (canvas: fabric.Canvas) => {
	// clone again, so you can do multiple copies.
    this.clipboard.clone((clonedObj) => {
      canvas.discardActiveObject();
      clonedObj.set({
        left: clonedObj.left + 10,
        top: clonedObj.top + 10,
        evented: true,
      });
      //To not lose emoji property on clone
      if(this.clipboard.emoji) {clonedObj.set({emoji: true})};
      if (clonedObj.type === 'activeSelection') {
        // active selection needs a reference to the canvas.
        clonedObj.canvas = canvas;
        clonedObj.forEachObject(function(obj) {
          canvas.add(obj);
        });
        // this should solve the unselectability
        clonedObj.setCoords();
      } else {
        canvas.add(clonedObj);
      }
      this.clipboard.top += 10;
      this.clipboard.left += 10;
      canvas.setActiveObject(clonedObj);
      canvas.requestRenderAll();
    });
  }

  public delete = (canvas: fabric.Canvas) => {
    let selection: any;
    selection = canvas.getActiveObject();
    if (selection.type === 'activeSelection') {
        selection.forEachObject((element) => {
            canvas.remove(element);
        });
    }
    else{
        canvas.remove(selection);
    }
    canvas.discardActiveObject();
    canvas.requestRenderAll();
  }

  public group = (canvas: fabric.Canvas) => {
    let activeObj: any = canvas.getActiveObject();
    let activeGroup = activeObj.toGroup();

    activeGroup.clone((newgroup) => {
      canvas.remove(activeGroup);
      canvas.add(newgroup);
      canvas.setActiveObject(newgroup);

    });
    canvas.requestRenderAll();
  }


  public ungroup = (canvas: any) => {
    let activeObject:fabric.Group = canvas.getActiveObject();
    activeObject.toActiveSelection();
    canvas.requestRenderAll();
  }


}
