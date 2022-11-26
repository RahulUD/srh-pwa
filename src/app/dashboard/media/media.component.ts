import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/service/toast.service';
import { ClipboardService } from 'src/app/shared/clipboard/clipboard.service';
import { mediaType } from 'src/types/media';
import { MediaService } from './service/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  fileName = '';
  medias!: mediaType[];
  imageFormate = 'image/jpeg' || 'image/png';
  constructor(
    private http: HttpClient,
    private medisService: MediaService,
    private clipBoardService: ClipboardService,
    private toastService: ToastService
  ) {}

  

  ngOnInit(): void {
    this.medisService.getMedias().subscribe((res) => {
      this.medias = res;
    });
  }
  onFileSelect(event: any) {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('avatar', file);

    this.medisService.postMedia(data).subscribe((res) => {
      this.medias = [res, ...this.medias];
      this.toastService.showSuccessToast('Uploaded document');
    });
  }
  copyToClipboard(path: string) {
    this.clipBoardService.copyToClipboard(path);
  }
}
