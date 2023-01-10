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

  @Output() outputClick: EventEmitter<boolean>;

  constructor() {
    this.title = "";
    this.type = "purple";
    this.disabled = false;
    
    this.outputClick = new EventEmitter<boolean>();
  }

  public ngOnInit(): void {}
  

}
