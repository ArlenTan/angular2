import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  count = 0;
  @Output() sonEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    // 每隔一秒向外发射一次sonEvent事件
    setInterval(() => {
      this.sonEvent.emit(++this.count);  // emit是EventEmitter实例提供的发射数据的方法
    }, 2000);
  }

}
