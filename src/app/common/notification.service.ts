import { Injectable } from '@angular/core';

declare let toastr;

@Injectable()
export class NotificationService {

  info(message: string){
    toastr.info(message);
  }


  success(message: string, title?: string){
    toastr.success(message, title);
  }

}
