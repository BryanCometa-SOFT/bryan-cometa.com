import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() title: String;
  @Input() type: "purple" | "normal";
  @Input() disabled: boolean;
  @Input() isLink: boolean;
  @Input() urlLink: String;


  @Output() outputClick: EventEmitter<boolean>;

  constructor() {
    this.title = "";
    this.type = "purple";
    this.disabled = false;
    this.isLink = false;
    this.urlLink = "";
    
    this.outputClick = new EventEmitter<boolean>();
  }

  public ngOnInit(): void {}
  

}
