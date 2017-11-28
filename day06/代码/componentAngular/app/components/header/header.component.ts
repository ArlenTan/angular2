// 子要接收来自父的数据,我们需要导入Input装饰器, 然后用它装饰一个属性
// 这个属性的名字必须和父[]里面的那么名字一样
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title = '子title';
  @Input() msg = '子内容';

  constructor() { }

  ngOnInit() {
  }

}
