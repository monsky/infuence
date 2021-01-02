export class Draw {
  // private brush: fabric.FreeDrawingBrush;

  // constructor(brush: fabric.FreeDrawingBrush) {
  //   this.brush = brush;
  // }

  public changeWidth = (brush: any, width: number) => {
    brush.width = width;
  }

  public changeShadowWidth = (brush: any, width: number) => {
    brush.shadow.blur = width;
  }

  public changeShadowOffset = (brush: any, offset: number) => {
    brush.shadow.offsetX = offset;
    brush.shadow.offsetY = offset;
  }

  public changeColor = (brush: any, color: string) => {
    brush.color = color;
  }

  public changeShadowColor = (brush: any, color: string) => {
    brush.shadow.color = color;
  }
}
