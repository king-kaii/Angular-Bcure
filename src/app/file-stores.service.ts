import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileStoresService {

  constructor(private http: HttpClient) { }
  
getFiles(fileName: any){
  return this.http.get('http//localhost:8080/ms/fileUpload', fileName);
}
  
}
