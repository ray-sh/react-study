import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*这里的html写法会被编译成一个函数调用,
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
*/

//react的本质就是一个render函数，render会智能计算dom，只更新页面上变化的部分
function clock()
{
    const h = <div>
        <h1>clock</h1>
        <h2 class="clock">It's {new Date().toLocaleTimeString()}</h2>
    </div>
    ReactDOM.render(h,document.getElementById('root'))
}
setInterval(clock,1000)