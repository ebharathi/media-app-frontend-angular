import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.css']
})
export class ImgDisplayComponent implements OnInit {
  @Input() item: any;
  public img:any=""
  imageData(){
    if (this.item?.img_data && this.item?.img_mime_type) {
      const uint8Array = new Uint8Array(this.item.img_data.data);
      const binaryData = uint8Array.reduce((data, byte) => data + String.fromCharCode(byte), '');
      const base64Image = btoa(binaryData);
      // return `data:${this.item.img_mime_type};base64,${base64Image}`;
      this.img=`data:${this.item.img_mime_type};base64,${base64Image}`;
    }
  }
  ngOnInit(): void {
      if(this.item?.img_data && this.item?.img_mime_type)
        this.imageData();
  }
}
