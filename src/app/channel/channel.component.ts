import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
    constructor(private router:ActivatedRoute){}
    public channelId:any='';
    ngOnInit(): void {
        this.router.params.subscribe((params:any)=>{
            this.channelId=params.id;
            console.log("CHANNEL ID:-->",params.id)
        })
    }
}
