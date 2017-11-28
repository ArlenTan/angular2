import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() fn: any;

  constructor() { }

  // 当组件初始化完毕后就会调用该方法, 这个方法执行时证明我们的属性与方法可以只有了
  ngOnInit() {
    // 为了测试来自父组件的fn方法可用, 这里开一个定时器过2秒尝试调一下
    setTimeout(() => {
      this.fn('我是儿子, 我要找爸爸');
    }, 2000);
  }

}
