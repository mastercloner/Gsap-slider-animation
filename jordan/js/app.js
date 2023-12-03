let second = document.getElementsByClassName("second-slide");
let title = document.getElementsByClassName("banner-title");

// var tl = new TimelineLite, 
//                 mySplitText = new SplitText(".sliding-text", {type: "words, lines, chars"})
//     lines = mySplitText.lines
//     tl.staggerFrom(lines,1, {y:100,opacity:0, ease:Bounce.easeOut},0.4);

gsap.fromTo(".shop", {scale: 0} , {scale: 1.3,ease: "bounce.out", delay:.5});

window.addEventListener('click', myFunction);

function myFunction(){
    var animation = gsap.timeline()
        .to(".banner-title", {y:-500, opacity:0})
        .to(".image-container", {x:-500})
}