import { Renderer } from "./Renderer";

export abstract class Drawing {
  constructor(protected renderer: Renderer) {}
  abstract draw(): void;
}

export class VectorDrawing extends Drawing {
  draw() {
    console.log("Drawing Vector Format...");
    this.renderer.render("Vector graphics");
  }
}

export class BitmapDrawing extends Drawing {
  draw() {
    console.log("Drawing Bitmap Format...");
    this.renderer.render("Bitmap image");
  }
}

export class ThreeDDrawing extends Drawing {
  draw() {
    console.log("Drawing 3D Format...");
    this.renderer.render("3D model");
  }
}