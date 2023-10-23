import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
    constructor(private router:ActivatedRoute,private dataService:DataService){}
    public channelId:any='';
    public loader:boolean=true;
    public channelData:any;
    public messages:any=[];
    public currentUserId:any;
    fecthUserData(){
        this.dataService.getUserData().subscribe((resp:any)=>{
            console.log("-->RESPONSE FROM BACKEND FOR USER DETAILS:",resp);
            if(resp.error==false)
            {
                this.currentUserId=resp.data.id
            }
        })
      }
      fetchAllMessages()
      {
          this.dataService.getAllmessages(this.channelId).subscribe((resp:any)=>{
                if(resp.error==false)
                  this.messages=resp.data;
          })
      }
    ngOnInit(): void {
        this.router.params.subscribe((params:any)=>{
            this.channelId=params.id;
            console.log("CHANNEL ID:-->",params.id);
            this.dataService.getParticularChannel(params?.id).subscribe((resp:any)=>{
                 if(resp.error==false)
                 {
                    this.channelData=resp.data;
                    this.loader=false;
                 }
                 
            })
            this.fecthUserData();
            this.fetchAllMessages();
        })
    }
    addMessages(text:any)
    {
      if(text=='')
      return ;
      this.dataService.addMessages(this.channelId,text).subscribe((resp:any)=>{
              console.log("RESPLY FOR SENDING MSGE FROM BACKEND:",resp);
              if(resp.error==false)
              {
                this.fetchAllMessages();
                return;
              }
        })
    }
}
