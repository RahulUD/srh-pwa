import { Component, Input, OnInit } from '@angular/core';
enum MarqueeDirection {
  left = 'left',
  right = 'right',
  alternate = 'alternate'
}

enum MarqueeSpeed {
  drowsy = 'drowsy',
  slow = 'slow',
  normal = 'normal',
  fast = 'fast',
  swift = 'swift',
  hyper = 'hyper',
}
@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent implements OnInit {

  @Input() speed!: string;
  @Input() duration!: string;
  @Input() direction!: MarqueeDirection;
  @Input() stopOnHover = false;

  marqueeDirection = MarqueeDirection;
  marqueeSpeed = MarqueeSpeed;
  ngOnInit() {
  }

  
}