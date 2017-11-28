import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // 接收来自父指定的数据, 传什么数据我就展示什么
  @Input() list: any[] = [];

  // 用于发送remove事件
  @Output() remove = new EventEmitter<number | string>();

  constructor() { }

  // 用户点击删除按钮, 那么获取被删除数据的id, 然后使用事件的方式传播给父, 让父组件处理
  delBtnClick(id) {
    this.remove.emit(id);
  }

  ngOnInit() {
  }

}
