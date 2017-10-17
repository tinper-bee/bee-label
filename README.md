# bee-label

bee-control-label 更名为 bee-label

[![npm version](https://img.shields.io/npm/v/bee-label.svg)](https://www.npmjs.com/package/bee-label)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-label/master.svg)](https://travis-ci.org/tinper-bee/bee-label)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-label/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-label?branch=master)


修饰`FormControl`文字元素


## 使用
使用单独的bee-label包
#### 组件引入
先进行下载bee-label包

```
npm install --save bee-label
```
组件调用
```js
import ControlLabel from 'bee-label';

React.render(<div>
        <ControlLabel />
        <ControlLabel>test</ControlLable>
</div>, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-label.css
```
<link rel="stylesheet" href="./node_modules/build/bee-label.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/ControlLabel.scss"
//或是
import "./node_modules/build/bee-label.css"
```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|

### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-label
$ cd bee-label
$ npm install
$ npm run dev
```
