gsap.to(".slide", {
    transform:'translate(-300%)',
    duration: 2,
    scrollTrigger: {
        trigger: ".slide",
        start: "top 0",
        end: "+=3000",
        scrub: 0.3
    }
});

let tl = gsap.timeline({
    repeat: -1
});

tl.to(".banner-img", {
    transform: "translateX(-100%)",
    duration: 4,
    ease: "power4"
}, "+=1")
tl.to(".banner-img", {
    transform: "translateX(-200%)",
    duration: 4,
    ease: "power4"
}, "+=1")
tl.to(".banner-img", {
    transform: "translateX(-300%)",
    duration: 4,
    ease: "power4"
}, "+=1")
tl.to(".banner-img", {
    transform: "translateX(-400%)",
    duration: 4,
    ease: "power4"
}, "+=1")
tl.to(".banner-img", {
    transform: "translateX(-500%)",
    duration: 4,
    ease: "power4"
}, "-=1")

let rbtn = document.querySelector(".slide-r-btn")
let move = 0;
rbtn.addEventListener("click", () => {
    move+=100
    if (move != 500) {
        gsap.to(".banner-img", {
            transform: `translate(-${move}%)`
        })
    } else {
        gsap.to(".banner-img", {
            duration:0,
            transform: `translate(0%)`
        })
        move=0
    }
})
// let lbtn = document.querySelector(".slide-l-btn")
// lbtn.addEventListener("click", () => {
//     move+=100
//     if (move != 500) {
//         gsap.to(".banner-img", {
//             transform: `translate(${move}%)`
//         })
//     } else {
//         gsap.to(".banner-img", {
//             duration:0,
//             transform: `translate(100%)`
//         })
//         move=100
//     }
// })