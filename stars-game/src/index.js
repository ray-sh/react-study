import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// v1 STAR MATCH - Starting Template

function ButtonList(props) {
  return utils.range(1,9).map(num=> <button style={{backgroundColor: colors[props.state[num-1]]}} onClick={()=>props.onClick(num,props.state[num-1])} key={num} className="number"> {num} </button>)
}
  

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1,9))
  const [buttonStates, setButtonStates] = useState(new Array(9).fill('available'))
  const sumOfState = (state) =>{
    let sum = 0;
    for(let i=1; i<10; i++)
    {
      if(buttonStates[i-1] === state)
      {
        sum += i
      }
    }
    return sum
  }
  
  const updateButtonState = (value,oldState,state) => {
    let newStates = [...buttonStates]
    for(let i=0; i<9; i++){
      if(buttonStates[i] === oldState)
      {
        newStates.splice(i, 1, state);
      }
    }
    newStates.splice(value-1, 1, state);
    setButtonStates(newStates)
    return newStates
  }

  const refreshStars = (states) =>
  {
    let arrs = []
    for(let i=1; i<10; i++)
    {
      if(states[i-1] === 'available'){
        arrs.push(i)
      }
    }
    console.log('available buttons',arrs)
    setStars(utils.randomSumIn(arrs,18))
  }
  const handleButtonClick = (value, state) => {
    if(state === 'wrong' || state === 'candidate'){
      updateButtonState(value,null,'available')
    }
    if(state === 'available')
    {
      console.log('handle click')
      if(sumOfState('candidate') + value > stars)
      {
        updateButtonState(value,'candidate','wrong')
        console.log('mark all candidate wrong')
      }else if(sumOfState('candidate') + value < stars)
      {
        updateButtonState(value,null,'candidate')
      }else if(sumOfState('candidate') + value === stars){
        let states = updateButtonState(value,'candidate','used')
        refreshStars(states)
      }
    }

  }
  
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1,stars).map(num => <div key={num} className="star"/>)}
        </div>
        <div className="right">
          <ButtonList onClick={handleButtonClick} state={buttonStates}/>
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
