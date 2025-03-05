

function smooth(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector(''),
        smooth: true
    });
    
}

function tl_1(){
    let tl_1 = gsap.timeline()

        tl_1.from(".navbar h3",{
            opacity:0,
            x:-30,
            delay:0,  
            duration:0.7,
        })
        

        tl_1.from(".navbar ul li",{
            opacity:0,
            y:30,
            delay:-0.7,
            duration:0.5,
            stagger:0.2,
        })

        tl_1.from(".Portfolio-Container-Left h3",{
            opacity:0,
            y:-30,
            delay:-0.7,
            duration:0.8,
        },1)
        
        tl_1.from(".Portfolio-Container-Left h1",{
            opacity:0,
            x:-70,
            duration:1,
        })

        tl_1.from(".Portfolio-Container-Left h4",{
            opacity:0,
            y:40,    
            duration:0.5,
        },1)

        tl_1.from(".Portfolio-Container-Left p",{
            opacity:0,
            y:30,
            delay:-0.3,    
            duration:0.6,
        },2)

        tl_1.from(".Icon-Container",{
            opacity:0,
            y:50, 
            delay:0.3,
            duration:0.4,
        },2)

        
        
}

function tl_2(){

let navbar = document.querySelector("nav");
let scrollTop = document.querySelector("scrollTop");
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    
    let currentScroll = window.pageYOffset || scrollTop
     
      if (currentScroll < lastScrollTop) {
          navbar.style.top = "0";
      } else {
          navbar.style.top = "-80px";
      }
      lastScrollTop = currentScroll;
});
}

function tl_3(){
    let tl_3 = gsap.timeline({
        scrollTrigger:{
            trigger:".About-Me-Delail-container p",
            scroller:"body",
            start:"top 50%",
        }
    })

    tl_3.from(".About-Me-Delail-container p",{
        opacity:0,
        x:20,
        delay:0,
        duration:1,
    })

}
 
function tl_4(){
    let tl_4 = gsap.timeline({
        scrollTrigger:{
            trigger:".Eduaction-leftPart",
            scroller:"body",
            start:"top 65%",
        }
    })

    tl_4.from(".Eduaction-leftPart",{
        opacity:0,
        x:-35,
        delay:0,
        duration:0.8,
    })
}

function tl_5(){
    let tl_5 = gsap.timeline({
        scrollTrigger:{
            trigger:".Services-Parts-Container",
            scroller:"body",
            start:"top 65%",
        }
    })

    tl_5.from(".Services-Parts-Container",{
        opacity:0,
        x:-50,
        delay:0,
        duration:1,
    })

}

function tl_6(){
    let tl_6 = gsap.timeline({
        scrollTrigger:{
            trigger:".Responsive-Project-container",
            scroller:"body",
            start:"top 30%",
        }
    })
        tl_6.from(".Responsive-Project",{
            opacity:0,
            delay:0,
            duration:1,
        })

        tl_6.from(".Without-Responsive-Project",{
            opacity:0,
            delay:0,
            duration:1,
        })
        
}

function tl_7(){ 
    let tl_7 = gsap.timeline({
        scrollTrigger:{
            trigger:"#Contact",
            scroller:"body",
            start:"top 35%",
        }
    })
        
        tl_7.from(".Contact-links",{
            opacity:0,
            x:-50,
            delay:0,
            duration:0.8,
            stagger:0.25
            
        })
            
        tl_7.from(".Box",{
            opacity:0,
            x:80,
            delay:0,
            duration:0.8,
        })
        
}

function tl_8(){
    let tl_8 = gsap.timeline({
        scrollTrigger:{
            trigger:"nav",
            scroller:"body",
            start:"top -100%",
            scrub:1,
        }
    })

    tl_8.to("nav",{
        display:"block",
        y:-100,
        delay:0,
        duration: 0.2,
    })
    
}

function sideBar(){
    let openMenubar = document.querySelector(".ri-menu-3-line")
    let crossMenubar = document.querySelector(".ri-close-large-line")
      
    let tl = gsap.timeline()
    tl.to(".navbar-center",{
          top:0,
          duration:0.4,
    })
    tl.from(".navbar-center ul li",{
        opacity:0,
        x:20,
        delay:-0.2,
        stagger:0.1
    })
    
    tl.pause()
    
    openMenubar.addEventListener("click",function(){
      tl.play()
    })
    crossMenubar.addEventListener("click",function(){
      tl.reverse()
    })
}


tl_1()
tl_2()
tl_3()
tl_4()
tl_5()
tl_6()
tl_7()

sideBar()