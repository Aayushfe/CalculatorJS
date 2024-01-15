(function(){
  let screen = document.querySelector('.screen')
  let buttons = document.querySelectorAll('.btn')
  let equal = document.querySelector('.btn-equal')
  let clear = document.querySelector('.btn-clear')
  
  buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      screen.value += e.target.dataset.num
    })
  })
  equal.addEventListener('click',()=>{
    if(screen.value ==""){
      screen.value =""
    }else{
      screen.value = eval(screen.value)
    }
  })
  clear.addEventListener('click',()=>{
    screen.value = ""
  })

})()
