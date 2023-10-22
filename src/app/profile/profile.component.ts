import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public selectedFile:any;
  uploadImage(event:any)
  {
     console.log("File selected--->",event?.target?.files[0]);
     const formData=new FormData();
     formData.append('file',event?.target?.files[0]);
     
  }
}
