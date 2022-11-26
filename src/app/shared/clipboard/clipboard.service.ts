import { Injectable } from '@angular/core';
import { ToastService } from 'src/app/service/toast.service';

@Injectable({
  providedIn: 'root',
})
export class ClipboardService {
  constructor(private toastService: ToastService) {}

  copyToClipboard(copyText: string) {
    this.toastService.showSuccessToast(copyText)
    navigator.clipboard
      .writeText(copyText)
      .then(() => this.toastService.showSuccessToast(copyText));
  }
  copyFromClipboard() {
    navigator.clipboard.readText();
  }
}
