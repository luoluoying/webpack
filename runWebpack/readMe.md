#### webpack 运行

![avatar](https://github.com/luoluoying/webpack/blob/master/runWebpack/img/webpack_run.png)

### 同步加载
##### 如上图webpack基本加载顺序
1. 加载```main.js```
2. 执行```main.js```入口函数  里面有一个__webpack_require__.d函数，定义exports对象导出属性
```js
(function(modules) {
  // .... some code
  // 通过moduleId来在各个模块加载时候进行加载
  var installedModules = {};
  // moduleId 实际上就是引入模块的路径
  function __webpack_require__(moduleId){
    // 判断缓存是否存在，存在直接加载
    if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
  }

  // index.js 为入口文件
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
```
3. 执行模块，index.js ，此时会判断是否引用其他模块，
   /* harmony import */ __webpack_require__ 判断，如果引入其余模块，则需要加载引入的模块
4. 执行完毕

### 异步加载
打包进main.js，main.js会集中消耗过多网络资源。
```一般解决方案是：根据需求降低首次加载文件的体积，在需要是，如前端路由切换，交互事件回调，异步加载其他文件并使用其中的模块```

#### ES import() 规范来异步加载模块

### 流程图
![avator](https://github.com/luoluoying/webpack/blob/master/runWebpack/img/async_webpack_run.jpg)