import { Component,Input,OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-channel-profile',
  templateUrl: './channel-profile.component.html',
  styleUrls: ['./channel-profile.component.css']
})
export class ChannelProfileComponent implements OnInit {
  constructor(private dataService:DataService){}
     @Input() id:any;
     public userData:any;
     public imgData:any;
     public imgType:any;
     public isImg:boolean=false;
       //function to fecth data
    fecthUserData(){
      this.dataService.getFollowerData(this.id).subscribe((resp:any)=>{
          console.log("-->RESPONSE FROM BACKEND FOR FOLLOWER DETAILS:",resp);
          this.userData=resp.data;
          if(resp.data.img_data!==null){
            this.isImg=true;
            this.imgData=resp.data.img_data
            this.imgType=resp.data.img_mime_type;
          }
      })
    }
     ngOnInit(): void {
         this.fecthUserData()
     }

}
