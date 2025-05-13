import {inject, Injectable} from '@angular/core';
import {ToastController, ToastOptions} from "@ionic/angular";
import {from, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastController = inject(ToastController);

  presentToast(message: string): Observable<void> {
    const options: ToastOptions = {
      message,
      duration: 1500,
      position: 'bottom',
    };

    return from(this.toastController.create(options))
      .pipe(switchMap((toast) => toast.present()));
  }
}
