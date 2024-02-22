import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document/document.service';
import moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-copyright-info',
  templateUrl: './copyright-info.component.html',
  styleUrl: './copyright-info.component.css'
})
export class CopyrightInfoComponent implements OnInit {
  constructor(public documentService: DocumentService, public httpClient: HttpClient, public toastrService: ToastrService){

  }
  role: any;
  tableData: any[] = [];


  ngOnInit(): void {
    this.role = localStorage.getItem("role") || "";
    if(this.role == "1"){
      this.documentService.getRegisterInfo().subscribe(
        (res) => {
          if(res.code == 1){
            this.tableData = res.data;
          }
        },
        (err) => {console.log(err);
        }
      ) 
    }else if(this.role == "2"){
      this.documentService.getAllRegisterInfo().subscribe(
        (res) => {
          if(res.code == 1){
            this.tableData = res.data;
          }
        },
        (err) => {console.log(err);
        }
      ) 
    }
    
  }
  convertDateFormat(originalDate: any){
    return moment(originalDate).format('DD/MM/YYYY');
    
  }

  getFileClick(id: any){
    this.httpClient.get(`http://localhost:5000/api/v1/getFile/${id}`, {responseType: 'blob'}).subscribe(
      (res) => {
        var file = new Blob([res], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      },
      (error) => {
        this.toastrService.error("Lỗi server")
      }
    )
  }

  acceptDocumentClick(id: any){
    this.documentService.acceptCopyright({id: id}).subscribe((res) => {
      if(res){
        this.toastrService.info(res.message);
      }
    },
    (err) => {
      this.toastrService.error("Lỗi server");
    })
  }
  
}
