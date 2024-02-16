import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../service/document/document.service';
import moment from 'moment';

@Component({
  selector: 'app-copyright-info',
  templateUrl: './copyright-info.component.html',
  styleUrl: './copyright-info.component.css'
})
export class CopyrightInfoComponent implements OnInit {
  constructor(public documentService: DocumentService){

  }
  tableData: any[] = [];
  ngOnInit(): void {
    this.documentService.getRegisterInfo().subscribe(
      (res) => {
        if(res.code == 1){
          this.tableData = res.data;
        }
      },
      (err) => {console.log(err);
      }
    )
  }
  convertDateFormat(originalDate: any){
    return moment(originalDate).format('DD/MM/YYYY');
    
  }
  
}
