import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css']
})
export class CreateChannelComponent {
      constructor(private dataService:DataService){}
      public error:any="";
      createANewChannel(name:string,desc:string)
      {
        if(name==''||desc=='')
        {
          this.error="Please enter all the fields";
          setTimeout(() => {
             this.error="";
          }, 4000);
          return
        }
        this.dataService.createChannel(name,desc).subscribe((resp:any)=>{
          console.log("RESPONSE FOR CREATING A NEW CHANNEL--->",resp);
        })

      }
}
