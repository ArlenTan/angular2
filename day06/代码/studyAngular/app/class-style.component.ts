import { Component } from '@angular/core';

@Component({
    selector: 'app-class-style',
    templateUrl: './class-style.component.html',
    styleUrls: ['./class-style.component.css']
})
// angular中的组件有个命名规范,全部以Component结尾
export class ClassStyleComponent {
    styleMore = {
        a: Math.random() > 0.5,
        b: Math.random() > 0.5,
        c: Math.random() > 0.5,
        d: Math.random() > 0.5,
        e: Math.random() > 0.5
    };

    // style样式
    pColor = 'green';
    pStyleMore = {
        color: 'yellow',
        fontSize: '25px'
    };

}
