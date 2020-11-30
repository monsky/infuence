export class Draw {
  // private brush: fabric.FreeDrawingBrush;

  // constructor(brush: fabric.FreeDrawingBrush) {
  //   this.brush = brush;
  // }

  public changeWidth = (brush: fabric.FreeDrawingBrush, width: number) => {
    brush.width = width;
  }
}
