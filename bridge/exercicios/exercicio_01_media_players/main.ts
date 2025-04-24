import { BasicAPI, PremiumAPI, ProfessionalAPI } from "./MediaAPI";
import { MusicPlayer, VideoPlayer, PodcastPlayer, AudiobookPlayer } from "./MediaPlayer";

const music = new MusicPlayer(new BasicAPI());
music.play();
music.pause();
music.stop();

const video = new VideoPlayer(new PremiumAPI());
video.play();
video.pause();
video.stop();

const podcast = new PodcastPlayer(new ProfessionalAPI());
podcast.play();
podcast.pause();
podcast.stop();

const audiobook = new AudiobookPlayer(new BasicAPI());
audiobook.play();
audiobook.pause();
audiobook.stop();