import {Observable, Subject} from "rxjs";

export class DataFormatHelper {
  static blobToBase64(blob: Blob): Observable<string> {
    const loaded = new Subject<string>();
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = (reader.result as string).split(',')[1];
      loaded.next(base64);
    };
    reader.onerror = () => loaded.error(reader.error);
    reader.readAsDataURL(blob);

    return loaded.asObservable();
  }
}