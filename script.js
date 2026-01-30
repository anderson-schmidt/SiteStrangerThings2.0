//SCROLL SUAVE -> ANIMAÇÕES -> ANIMAÇÕES COM ROLAGEM

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
});

function animarPagina(){
    //Animações Hero

gsap.from(".hero", {
    opacity: 0,
    duration: 2,
})

gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 1,
})


gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1,
})

//Animações Cards

gsap.from(".card", {
    opacity: 0,
    filter: "blur(20px)",
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".secaoCidade",
        start: "0% 70%",
        scrub: true,
        end: "100% 70%",
    }
})

//Animação Cidades

gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    filter: "blur(20px)",
    x: 40,
    stagger: 0.09,
    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        start: "0% 80%",
        scrub: true,
        end: "100% 50%",
    }
})

//Animação Footer


gsap.from("footer", {
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        start: "0% 100%",
        scrub: true,
        end: "100% 100%",
        invalidateOnRefresh: true,
    }
})

//Animação Letras

const grupoSplit = document.querySelectorAll(".textoSplit")

grupoSplit.forEach((elemento) => {
    const split = SplitText.create(elemento, {
        type: "lines, words, chars",
        mask: "lines",
    });

    gsap.from(split.chars, {
        opacity: 0,
        y: 20,
        duration: 0.56,
        stagger: 0.05,
        scrollTrigger: {
            trigger: elemento,
        }
    })
})

}

//Preloader
const preloaderTL = gsap.timeline({
    onComplete(){
        animarPagina();
        gsap.to("#preloader", {
            opacity: 0,
            display: "none",
    })    }
});



preloaderTL.to("#preloader path", {
    duration: 4,
    strokeDashoffset: 0,
})

preloaderTL.to("#preloader path", {
    fill: "rgb(168, 19, 19)",
    duration: .5,
    strokeDashoffset: 0,
})
