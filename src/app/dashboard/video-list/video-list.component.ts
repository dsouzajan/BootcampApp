import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Video } from '../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input() videodata: any = [];
  @Output() selected = new EventEmitter<string>();
  @Output() highlighted = new EventEmitter<number>();
  clicked!: number;

  constructor() { }

  ngOnInit(): void {
  }

  highlight(i:number, title:string) {
    this.clicked = i;
    this.selected.emit(title);
  }
}
