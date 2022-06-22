import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() i: number | undefined;
  @Input() title: string | undefined;
  @Input() author: string | undefined;
  @Input() clicked: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
