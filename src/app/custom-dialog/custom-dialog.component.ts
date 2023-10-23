import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})
export class CustomDialogComponent {
  @Input() title: string="";
  @Input() message: string="";
  @Output() onClose = new EventEmitter<boolean>();

  closeDialog(result: boolean) {
    this.onClose.emit(result);
  }

}
