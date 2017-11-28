import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '震惊!';
  content = '男人看会沉默,女人看了会流泪';

  // 传给footer的方法
  toFooterFn(data) {
    console.log(`我是来自父组件的方法, 我收到一条消息: ${ data }`);
  }

  // 监听aside子组件的sonEven事件处理函数
  sonEvenHandler(data) {
    console.log(`监听到来自子的sonEvent事件, 附带了一些值: ${data}`);
  }
}
