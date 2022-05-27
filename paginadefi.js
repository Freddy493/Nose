(function(){
    const listElements = document.querySelectorAll(".menu__item--show");
    const list = document.querySelector(".menu__links");
    const menu = document.querySelector(".menu__hamburguer");

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener("click", ()=>{

                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle("menu__item--active");

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }
                subMenu.style.height = `${height}px`;
            })

        })
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute("style")){
                element.children[1].removeAttribute("style");
                element.classList.remove("menu__item--active");
            }
        })
    }
    window.addEventListener("resize", ()=>{
    if(window.innerWidth > 800){
        deleteStyleHeight();
        if (list.classList.contains("menu__links--show"))
            list.classList.remove("menu__links--show")

    }else{
        addClick();
    }
    if(window.innerWidth <= 800){
        addClick();
    }

})

    menu.addEventListener("click", ()=> list.classList.toggle("menu__links--show"))
})();

// fin del menu

TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
  })

  TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
  })

const carrusel = document.querySelector("#carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
    intervalo = setInterval(function() {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrollLeft){
            step = step * -1;
        } else if (carrusel.scrollLeft === 0){
            step = step * -1;
        }

    }, 10);
}

const stop = () =>{
    clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", ()=>{
    stop();
});

carrusel.addEventListener("mouseout", ()=>{
    start();
});
start();


let btnItems = document.querySelectorAll(".item .btn-item");

for (let i = 0; i < btnItems.length; i++) {
    
    btnItems[i].addEventListener("click", function(e){
        console.log(e.target)

        let btn = e.target;

        if (btn.className == "btn-item active") {
            removerClase();
        } else{
            removerClase();
            btn.classList.add("active")
        }
    })
    
}

function removerClase(){
    for (let i = 0; i < btnItems.length; i++) {
        btnItems[i].classList.remove("active")
        
    }
}
const animacion100 = document.getElementById("animacion100");
const animacion = document.getElementById("animacion");
const animacion2 = document.getElementById("animacion2");
const animacion3 = document.getElementById("animacion3");
const animacion4 = document.getElementById("animacion4");
const animacion5 = document.getElementById("animacion5");
const animacion6 = document.getElementById("animacion6");
const animacion7 = document.getElementById("animacion7");
const animacion8 = document.getElementById("animacion8");
const animacion9 = document.getElementById("animacion9");
const animacion10 = document.getElementById("animacion10");
const animacion11 = document.getElementById("animacion11");
const animacion12 = document.getElementById("animacion12");
const animacion13 = document.getElementById("animacion13");
const animacion14 = document.getElementById("animacion14");
const animacion15 = document.getElementById("animacion15");
const animacion16 = document.getElementById("animacion16");
const animacion17 = document.getElementById("animacion17");
const animacion18 = document.getElementById("animacion18");
const animacion19 = document.getElementById("animacion19");
const animacion20 = document.getElementById("animacion20");
const animacion21 = document.getElementById("animacion21");
const animacion22 = document.getElementById("animacion22");
const animacion23 = document.getElementById("animacion23");
const animacion24 = document.getElementById("animacion24");
const animacion25 = document.getElementById("animacion25");
const animacion26 = document.getElementById("animacion26");
const animacion27 = document.getElementById("animacion27");
const animacion28 = document.getElementById("animacion28");
const animacion29 = document.getElementById("animacion29");
const animacion30 = document.getElementById("animacion30");
const animacion31 = document.getElementById("animacion31");
const animacion32 = document.getElementById("animacion32");
const animacion33 = document.getElementById("animacion33");
const animacion34 = document.getElementById("animacion34");
const animacion35 = document.getElementById("animacion35");
const animacion36 = document.getElementById("animacion36");
const animacion37 = document.getElementById("animacion37");
const animacion38 = document.getElementById("animacion38");
const animacion39 = document.getElementById("animacion39");
const animacion40 = document.getElementById("animacion40");
const animacion41 = document.getElementById("animacion41");
const animacion42 = document.getElementById("animacion42");
const animacion43 = document.getElementById("animacion43");
const animacion44 = document.getElementById("animacion44");
const animacion45 = document.getElementById("animacion45");
const animacion46 = document.getElementById("animacion46");
const animacion47 = document.getElementById("animacion47");
const animacion48 = document.getElementById("animacion48");
const animacion49 = document.getElementById("animacion49");
const animacion50 = document.getElementById("animacion50");
const animacion51 = document.getElementById("animacion51");
const animacion52 = document.getElementById("animacion52");
const animacion53 = document.getElementById("animacion53");
const animacion54 = document.getElementById("animacion54");
const animacion55 = document.getElementById("animacion55");
const animacion56 = document.getElementById("animacion56");
const animacion57 = document.getElementById("animacion57");
const animacion58 = document.getElementById("animacion58");
const animacion59 = document.getElementById("animacion59");
const animacion60 = document.getElementById("animacion60");
const animacion61 = document.getElementById("animacion61");
const animacion62 = document.getElementById("animacion62");
const animacion63 = document.getElementById("animacion63");
const animacion64 = document.getElementById("animacion64");
const animacion65 = document.getElementById("animacion65");

const cargarimagen = (entradas, observador) =>{
    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible");
        }
        else{
            entrada.target.classList.remove("visible");
        }
    });
}
const observador = new IntersectionObserver(cargarimagen,{
    root: null,
    rootMargin : "0px 0px 0px 0px",
    threshold : .3
});
observador.observe(animacion);
observador.observe(animacion2);
observador.observe(animacion3);
observador.observe(animacion4);
observador.observe(animacion5);
observador.observe(animacion6);
observador.observe(animacion7);
observador.observe(animacion8);
observador.observe(animacion9);
observador.observe(animacion10);
observador.observe(animacion11);
observador.observe(animacion12);
observador.observe(animacion13);
observador.observe(animacion14);
observador.observe(animacion15);
observador.observe(animacion16);
observador.observe(animacion17);
observador.observe(animacion18);
observador.observe(animacion19);
observador.observe(animacion20);
observador.observe(animacion21);
observador.observe(animacion22);
observador.observe(animacion23);
observador.observe(animacion24);
observador.observe(animacion25);
observador.observe(animacion26);
observador.observe(animacion27);
observador.observe(animacion28);
observador.observe(animacion29);
observador.observe(animacion30);
observador.observe(animacion31);
observador.observe(animacion32);
observador.observe(animacion33);
observador.observe(animacion34);
observador.observe(animacion35);
observador.observe(animacion36);
observador.observe(animacion37);
observador.observe(animacion100);
observador.observe(animacion38);
observador.observe(animacion39);
observador.observe(animacion40);
observador.observe(animacion41);
observador.observe(animacion42);
observador.observe(animacion43);
observador.observe(animacion44);
observador.observe(animacion45);
observador.observe(animacion46);
observador.observe(animacion47);
observador.observe(animacion48);
observador.observe(animacion49);
observador.observe(animacion50);
observador.observe(animacion51);
observador.observe(animacion52);
observador.observe(animacion53);
observador.observe(animacion54);
observador.observe(animacion55);
observador.observe(animacion56);
observador.observe(animacion57);
observador.observe(animacion58);
observador.observe(animacion59);
observador.observe(animacion60);
observador.observe(animacion61);
observador.observe(animacion62);
observador.observe(animacion63);
observador.observe(animacion64);
observador.observe(animacion65);

TweenMax.from(".menu__links", 2, {
    delay: 1.5,
    width: "0",
    opacity: "0",
    ease: Expo.easeInOut
  });