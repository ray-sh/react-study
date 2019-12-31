import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// v1 STAR MATCH - Starting Template

function ButtonList({handleClick, bts}){
    return utils.range(1,9).map(num => <Button key={num} num={num} state={bts[num-1]} onClick= {handleClick}/>)
  }
  function Button({num,onClick,state}) {
    //一些css的属性有所不同在react里面，backgroundColor，但是在w3c里background-color
    return <button 
             style={{backgroundColor: colors[state]}} 
             className="number" 
             onClick = {onClick}>{num}
    </button>
  }
  
  function StarList({stars})
  {
    return utils.range(1,stars).map((num) =>  <div className="star" key={num}/>)
  }
  const StarMatch = () => {
    let initButtons = Array(9).fill('available')
    let maxStars = utils.random(1,9)
    let initStarts =  utils.range(1,maxStars)
    const [buttons, setButtons] = useState(initButtons)
    const [stars, setStars] = useState(utils.random(1,9))
    const countOccurences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
      
    //计算所有选中的按钮数值的和
    const getSum = () => {
      let sum = 0
      for(let i =0; i< 10; i++)
      {
        if(buttons[i] === 'candidate')
          {
            sum = sum + i + 1
          }
      }
      return sum
    }
    //计算button的和，如果等于星星的数量，则标为绿色
    const markButton = (state) => {
      let newButtons = [...buttons]
      for(let i =0; i< 10; i++)
      {
        if(buttons[i] === 'candidate')
          {
            newButtons[i] = state
          }
      }
      setButtons(newButtons)
    }
    //重新生成新的星星
    const newStars = () =>{
      let leftButtons = []
      for(let i=0; i<10; i++)
      {
        if(buttons[i] === 'available')
        {
          leftButtons.push(i+1)
        }
      }
      console.log('available buttons', leftButtons)
      return leftButtons
    }
    
    
    useEffect(()=>{
     
      if(getSum() === stars)
      {
        markButton('used')
        let newSums = utils.randomSumIn(newStars(),18)
        setStars(newSums)
      }
      
      if(getSum() > stars){
        markButton('wrong')
      }
      
    })
    
    
    function handleClick(event){
      let value=parseInt(event.target.innerHTML)
      console.log('clicked button',value)
      let newButtons = [...buttons]
      console.log('newbuttons')
      if(buttons[value-1] === 'available')
      {
        newButtons[value-1] = 'candidate'
      }
      
      if(['candidate', 'wrong'].includes(buttons[value-1] ) )
      {
        newButtons[value-1]  = 'available'
      }
      setButtons(newButtons)
    }
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            <StarList stars={stars} />
          </div>
          <div className="right">
            <ButtonList handleClick={handleClick} bts = {buttons}/>
          </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
      </div>
    );
  };
  
  // Color Theme
  const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
  
  // Math science
  const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  
    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
  
    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length - 1)];
    },
  };
  
  ReactDOM.render(<StarMatch />, document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
