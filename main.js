const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"), 
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

        let getMode = localStorage.getItem("mode");
            if(getMode && getMode === "dark-mode"){
                body.classList.add("dark");
            }


    // js code to toggle dark and light mode 
      modeToggle.addEventListener("click" , () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }
        else{
            localStorage.setItem("mode" , "dark-mode");
        }
      })

       // js code to toggle search box
       searchToggle.addEventListener("click" ,() => {
        searchToggle.classList.toggle("active");    
        
    });


//=============   Banner    =================

const banner = document.querySelector('.banner'),
      darker = document.getElementById('darker'),
      lighter= document.getElementById('lighter');
      
      
      darker.addEventListener('click', () => {
        banner.classList.add("canner");
        banner.classList.remove("danner");
      });

      lighter.addEventListener('click', () => {
        banner.classList.add("danner");
        banner.classList.remove("canner");
      });

      


//=========   About   ===============

const underline = document.querySelector('.hard'),
      unline = document.querySelector('.mard');


let box = document.getElementById("under");

box.classList.add("cba");

underline.addEventListener('mouseover',()=>{

    let box = document.getElementById("under");

box.classList.add("abc");
box.classList.remove("cba");
});

underline.addEventListener('mouseout',()=>{

    let box = document.getElementById("under");
    box.classList.add("cba");
});



const unline2 = document.querySelector('.hard2');


let rox = document.getElementById("under2");

rox.classList.add("cba");

unline2.addEventListener('mouseover',()=>{

    let rox = document.getElementById("under2");

rox.classList.add("abc");
rox.classList.remove("cba");
});

unline2.addEventListener('mouseout',()=>{

    let rox = document.getElementById("under2");
    rox.classList.add("cba");
});



const unline3 = document.querySelector('.hard3');


let zox = document.getElementById("under3");

zox.classList.add("cba");

unline3.addEventListener('mouseover',()=>{

    let zox = document.getElementById("under3");

zox.classList.add("abc");
zox.classList.remove("cba");
});

unline3.addEventListener('mouseout',()=>{

    let zox = document.getElementById("under3");
    zox.classList.add("cba");
});






//==========  Buy home   =====================


const pictures = document.querySelector('#pico'),
      pictures2 = document.querySelector('#pico2');
      

      let fox = document.getElementById("under1");

      fox.classList.add("cba");
      
      unline.addEventListener('mouseover',()=>{
      
          let fox = document.getElementById("under1");
      
      fox.classList.add("def");
      fox.classList.remove("cba");
      });
      
      unline.addEventListener('mouseout',()=>{
      
          let fox = document.getElementById("under1");
          fox.classList.add("cba");
      });


pictures2.addEventListener('click',()=>{

    let fell = document.getElementById("pico2");

    fell.classList.add("charg");
    
});

pictures2.addEventListener('mouseout',()=>{

    let fell = document.getElementById("pico2");

    fell.classList.remove("charg");
    
});

pictures.addEventListener('click',()=>{

    let fell = document.getElementById("pico");

    fell.classList.add("charg");
    
});

pictures.addEventListener('mouseout',()=>{

    let fell = document.getElementById("pico");

    fell.classList.remove("charg");
    
});

