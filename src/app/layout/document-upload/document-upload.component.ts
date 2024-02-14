import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../service/information/user-info.service';


@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.css'
})
export class DocumentUploadComponent implements OnInit{
  copyrightInfo = {
    registerName: "",
    authorNames: "",
    authorAccounts: [],
    authorIds: "",
    title: "",
    note: ""  
  }
  authorAccountsOption: string[] = [];


  constructor(public userInformationService: UserInfoService){

  }

  ngOnInit(): void {
  
    this.copyrightInfo.registerName = localStorage.getItem("username") || ""; 

    this.userInformationService.getAllInformation().subscribe(
      (res) => {
        console.log(res.data);
        for(let i =0; i <= res.data.length; i++){
          let x = res.data[i].username || "";
          this.authorAccountsOption.push(x);
        }
        
      })

  }

}
