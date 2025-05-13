import {Component, inject} from '@angular/core';
import {MediaObject, Media} from '@awesome-cordova-plugins/media/ngx';
import {MediaType} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  readonly MediaType = MediaType;
  private media = inject(Media);
  
  mediaType = MediaType.audio;
  mediaFile: MediaObject | null = null;
  mediaSrc: string | null = null;

  constructor() {
    this.setMediaSource();
  }

  setMediaSource() {
    if (this.mediaType === MediaType.audio) {
      this.mediaSrc = 'assets/sample-audio.mp3';
      this.initializeMedia();
    } else {
      this.mediaSrc = 'assets/sample-video.mp4';
      this.initializeMedia();
    }
  }

  private initializeMedia() {
    if (this.mediaFile) {
      this.mediaFile.stop();
      this.mediaFile.release();
    }
    
    if (this.mediaSrc) {
      this.mediaFile = this.media.create(this.mediaSrc);
    }
  }

  play() {
    if (this.mediaFile) {
      this.mediaFile.play();
    }
  }

  pause() {
    if (this.mediaFile) {
      this.mediaFile.pause();
    }
  }

  stop() {
    if (this.mediaFile) {
      this.mediaFile.stop();
    }
  }
}
