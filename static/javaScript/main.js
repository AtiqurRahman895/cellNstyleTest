// change the background of nav bar

window.addEventListener(`scroll`, () => {
    if (window.scrollY >= 20) {
      document
        .querySelector(`.headerSection`)
        .classList.add(`headerSectionAnimation`);
    } else {
      document
        .querySelector(`.headerSection`)
        .classList.remove(`headerSectionAnimation`);
    }
  });


// slider

let slider=document.querySelectorAll(`.slider`)
let firstCardWidth=document.querySelectorAll(`.firstCard`)
let prevButton=document.querySelectorAll(`.prevButton`)
let nextButton=document.querySelectorAll(`.nextButton`)

// console.log(slider[0].scrollWidth)
// console.log(slider[0].clientWidth)

nextButton.forEach((eachNextButton,index)=>{
  setInterval(() => {
    if(slider[index].scrollWidth <= slider[index].clientWidth){
      nextButton[index].style.display=`none`
    }else{
      nextButton[index].style.display=`inline-block`
    }
  }, 1000);

  eachNextButton.addEventListener(`click`,(e)=>{
    slider[index].scrollLeft +=firstCardWidth[index].offsetWidth
  })
})
prevButton.forEach((eachPrevButton,index)=>{
  setInterval(() => {
    if(slider[index].scrollWidth <= slider[index].clientWidth){
      prevButton[index].style.display=`none`
    }else{
      prevButton[index].style.display=`inline-block`
    }
  }, 1000);
  eachPrevButton.addEventListener(`click`,(e)=>{
    slider[index].scrollLeft += -firstCardWidth[index].offsetWidth
  })
})
