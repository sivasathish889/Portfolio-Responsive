// Dark mode / Light mode
let btn=document.getElementById("dark-btn");
    let bdy=document.getElementById("bdy");
    btn.addEventListener("click",function(){
      if(bdy.getAttribute("data-bs-theme")=="dark"){
        bdy.setAttribute("data-bs-theme","light")
        btn.innerHTML="&#9788"
      }
      else{
        bdy.setAttribute("data-bs-theme","dark")
        btn.innerHTML="&#9789"
      }
      
      })

let date = new Date
let year = document.getElementById("copyrights-year")
year.innerHTML = date.getFullYear()

// navbar gsap
var navTL = gsap.timeline()
navTL.from(".brand",{
  y:-20,
  delay : 0.5,
  duration : 1,
  opacity: 0,
})

navTL.from(".nav-item a",{
  y:20,
  duration : 0.5,
  opacity : 0,
  stagger : 0.5
})

gsap.from("#dark-btn",{
  y:-20,
  delay : 0.5,
  duration : 1,
  opacity: 0,
})


// main page gsap
let mainTL = gsap.timeline()
mainTL.from(".first-section .left-content h3",{
  x:-40,
  opacity : 0,
  delay : 0.5,
  duration :0.8
})
mainTL.from(".first-section .left-content h1",{
  x:-40,
  opacity : 0,
  duration :0.8
})
mainTL.from(".first-section .left-content p",{
  x:-40,
  opacity : 0,
  duration :0.8
})
mainTL.from(".first-section .left-content button",{
  scale : 1,
  opacity : 0,
  duration :1
})
mainTL.from(".first-section #my-img1",{
  opacity : 0,
  duration :1
})