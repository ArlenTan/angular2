// 使用angular进行web端开发,一定要引入这个模块
import { BrowserModule } from '@angular/platform-browser';
// 这是一个装饰器, 只要使用这个装饰器装饰类, angular就认为这个类是Angular模块
import { NgModule } from '@angular/core';
// 导入根组件, 然后angular从根组件开始渲染整个页面
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
