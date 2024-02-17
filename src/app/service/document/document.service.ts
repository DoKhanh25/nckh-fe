import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultModel } from '../../model/result.model';
import { CopyrightModel } from '../../model/copyright.model';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  baseUrl = 'http://localhost:5000/api/v1';

  constructor(public httpClient: HttpClient) { }


  uploadFile(file: File, obj: CopyrightModel): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('title', obj.title);
    formData.append('note', obj.note);
    formData.append('authorAccounts', obj.authorAccounts.join(','));
    formData.append('authorIds', obj.authorIds.join(','));
    formData.append('registerName', obj.registerName);
    
    return this.httpClient.post(`${this.baseUrl}/uploadFile`, formData);
  }

  createRegisterCopyright(obj: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/registerCopyright`, obj);
  }

  getRegisterInfo(): Observable<ResultModel> {
    return this.httpClient.get<ResultModel>(`${this.baseUrl}/getCopyrightInfo`);
  }

  getAllRegisterInfo(): Observable<ResultModel> {
    return this.httpClient.get<ResultModel>(`${this.baseUrl}/admin/getAllRegister`);
  }

  getFile(id: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/getFile/${id}`, {
    responseType: "arraybuffer"});
  }

  acceptCopyright(obj: any): Observable<ResultModel> {
    return this.httpClient.post<ResultModel>(`${this.baseUrl}/admin/acceptCopyright`, obj);
  }
}
