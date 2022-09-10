const nine = document.getElementById("nine")
const eight = document.getElementById("eight")
const seven = document.getElementById("seven")
const six = document.getElementById("six")
const five = document.getElementById("five")
const four = document.getElementById("four")
const three = document.getElementById("three")
const two = document.getElementById("two")
const one = document.getElementById("one")
const doubleZero = document.getElementById("doubleZero")
const zero = document.getElementById("zero")
const point = document.getElementById("point")

//operators
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const add = document.getElementById("add")
const substract = document.getElementById("substract")
const total = document.getElementById("total")
const clearAll = document.getElementById("clear")
const sqrt = document.getElementById("delete")

let answer = document.getElementById("answer")
let problem = document.getElementById("problem")
let totalAnswer = document.getElementById("totalAnswer")

let prev = []
let nums = []
let numbers = ""
let operator = ""
let formula = ""
function cleared(){
   nums = []
   numbers = ""
   operator = ""
   formula = ""
  answer.innerHTML = ""
  totalAnswer.innerHTML = ""
  problem.innerHTML = ""
  problem.style.animation = ""
  answer.style.animation = ""
}

one.addEventListener("click", () =>{
 numbers += 1
answer.innerHTML += 1
formula += "1"
solve() 
one.style.animation ="color .2s"
setTimeout(()=>{
  one.style.animation =""
}, 300)
})

two.addEventListener("click", () => {
numbers += 2
answer.innerHTML += 2
formula += "2"
solve()
two.style.animation = "color .2s"
setTimeout(() => {
  two.style.animation = ""
}, 300)
})

three.addEventListener("click", () => {
   numbers += 3
   answer.innerHTML += 3
   formula += "3"
   solve()
   three.style.animation = "color .2s"
   setTimeout(() => {
     three.style.animation = ""
   }, 300)
})

four.addEventListener("click", () => {
  numbers += 4
  answer.innerHTML += 4
  formula += "4"
  solve()
  four.style.animation = "color .2s"
  setTimeout(() => {
    four.style.animation = ""
  }, 300)
})

five.addEventListener("click", () => {
  numbers += 5
  answer.innerHTML += 5
  formula += "5"
  solve()
  five.style.animation = "color .2s"
  setTimeout(() => {
    five.style.animation = ""
  }, 300)
})

six.addEventListener("click", () => {
  numbers += 6
  answer.innerHTML += 6
  formula += "6"
  solve()
  six.style.animation = "color .2s"
  setTimeout(() => {
    six.style.animation = ""
  }, 300)
})

seven.addEventListener("click", () => {
  numbers += 7
  answer.innerHTML += 7
  formula += "7"
  solve()
  seven.style.animation = "color .2s"
  setTimeout(() => {
    seven.style.animation = ""
  }, 300)
})

eight.addEventListener("click", () => {
  numbers += 8
  answer.innerHTML += 8
  formula += "8"
  solve()
  eight.style.animation = "color .2s"
  setTimeout(() => {
    eight.style.animation = ""
  }, 300)
})

nine.addEventListener("click", () => {
  numbers += 9
  answer.innerHTML += 9
  formula += "9"
  solve()
  nine.style.animation = "color .2s"
  setTimeout(() => {
    nine.style.animation = ""
  }, 300)
})

doubleZero.addEventListener("click", () => {
  numbers += "00"
  answer.innerHTML += "00"
  formula += "00"
  solve()
  doubleZero.style.animation = "color .2s"
  setTimeout(() => {
    doubleZero.style.animation = ""
  }, 300)
})

zero.addEventListener("click", () => {
  numbers += 0
  answer.innerHTML += 0
  formula += "0"
  solve()
  zero.style.animation = "color .2s"
  setTimeout(() => {
    zero.style.animation = ""
  }, 300)
})

point.addEventListener("click", () => {
  numbers += "."
  answer.innerHTML += "."
  formula += "."
  solve()
  point.style.animation = "color .2s"
  setTimeout(() => {
    point.style.animation = ""
  }, 300)
})

divide.addEventListener("click", () => {
  if (numbers === ""){
    return
  }else{
    nums.push(Number(numbers))
    numbers = ""
    operator = "÷"
    answer.innerHTML += "÷"
    formula += "÷"
    solve()
    
  }
})

multiply.addEventListener("click", () => {
  if (numbers === "") {
    return
  } else {
    nums.push(Number(numbers))
    numbers = ""
    operator = "x"
    answer.innerHTML += "x"
    formula += "x"
    solve()
  }
})

substract.addEventListener("click", () => {
  if (numbers === "") {
    return
  } else {
    nums.push(Number(numbers))
    numbers = ""
    operator = "-"
    answer.innerHTML += "-"
    formula += "-"
    solve()
  }
})

add.addEventListener("click", () => {
  if (numbers === "") {
    return
  } else {
    nums.push(Number(numbers))
    numbers = ""
    operator = "+"
    answer.innerHTML += "+"
    formula += "+"
    solve()
   
  }
})


sqrt.addEventListener("click",()=>{
  answer.innerHTML += "√"
  operator ="√"
  formula += "√"
})

function solve(){
  if (operator === "+") {
     totalAnswer.innerHTML = nums.reduce((accumulator,allNums)=> accumulator + allNums) + Number(numbers)
  }else if(operator === "-"){
    totalAnswer.innerHTML = nums.reduce((accumulator,allNums)=> accumulator - allNums) - Number(numbers)
  }else if (operator === "x") {
    totalAnswer.innerHTML = nums.reduce((accumulator, allNums) => accumulator * allNums) * Number(numbers)
  }else if(operator === "÷"){
    totalAnswer.innerHTML = nums.reduce((accumulator, allNums) => accumulator / allNums) / Number(numbers)
  }else if(operator === "√"){
    if (numbers != "") {
      totalAnswer.innerHTML = Math.sqrt(numbers)
    } else {
      totalAnswer.innerHTML = Math.sin(nums.reduce((accumulator, allNums) => accumulator + allNums) + Number(numbers))
    }
  }
}

function solveS() {
  if (operator === "+") {
    let answerSolve = nums.reduce((accumulator, allNums) => accumulator + allNums) + Number(numbers)
    answer.innerHTML = answerSolve
    problem.innerHTML = formula + "="
    problem.style.animation = "aniProblem .5s"
    answer.style.animation = "aniAnswer .5s"
    totalAnswer.innerHTML = ""
    nums = []
    numbers = answerSolve
    setTimeout(()=>{
      problem.style.animation = ""
      answer.style.animation = ""
    },600)
  } else if (operator === "-") {
    let answerSolve = nums.reduce((accumulator, allNums) => accumulator - allNums) - Number(numbers)
    answer.innerHTML = answerSolve
    problem.style.animation = "aniProblem .5s"
    answer.style.animation = "aniAnswer .5s"
    problem.innerHTML = formula + "="
    totalAnswer.innerHTML = ""
    nums = []
    numbers = answerSolve
    setTimeout(() => {
      problem.style.animation = ""
      answer.style.animation = ""
    }, 600)
  } else if (operator === "x") {
    let answerSolve = nums.reduce((accumulator, allNums) => accumulator * allNums) * Number(numbers)
    answer.innerHTML = answerSolve
    problem.style.animation = "aniProblem .5s"
    answer.style.animation = "aniAnswer .5s"
    problem.innerHTML = formula + "="
    totalAnswer.innerHTML = ""
    nums = []
    numbers = answerSolve
    setTimeout(() => {
      problem.style.animation = ""
      answer.style.animation = ""
    }, 600)
  } else if(operator === "÷" ) {
    let answerSolve = nums.reduce((accumulator, allNums) => accumulator / allNums) / Number(numbers)
    answer.innerHTML = answerSolve
    problem.style.animation = "aniProblem .5s"
    answer.style.animation = "aniAnswer .5s"
    problem.innerHTML = formula + "="
    totalAnswer.innerHTML = ""
    nums = []
    numbers = answerSolve
    setTimeout(() => {
      problem.style.animation = ""
      answer.style.animation = ""
    }, 600)
  }else if(operator === "√"){
    if (numbers != "") {
      let answerSolve = Math.sqrt(numbers)
      answer.innerHTML = answerSolve
      problem.style.animation = "aniProblem .5s"
      answer.style.animation = "aniAnswer .5s"
      problem.innerHTML = formula + "="
      totalAnswer.innerHTML = ""
      nums = []
numbers = answerSolve
      setTimeout(() => {
        problem.style.animation = ""
        answer.style.animation = ""
      }, 600)
    } else {
let answerSolve = Math.sqrt(numbers)
      answer.innerHTML = answerSolve
      problem.style.animation = "aniProblem .5s"
      answer.style.animation = "aniAnswer .5s"
      problem.innerHTML = formula + "="
      totalAnswer.innerHTML = ""
      nums = []
      numbers = answerSolve
      setTimeout(() => {
        problem.style.animation = ""
        answer.style.animation = ""
      }, 600)
    }
  }
}

