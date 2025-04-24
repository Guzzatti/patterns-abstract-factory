import { WindowsRenderer, LinuxRenderer, MacOSRenderer, AndroidRenderer } from "./Renderer";
import { VectorDrawing, BitmapDrawing, ThreeDDrawing } from "./Drawing";

const vectorOnWindows = new VectorDrawing(new WindowsRenderer());
vectorOnWindows.draw();

const bitmapOnLinux = new BitmapDrawing(new LinuxRenderer());
bitmapOnLinux.draw();

const threeDOnMac = new ThreeDDrawing(new MacOSRenderer());
threeDOnMac.draw();

const vectorOnAndroid = new VectorDrawing(new AndroidRenderer());
vectorOnAndroid.draw();