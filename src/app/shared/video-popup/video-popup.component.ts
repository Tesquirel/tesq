import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SafeUrlPipe } from './safe-url.pipe';

@Component({
  selector: 'app-video-popup',
  imports: [],
  templateUrl: './video-popup.component.html',
  styleUrl: './video-popup.component.scss'
})
export class VideoPopupComponent {

  @Input() videoUrl = '';
  @ViewChild('videoDialog') dialogRef!: ElementRef<HTMLDialogElement>;

  sanitizedUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  /** Make this method PUBLIC so parent can call it */
  open(url: string) {
    this.videoUrl = this.convertToEmbed(url);
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    this.dialogRef.nativeElement.showModal();
  }

  close() {
    this.dialogRef.nativeElement.close();
    this.videoUrl = '';
    this.sanitizedUrl = null;
  }

  private convertToEmbed(url: string): string {
    // Case 1: youtu.be format
    if (url.includes('youtu.be')) {
      return url.replace('youtu.be/', 'www.youtube.com/embed/');
    }

    // Case 2: watch?v= format
    if (url.includes('watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }

    // Case 3: shorts
    if (url.includes('/shorts/')) {
      return url.replace('/shorts/', '/embed/');
    }

    return url; // Already an embed URL
  }
}
