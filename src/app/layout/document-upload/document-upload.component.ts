import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../service/information/user-info.service';
import { DocumentService } from '../../service/document/document.service';
import { CopyrightModel } from '../../model/copyright.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrl: './document-upload.component.css'
})
export class DocumentUploadComponent implements OnInit{
  copyrightInfo: CopyrightModel = {
    registerName: "",
    authorNames: [] as any[],
    authorAccounts: [] as any[],
    authorIds: [] as any[],
    title: "",
    note: ""
  }

  fileUpload: any;


  authorAccountsOption: string[] = [];
  accountsInfoData: any[] = [];
  authorNames: string = "";
  authorIds: string = "";


  constructor(public userInformationService: UserInfoService, 
    public documentService: DocumentService,
    public toastService: ToastrService){

  }

  ngOnInit(): void {
    this.copyrightInfo.registerName = localStorage.getItem("username") || ""; 

    this.userInformationService.getAllInformation().subscribe(
      (res) => {

        this.accountsInfoData = res.data

        for(let i = 0; i <= res.data.length; i++){
          let x = res.data[i].username || "";
          this.authorAccountsOption.push(x);
        }
        
      },
      (err) => {
        console.log(err);
        this.toastService.error("Lỗi server")
      }
      )
  }

  multiSelectedChange(){
    this.accountsInfoData.forEach((value) => {
      if(this.copyrightInfo.authorAccounts.includes(value.username)
      && !this.copyrightInfo.authorIds.includes(value.author_identity)
      && !this.copyrightInfo.authorIds.includes(value.fullname)
      ){
        this.copyrightInfo.authorIds.push(value.author_identity);
        this.copyrightInfo.authorNames.push(value.fullname);
      } else if(!this.copyrightInfo.authorAccounts.includes(value.username)){
        let id = this.copyrightInfo.authorIds.indexOf(value.author_identity);
        let name = this.copyrightInfo.authorNames.indexOf(value.fullname);
        if(id > -1) { 
          this.copyrightInfo.authorIds.splice(id, 1);
        }
        if(name > -1){
          this.copyrightInfo.authorNames.splice(name, 1);
        }
      
      }
    })

     this.authorIds = this.copyrightInfo.authorIds.join(', ');
     this.authorNames = this.copyrightInfo.authorNames.join(', ');

  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileUpload = file;
  }

  onSubmit(){    

    this.documentService.uploadFile(this.fileUpload, this.copyrightInfo).subscribe(
      (res) => {
        this.toastService.info(res.message);
        this.ngOnInit();
      },
      (err) => {
        this.toastService.error("Lỗi server")
      }
    )
  
  }
}
