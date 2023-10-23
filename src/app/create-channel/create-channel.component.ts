import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css']
})
export class CreateChannelComponent {
      constructor(private dataService:DataService,private router:Router){}
      public error:any="";
      public btn:any="CREATE";
      public imageUrl: any;
      public selectedFile:any;
      onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file) {
          this.selectedFile=event.target.files[0];
          const reader = new FileReader();
          reader.onload = (e:any) => {
            this.imageUrl = e?.target?.result as string;
          };
          reader.readAsDataURL(file);
        } else {
          this.imageUrl = null;
        }
      }
      createANewChannel(name:string,desc:string)
      {
        this.btn="PLEASE WAIT..."
        if(!this.imageUrl)
        {
          this.btn="CREATE"
          this.error="*Please Upload a Channel Image";
          setTimeout(() => {
             this.error=""
          }, 4000);
          return;
        }
        if(name==''||desc=='')
        {
          this.btn="CREATE";
          this.error="*Please enter all the fields";
          setTimeout(() => {
             this.error="";
          }, 4000);
          return
        }
        const form=new FormData();
        form.append('file',this.selectedFile);
        form.append('name',name);
        form.append('desc',desc);
        this.dataService.createChannel(form).subscribe((resp:any)=>{
          console.log("RESPONSE FOR CREATING A NEW CHANNEL--->",resp);
          if(resp.error==false)
          {
             this.router.navigate([`/channel/view/${resp.channelId}`])
          }
          else{
            this.btn="CREATE";
            this.error=resp.message
          }
        })

      }
}
