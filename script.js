// here we will do both css coding also and the javscript coding also


// the use of gsap is that using it we can do any css coing on any html elmnt easily
// just give comma comma and write all the property which you want to aply
gsap.to("#nav",{
    // here we use scroll trigger function to make animation on scrolling
    // of the site page this property will apply on that particular elment 
    // at the duration time

    backgroundColor:"black",
    height:"110px",
   
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -5%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    // here we use scroll trigger function to make animation on scrolling
    // of the site page this property will apply on that particular elment 
    // at the duration time

    backgroundColor:"black",
  
    // duration:0.8,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -30%",
        // start denote start or our animation and end denote end of it fron top
        end:"top -80%",
        scrub:2
    }
})


// working on the cusror function so that our cursor effect saww

const cursor=document.getElementById("cursor");
document.addEventListener("mousemove",function(dataOfcursor){
  
  cursor.style.left=dataOfcursor.x+"px";
  cursor.style.top=dataOfcursor.y+"px";

})


const navH=document.querySelectorAll("#nav h4");
navH.forEach(function(elemnt,i){
    elemnt.addEventListener("mouseenter",()=>{
         cursor.style.scale= 1;
         navH[i].style.color="#95c11e";
         cursor.style.backgroundColor="transparent";
         cursor.style.border="0.1px solid whitesmoke"
    })

    elemnt.addEventListener("mouseleave",()=>{
      cursor.style.scale= 1;
      navH[i].style.color="#fff";
      cursor.style.backgroundColor="#95c11e";
      cursor.style.border="0px solid #95c11e"
 })

})

// working on the baground cursor

const cursorbg=document.getElementById("cursor-bg");
document.addEventListener("mousemove",function(dataOfcursor){
   
  cursorbg.style.left=dataOfcursor.x-250+"px";
  cursorbg.style.top=dataOfcursor.y-250+"px";

})


// gsap on page two and moreeee
gsap.from("#about img,#about-us",{
  y:90,
  opacity:0,
  duration:2,
  stagger:0.6,
   duration:0.8,

   scrollTrigger:{
    trigger:"#about",
     scroller:"body",
    start: "top 70%",
    // start denote start or our animation and end denote end of it fron top
    end:"top 65%",
    scrub:3
}
})


gsap.from(".card",{
  scale:0.8,
  opacity:0,


   duration:1,

   scrollTrigger:{
    trigger:".card",
     scroller:"body",
    start: "top 70%",
    // start denote start or our animation and end denote end of it fron top
    end:"top 65%",
    scrub:1
}
})

// working on the arrow part
gsap.from("#col1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#col1",
     scroller:"body",
    start: "top 50%",
    // start denote start or our animation and end denote end of it fron top
    end:"top 45%",
    scrub:4
}
})

gsap.from("#col2",{
  y:70,
  x:70,

  scrollTrigger:{
    trigger:"#col1",
     scroller:"body",
    start: "top 50%",
    // start denote start or our animation and end denote end of it fron top
    end:"top 45%",
    scrub:4
}
})


gsap.from("#page4 h1" ,{
    y:50,
 

   scrollTrigger:{
    trigger:"#page4 h1",
     scroller:"body",
    start: "top 75%",
    // start denote start or our animation and end denote end of it fron top
    end:"top 70%",
    scrub:2
}
})

