import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//这里的html写法会被编译成一个函数调用,xxx.createElelent(h1, "hello world")
const name = "jack"
const h = 
<div>
    <h1>Hello world {name}</h1>
    <h2>head 2</h2>
</div>


ReactDOM.render(h,
    document.getElementById('root')
)
