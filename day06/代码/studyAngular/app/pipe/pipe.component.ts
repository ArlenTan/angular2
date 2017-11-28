import { Component } from '@angular/core';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
    huihui = 'huihui';
    huahua = 'huahua';
    date = new Date();
    obj = {
        a: 100,
        b: 200,
        c: 300
    };
}
