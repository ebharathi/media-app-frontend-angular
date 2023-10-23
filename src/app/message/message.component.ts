import { Component ,Input,OnInit} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
   constructor(private dataService:DataService){}
   @Input() user_id:any;
   @Input() text:any;
   @Input() loginId:any;
   @Input() time:any;
   public userData:any;
   public isImg:boolean=false;
   public imgData:any;
   public imgType:any;
   public formatedTime:any='';
   fecthUserData(){
    this.dataService.getFollowerData(this.user_id).subscribe((resp:any)=>{
        console.log("-->RESPONSE FROM BACKEND FOR FOLLOWER DETAILS IN CHAT:",resp);
        this.userData=resp.data;
        if(resp.data.img_data!==null){
          this.isImg=true;
          this.imgData=resp.data.img_data
          this.imgType=resp.data.img_mime_type;
        }
    })
  }
  formatDate()
  {
    const dateObject = new Date(this.time);

    const options:any = {
      hour: 'numeric', // 12-hour format
      minute: 'numeric',
      hour12: true, // Use 12-hour format
      weekday: 'short', // Specify the day of the week
    };
   const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(dateObject);
   this.formatedTime=formattedDateTime
  }
   ngOnInit(): void {
       this.fecthUserData();
       this.formatDate()
   }
}
