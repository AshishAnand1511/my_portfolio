// ---------This is for locomotive smooth scrolling-----------
function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

/*---------------------This for image1----------------------------- */
// gsap.to("#image1", {
//   x: 800,
//   opacity:0,
//   scrollTrigger: {
//     scroller: "#main",
//     trigger: "#image1",
//     scrub: true,
//     markers: true,
//     start: "top -90%",
//     end:"top -100%"
//   },
// });
// -----------------------------------------------
var home = document.querySelector("#home")
var about = document.querySelector("#about")
var service = document.querySelector("#service")
var portfolio = document.querySelector("#portfolio")
var contact = document.querySelector("#contact")


// portfolio.addEventListener("click", () => {
// })




// ------------------------------------------------
/*---------------This is side nav bar---------------------*/
var main = document.querySelector("#main");
var icon1 = document.querySelector("#page1>i");
var icon2 = document.querySelector("#nav>i");
var nav = document.querySelector("#nav");
var image1 = document.querySelector("#image1");

icon1.addEventListener("click", () => {
  main.style.scale = ".9";
  main.style.filter = "blur(3px)";
  main.style.left = "20vw";
  nav.style.left = "0%";
  main.style.transform = "skewX(10deg)";
  main.style.transform = "rotateY(-20deg)";
  image1.style.transform = "skewX(10deg)";
  image1.style.transform = "rotateY(-20deg)";
  icon1.style.opacity = 0;
  icon2.style.opacity = 1;
  image1.style.right = "-20vw";
  image1.style.scale = ".6";
  image1.style.filter = "blur(3px)";

  // image1.style.display = "none"
});
icon2.addEventListener("click", () => {
  main.style.scale = "1";
  main.style.left = "0vw";
  main.style.filter = "blur(0px)";
  main.style.transform = "translateX(0vw)";
  nav.style.left = "-100%";
  main.style.transform = "skewX(0deg)";
  main.style.transform = "rotateY(0deg)";
  icon2.style.opacity = 0;
  icon1.style.opacity = 1;
  image1.style.right = "-5vw";
  image1.style.scale = "1";
  image1.style.transform = "skewX(0deg)";
  image1.style.transform = "rotateY(0deg)";
  image1.style.filter = "blur(0px)";

});
/*---------------------Animation for first page---------------------------*/
var tl = gsap.timeline();
tl.from("#page1>i", {
  opacity: 0,
  x: -100,
  duration: 0.5,
});
tl.from("#logo", {
  opacity: 0,
  y: -50,
  duration: 0.5,
});
tl.from("#image1", {
  // opacity: 0,
  // display:"none",
  x: 100,
  // delay:2,
  duration: 1,
});
tl.from("#page1 h2", {
  y: 0,
  opacity: 0,
  delay:-.5,
  duration: 0.5,
  onStart() {
    $("#page1 h2").textillate({ in: { effect: "fadeIn" } });
  },
});
tl.from("#page1 h1", {
  y: 0,
  opacity: 0,
  duration: 0.5,
  onStart() {
    $("#page1 h1").textillate({ in: { effect: "fadeInDown" } });
  },
});

/*----------------------------------Page2 Starts here---------------------------------*/
var sk = document.querySelector("#sk");
var ed = document.querySelector("#ed");
var ex = document.querySelector("#ex");

var skill = document.querySelector("#skills");
var education = document.querySelector("#education");
var experience = document.querySelector("#experience");
sk.addEventListener("click", () => {
  education.style.opacity = 0;
  experience.style.opacity = 0;
  skill.style.opacity = 1;
  gsap.from("#skills", {
    // opacity: 0,
    x: 100,
    duration: 1,
  });
});
ed.addEventListener("click", () => {
  education.style.opacity = 1;
  experience.style.opacity = 0;
  skill.style.opacity = 0;
  gsap.from("#education", {
    // opacity: 0,
    x: 100,
    duration: 1,
  });
});
ex.addEventListener("click", () => {
  education.style.opacity = 0;
  experience.style.opacity = 1;
  skill.style.opacity = 0;
  gsap.from("#experience", {
    // opacity: 0,
    x: 100,
    duration: 1,
  });
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    // markers: true,
    start: "top 80%",
    end: "top 70%",
  },
});
tl2.from("#image2", {
  x: -100,
  duration: 1,
  opacity: 0,
});
tl2.from("#abt h1", {
  y: 20,
  duration: 0.5,
  opacity: 0,
});
tl2.from("#abt p", {
  y: 20,
  duration: 0.5,
  opacity: 0,
});
tl2.from("#p2rl", {
  y: 20,
  duration: 0.5,
  opacity: 0,
});
tl2.from("#p2box", {
  y: 20,
  duration: 0.5,
  opacity: 0,
});

/*----------------page3 starts here--------------*/
var tl3 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page3",
    // markers: true,
    start: "top 70%",
    end: "top 60%",
  },
});
tl3.from("#page3>h1", {
  delay: 0.5,
  y: 20,
  duration: 0.5,
  opacity: 0,
});
tl3.from("#p3card", {
  y: 20,
  duration: 1,
  opacity: 0,
});

/*-----------------Page_4 starts here-----------------------*/
var tl4 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4",
    // markers: true,
    start: "top 70%",
    end: "top 60%",
  },
}) 
tl4.from("#page4>h1", {
  x: -200,
  opacity:0,
  duration:1.5
})
tl4.from("#p4card", {
  y: 100,
  // delay:.2,
  duration: 1,
  opacity:0,
})
tl4.from(".p4card>button", {
  y: 100,
  delay:1,
  duration:1,
  opacity:0,
})

/*------------------------page5-----------------*/
gsap.from("#p5left,#p5right", {
  opacity: 0,
  delay: 1,
  y:100,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#p5left,#p5right",
    // markers: true,
    start:"top 80%"
  }
})

// function isWindowSmall()
// {
//   if(window.innerWidth < 700) return true;
//   else return false;
// }
// isWindowSmall();



/*Google form linking*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbwf5arZ9cW_hMZt0lL9VPnc_6cxN_ye4yqRfxaFLbKN40kMO41j-JcSN433zVJp7KQcqg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector("#msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Sent successfully"
        setTimeout(() => {
          msg.innerHTML = ""
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })