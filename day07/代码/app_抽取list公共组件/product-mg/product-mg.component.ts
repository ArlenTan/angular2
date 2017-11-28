import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-mg',
  templateUrl: './product-mg.component.html',
  styleUrls: ['./product-mg.component.css']
})
export class ProductMgComponent implements OnInit {

  // 商品列表数据
  productList: any[] = [
    {
        id: 1,
        name: '奔驰',
        ctime: '2017-08-26T08:37:18.000Z'
    },
    {
        id: 2,
        name: '宝马',
        ctime: '2017-08-25T06:32:14.000Z'
    }
  ];

  // 新商品的名称
  newName = '';

  constructor(private http: HttpClient) { }

  // 添加商品, 添加成功后再次获取商品列表刷新视图
  addProduct() {
    const postFormDataConfig = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}) };
    this.http.post('http://vue.studyit.io/api/addproduct', `name=${this.newName}`, postFormDataConfig).toPromise()
    .then(
      (data) => this.getProductList(),
      (err) => console.log(err)
    );
  }

  // 删除商品
  removeProduct(id) {
    this.http.get(`http://vue.studyit.io/api/delproduct/${id}`).toPromise()
    .then(() => {
      // 把要删除的商品从数组中过滤掉
      this.productList = this.productList.filter(product => product.id !== id);
    });
  }

  // 获取商品列表数据
  getProductList() {
    this.http.get('http://vue.studyit.io/api/getprodlist').toPromise()
    .then(
      (data: any) => { this.productList = data.message; },
      (err: any) => { console.log(err); }
    );
  }

  // 初始化实例化之后就会自动调用该方法,
  // 一般我们的数据初始化或者ajax请求的代码都写在这里
  // 尽量不要写在构造器, 保证构造器的简洁性
  ngOnInit() {

    // 页面一进来,先请求接口渲染一下
    this.getProductList();
  }

}
