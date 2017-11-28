// 使用angular进行web端开发,一定要引入这个模块
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// 这是一个装饰器, 只要使用这个装饰器装饰类, angular就认为这个类是Angular模块
import { NgModule } from '@angular/core';

// 导入根组件, 然后angular从根组件开始渲染
import { AsideComponent } from './aside/aside.component';
import { AppComponent } from './app.component';
import { ClassStyleComponent } from './class-style.component';
import { PipeComponent } from './pipe/pipe.component';

@NgModule({
  // 当前模块的组件/指令/管道必须要写在这里才可以使用
  declarations: [
    AppComponent,
    ClassStyleComponent,
    AsideComponent,
    PipeComponent
  ],
  // 如果你要使用其他angular模块的东西,必须要在这里声明才可以使用
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 如果你要使用服务,那么把要使用的服务配置到这里才可以使用
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
