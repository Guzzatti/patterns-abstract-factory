export interface MediaAPI {
    play(): void;
    pause(): void;
    stop(): void;
  }
  
  export class BasicAPI implements MediaAPI {
    play() { console.log("BasicAPI: Playing"); }
    pause() { console.log("BasicAPI: Paused"); }
    stop() { console.log("BasicAPI: Stopped"); }
  }
  
  export class PremiumAPI implements MediaAPI {
    play() { console.log("PremiumAPI: High quality playback"); }
    pause() { console.log("PremiumAPI: Smooth pause"); }
    stop() { console.log("PremiumAPI: Stopping with fade out"); }
  }
  
  export class ProfessionalAPI implements MediaAPI {
    play() { console.log("ProfessionalAPI: Studio grade playback"); }
    pause() { console.log("ProfessionalAPI: Precision pause"); }
    stop() { console.log("ProfessionalAPI: Stop with reverb tail"); }
  }