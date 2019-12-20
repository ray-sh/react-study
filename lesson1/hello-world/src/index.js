import React, { Component } from 'react';
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
//setInterval(clock,1000)

//自定义组件本质上也是一个函数
//自定义组件首字母一定要大写
function Welcome(props){
return <h1>welcome {props.name}</h1>
}

//组件的组合生成新的组件
function App(){
    return (
        <div>
            <Welcome name="jack"/>
            <Welcome name="Jim"/>
            <Welcome name="Tom"/>
        </div>
    )
 
}
//ReactDOM.render(<App/>, document.getElementById('root'))

//有状态的组件，用class来封装
class Clock extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    render(){
        return (
            <div>
                <h1>hello world</h1>
                <h2 class="clock">It's {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
    //当 Clock 组件第一次被渲染到 DOM 中的时候,叫做mount
    componentDidMount(){
        this.timer = setInterval(
            ()=>this.setState({date: new Date()}), 
            1000
            )
    }
    //组件被删除叫做Unmount，这个会调函数的主要用途是释放组件申请的资源，为什么不能自动释放？？
    componentWillUnmount()
    {
        clearInterval(this.timer)
    }
}
ReactDOM.render(<Clock />, document.getElementById('root'))