import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() private firstName: string = '';
  @Input() private lastName: string = '';
  @Input() private userRole: string = '';
  @Input() private email: string = '';
  @Output() private logEvent: EventEmitter<any> = new EventEmitter();
  private clicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public setClicked = function(): void {
    this.clicked = !this.clicked;
  }

  public logout = function(): void {
    this.logEvent.emit(false);
  }
}
