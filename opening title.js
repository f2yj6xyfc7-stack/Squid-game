console.clear();

gsap.registerPlugin(ScrollTrigger);
const red = "#fe3477";

/* All the JS setup */
gsap.set("#Top_circle #tc_right", {
  strokeDashoffset: -501,
  opacity: 0
});
gsap.set("#left_circle2", {
  strokeDashoffset: 467,
  opacity: 0
});
gsap.set("#left_circle1", {
  strokeDashoffset: -328,
});
gsap.set("#right_line1", {
  attr: { y2: 281.63 }
});
gsap.set("#right_line2", {
  attr: { y1: 650.29 }
});
gsap.set("#right_line3", {
  attr: { y1: 578.54 }
});
gsap.set("#right_line4", {
  attr: { x2: 1061.44 }
});
gsap.set("#seven", { strokeDashoffset: 245 });
gsap.set("#bottom_circle", { r: 0 });
gsap.set("#top_circle_2", { r: 0 });
gsap.set("#top_line1", {
  attr: { y1: 448.39 }
});
gsap.set("#top_line2", {
  attr: { x1: 1052.14 }
});
gsap.set("#left_line1", {
  attr: { y2: 281.63 }
});
gsap.set("#left_line_2", {
  attr: { x2: 694.86 }
});
gsap.set("#left_line_3", {
  attr: { y2: 495.4 }
});
gsap.set("#left_line_4", {
  attr: { x1: 674.73 }
});
gsap.set("svg", {
  opacity: 1
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 0.2
  }
});

/* Center triangle */
tl.to("#Center_triangle #ct_l", {
  x: 280,
  duration: 3.4,
  ease: "power2.inOut"
}, 0);
tl.to("#Center_triangle #ct_r", {
  x: 140,
  y: 237,
  duration: 3.4,
  ease: "power2.inOut"
}, 0);
tl.to("#Center_triangle #ct_top, #ct_mask_top", {
  x: -340,
  duration: 3.5,
  ease: "none"
}, 3.4);
tl.to("#ct_b, #ct_mask_bottom", {
  x: -60,
  duration: 0.67,
  ease: "none"
}, (3.4 + (3.5 - 0.67)));

/* Top circle */
tl.to("#Top_circle #tc_top", {
  strokeDashoffset: -753,
  duration: 2.16,
  ease: "power2.inOut"
}, 1.45);
tl.set("#Top_circle #tc_top", { opacity: 0 }, (1.45 + 2.16));
tl.set("#Top_circle #tc_right", { opacity: 1 }, (1.45 + 2.16));
tl.to("#Top_circle #tc_right", {
  strokeDashoffset: 27,
  duration: 3,
  ease: "power2.inOut"
}, (1.45 + 2.16));

/* ================== */
/*  BOTTOM RECT       */
/* ================== */
/* Bottom Rect Top */
tl.to("#Bottom_Rect #br_top", {
  attr: { x1: 1368 },
  duration: 2,
  ease: "power3.inOut"
}, 1);
tl.to("#Bottom_Rect #br_top", {
  attr: { x2: 1368 },
  duration: 2,
  ease: "power1.inOut"
}, 1);
tl.to("#Bottom_Rect #br_top", {
  attr: {
    y1: 471,
    y2: 559,
  },
  duration: 0.8,
  ease: "power1.inOut"
}, (1.45 + 2));

/* Bottom Rect Right */
tl.to("#Bottom_Rect #br_right", {
  attr: {
    y1: 471,
  },
  duration: 1.8,
  ease: "power3.inOut"
}, 1.45);
tl.to("#Bottom_Rect #br_right", {
  attr: {
    y2: 471,
  },
  duration: 1.8,
  ease: "power1.inOut"
}, 1.45);
tl.to("#Bottom_Rect #br_right", {
  attr: {
    x1: 1280,
    x2: 1368,
  },
  duration: 1,
  ease: "power1.inOut"
}, (1.45 + 1.8));

/* Bottom Rect Bottom */
tl.to("#Bottom_Rect #br_bottom", {
  attr: { x1: 1280 },
  duration: 3,
  ease: "power3.inOut"
}, 0);
tl.to("#Bottom_Rect #br_bottom", {
  attr: { x2: 1280 },
  duration: 3,
  ease: "power1.inOut"
}, 0);
tl.to("#Bottom_Rect #br_bottom", {
  attr: { y1: 471 },
  duration: 1,
  ease: "power1.inOut"
}, 3.5);
tl.to("#Bottom_Rect #br_bottom", {
  attr: { y2: 559 },
  duration: 2,
  ease: "power2.inOut"
}, 3.5);

/* Bottom Rect Left */
tl.to("#Bottom_Rect #br_left", {
  attr: { y1: 559, y2: 559 },
  duration: 1,
  ease: "power2.inOut"
}, 2);
tl.to("#Bottom_Rect #br_left", {
  attr: { x1: 1280 },
  duration: 4,
  ease: "power2.inOut"
}, 3.2);
tl.to("#Bottom_Rect #br_left", {
  attr: { x2: 1368 },
  duration: 3,
  ease: "power1.inOut"
}, 3.2);


/* Random lines */
tl.to("#right_line1", {
  attr: { y2: 440 },
  duration: 1,
  ease: "power2.inOut"
}, 4.8);
tl.to("#right_line2", {
  attr: { y1: 462 },
  duration: 1,
  ease: "power1.inOut"
}, 4.4);
tl.to("#right_line3", {
  attr: { y1: 462 },
  duration: 1.5,
  ease: "power1.inOut"
}, 2.8);
tl.to("#right_line4", {
  attr: { x2: 1139.51 },
  duration: 1,
  ease: "power1.inOut"
}, 5.6);
tl.to("#seven", {
  strokeDashoffset: 0,
  duration: 1.6,
  ease: "power1.inOut"
}, 4.8);
tl.to("#bottom_circle", {
  r: 32,
  duration: 2,
  ease: "power1.out"
}, 4);
tl.to("#top_line1", {
  attr: { y1: 281 },
  duration: 2,
  ease: "power1.inOut"
}, 4.7);
tl.to("#top_line2", {
  attr: { x1: 974.94 },
  duration: 1,
  ease: "power1.inOut"
}, 5.5);
tl.to("#top_circle_2", {
  r: 32,
  duration: 2,
  ease: "power1.out"
}, 4.4);
tl.to("#left_line1", {
  attr: { y2: 448.39 },
  duration: 1.4,
  ease: "power2.inOut"
}, 5);
tl.to("#left_line_2", {
  attr: { x2: 821.69 },
  duration: 1.4,
  ease: "power2.inOut"
}, 3.4);
tl.to("#left_line_3", {
  attr: { y2: 414.25 },
  duration: 1,
  ease: "power2.inOut"
}, 5);
tl.to("#left_line_4", {
  attr: { x1: 481.35 },
  duration: 3.5,
  ease: "power2.inOut"
}, 0);

/* LEFT CIRCLE */
tl.to("#left_circle1", {
  strokeDashoffset: 400,
  duration: 2.8,
  ease: "power2.inOut"
}, 1);
tl.set("#left_circle1", { opacity: 0 }, (1 + 2.8));
tl.set("#left_circle2", { opacity: 1 }, (1 + 2.8));
tl.to("#left_circle2", {
  strokeDashoffset: 1343,
  duration: 3.5,
  ease: "power2.inOut"
}, (1 + 3));


/* COLORS */
tl.to("#br_top, #br_bottom, #br_right, #br_left, #left_circle2", {
  stroke: red,
  duration: 3,
  ease: "power2.inOut"
}, 4.5);
tl.to("#ct_b, #ct_r, #ct_l", {
  fill: red,
  duration: 3,
  ease: "power2.inOut"
}, 4.5);

/* Shadows */
tl.set("#Center_triangle", {
  attr:{
    filter: "url(#dropshadow_top)"
  }
}, 3);
tl.to("#dropshadow_shade feFuncA", {
  attr:{
    slope: 0.5
  },
  duration: 0.4
}, 4);
tl.to("#dropshadow_shade feFuncA", {
  attr:{
    slope: 0
  },
  duration: 1
}, 5.5);

/* ANIMATE ON PAGE LOAD */
const scroll = {y: 0};
gsap.to(scroll, {
  y: window.innerHeight * 7,
  duration: 7,
  ease: "none",
  repeat: 1,
  yoyo: true,
  yoyoEase: true,
  onUpdate: () => {
    window.scrollTo(0, scroll.y);
  }
});