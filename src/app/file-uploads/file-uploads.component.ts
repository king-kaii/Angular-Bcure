import { Component } from '@angular/core';
import { FileStoresService } from '../file-stores.service';

@Component({
  selector: 'app-file-uploads',
  templateUrl: './file-uploads.component.html',
  styles: [
  ]
})
export class FileUploadsComponent {

  constructor(private fileStoresService: FileStoresService) { }

  fileUploads() {
    this.fileStoresService.getFiles("abc.pdf").subscribe(files => {const urlPath = files
    }
    )
  }

}
