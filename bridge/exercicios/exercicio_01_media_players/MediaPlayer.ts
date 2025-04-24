import { MediaAPI } from "./MediaAPI";

export abstract class MediaPlayer {
  constructor(protected api: MediaAPI) {}
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

export class MusicPlayer extends MediaPlayer {
  play() { console.log("MusicPlayer:"); this.api.play(); }
  pause() { console.log("MusicPlayer:"); this.api.pause(); }
  stop() { console.log("MusicPlayer:"); this.api.stop(); }
}

export class VideoPlayer extends MediaPlayer {
  play() { console.log("VideoPlayer:"); this.api.play(); }
  pause() { console.log("VideoPlayer:"); this.api.pause(); }
  stop() { console.log("VideoPlayer:"); this.api.stop(); }
}

export class PodcastPlayer extends MediaPlayer {
  play() { console.log("PodcastPlayer:"); this.api.play(); }
  pause() { console.log("PodcastPlayer:"); this.api.pause(); }
  stop() { console.log("PodcastPlayer:"); this.api.stop(); }
}

export class AudiobookPlayer extends MediaPlayer {
  play() { console.log("AudiobookPlayer:"); this.api.play(); }
  pause() { console.log("AudiobookPlayer:"); this.api.pause(); }
  stop() { console.log("AudiobookPlayer:"); this.api.stop(); }
}