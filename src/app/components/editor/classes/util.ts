import { fabric } from 'fabric';


export class Util {

  public clipboard: fabric.Object;

  constructor() {}

  public copy = (canvas: fabric.Canvas): fabric.Object => {
    canvas.getActiveObject().clone((cloned) => {
      this.clipboard = cloned;
    });
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
}
