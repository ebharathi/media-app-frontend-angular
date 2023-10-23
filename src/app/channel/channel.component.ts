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
        })
    }
}
