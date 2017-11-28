// 这个Component也是一个装饰器
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  site = '北京';
  isTrue = false;

  // 用在*ngFor指令
  cityList = [
    '北京',
    '上海',
    '广州',
    '深圳',
    '杭州'
  ];
  cityList2 = [
    { name: '北京', id: 10001 },
    { name: '上海', id: 10002 },
    { name: '深圳', id: 10003 }
  ];
  changeCityList(): void {
    this.cityList[1] = '上海滩';
  }
  // 这个函数用于ngFor指令的性能优化, 如果数据比较复杂,我们最好自己写一些逻辑给每条数据搞一个唯一ID
  trackByFn(index: number, cityObj: any) {
    return cityObj.id;
  }

  tpl = `<div>
    <h4>我是数据里的字符串模版</h4>
    <h4>我是数据里的字符串模版</h4>
  </div>`;
  href = 'http://www.163.com';
  src = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3158585383,2942077611&fm=27&gp=0.jpg';
  aImg(): void {
    this.href = 'http://www.baidu.com';
    this.src = 'https://www.baidu.com/img/bd_logo1.png';
  }

  // 数据驱动思想
  hasTaoKong = true;
  
  // 双向数据绑定演示数据
  bingData = '双向数据绑定';

  classObj = {
    a: Math.random() > 0.5,
    b: Math.random() > 0.5,
    c: Math.random() > 0.5,
    d: Math.random() > 0.5,
    e: Math.random() > 0.5
  };

  changeTaoKong(): void {
    this.hasTaoKong = !this.hasTaoKong;
  }

  // 这是按钮的事件处理函数
  clickHandler(): void {
    console.log('按钮被点击了');
  }

  // 这两个方法对应页面上的两个表单
  inputHandler(e: any): void {
    console.log(e.target.value);
    this.site = e.target.value;    // 值发生变化, 我们就修改site的值
  }
  changeHandler(e: any): void {
    console.log(e.target.value);
  }
}
