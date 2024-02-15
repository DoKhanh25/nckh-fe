import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultModel } from '../../model/result.model';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseUrl = 'http://localhost:5000/api/v1';

  constructor(public httpClient: HttpClient) { }


  uploadFile(file: File): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post( `${this.baseUrl}/uploadFile`, formData);
    ;
  }
}
