export interface Renderer {
    render(content: string): void;
  }
  
  export class WindowsRenderer implements Renderer {
    render(content: string) {
      console.log(`Windows rendering: ${content}`);
    }
  }
  
  export class LinuxRenderer implements Renderer {
    render(content: string) {
      console.log(`Linux rendering: ${content}`);
    }
  }
  
  export class MacOSRenderer implements Renderer {
    render(content: string) {
      console.log(`MacOS rendering: ${content}`);
    }
  }
  
  export class AndroidRenderer implements Renderer {
    render(content: string) {
      console.log(`Android rendering: ${content}`);
    }
  }