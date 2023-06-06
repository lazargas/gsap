
var tl0 = gsap.timeline({
    
    duration:1
});
tl0.from(".content-1",{
    opacity:0
}).from(".content-2",{
    opacity:0
},'a').from(".content-3",{
    opacity:0,
},'a');


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers: true,
    start: "50% 50%",
    end: "100% 50%",
    scrub: 0.5,
    pin: true,
    duration: "2s",
  },
});

tl.to(
  ".content-2",
  {
    marginTop: "0vh",
    ease: Power2.out,
    
  },
  "b"
).to(
  ".content-3",
  {
    marginTop: "-50vh",
    ease: Power2.out,

  },
  "b"
);

$(document).ready(function(){
    $(".tlt").textillate({in:{effect:'fadeInUp'}});
})