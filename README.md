# bee-control-label
[![npm version](https://img.shields.io/npm/v/bee-control-label.svg)](https://www.npmjs.com/package/bee-control-label)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-control-label/master.svg)](https://travis-ci.org/tinper-bee/bee-control-label)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-control-label.svg)](https://david-dm.org/tinper-bee/bee-control-label#info=devDependencies)


修饰`FormControl`文字元素


## 使用
使用单独的bee-control-label包
#### 组件引入
先进行下载bee-control-label包

```
npm install --save bee-control-label
```
组件调用
```js
import ControlLabel from 'bee-control-label';

React.render(<div>
        <ControlLabel />
        <ControlLabel>test</ControlLable>
</div>, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-control-label.css
```
<link rel="stylesheet" href="./node_modules/build/bee-control-label.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/ControlLabel.scss"
//或是
import "./node_modules/build/bee-control-label.css"
```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|

### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-control-label
$ cd bee-control-label
$ npm install
$ npm run dev
```
