import {MediaObject} from "@awesome-cordova-plugins/media/ngx";

export enum MediaType {
  video = 'video',
  audio = 'audio',
}

export interface MediaModel {
  mediaSrc: string;
  type: MediaType;
  mediaFile?: MediaObject;
}