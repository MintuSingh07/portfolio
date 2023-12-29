var nav = document.getElementById("nav");
const cursor = document.getElementById("cursor");
const socialmedia = document.getElementById("socialmedia");
const logo = document.getElementById("logo");
const nameSection = document.getElementById("name-section");


window.addEventListener('load', function () {
    document.body.style.overflow = 'auto';
});

gsap.to(".bar", {
    y: -900,
    stagger: 0.1,
    duration: 1,
    delay: 2.7,
})

gsap.to(".text1", {
    y: -100,
    duration: .25,
    delay: .9,
})
gsap.to(".text2", {
    y: -115,
    duration: .25,
    delay: 1,
})
gsap.to(".text2", {
    y: 115,
    duration: .25,
    delay: 2,
})
gsap.to(".text3", {
    y: 115,
    duration: .25,
    delay: 2,
})
gsap.to(".text3", {
    y: -115,
    duration: .35,
    delay: 2.7,
    opacity: 0
})
gsap.to("#text-box", {
    opacity: 0,
    delay: 2.7
})
gsap.from(socialmedia, {
    x: -20,
    opacity: 0,
    duration: .5,
    delay: 7,
    ease: Expo,
})

function toggleNav() {

        if (nav.classList.contains("closed")) {
            gsap.to(nav, {
                height: "auto",
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: function () {
                    nav.classList.add("open");
                    nav.classList.remove("closed");
                    nav.style.height = "auto"; // Ensures height remains auto after animation
                }
            });
        } else {
            gsap.to(nav, {
                height: "30vh",
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: function () {
                    nav.classList.add("closed");
                    nav.classList.remove("open");
                }
            });
        }
    }

//! Mouse Follower

window.addEventListener("mousemove", function (details) {
        gsap.to(cursor, {
            x: details.clientX - 7,
            y: details.clientY - 7,
            duration: .2,
            ease: Expo,
        })
    });

//! Hover

socialmedia.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale: 4
    })
})
socialmedia.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 1
    })
})

logo.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale: 4
    })
})
logo.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 1
    })
})

nameSection.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale: 4
    })
})
nameSection.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 1
    })
})



//! PHOTO FRAMES

gsap.to("#frame1", {
    width: "50rem",
    duration: .5,
    delay: 4.4,
    ease: "power2.inOut",
});
gsap.to("#frame2", {
    width: "13rem",
    duration: .5,
    delay: 4.9,
    ease: "power1.inOut",
})
gsap.to("#frame3", {
    width: "15rem",
    duration: .5,
    delay: 4.7,
    ease: Expo,
});


//! NAME SECTION
gsap.from(".name", {
    y: 100,
    stagger: .2,
    duration: .5,
    delay: 5,
    ease: "power2.inOut",
})
gsap.from(".intro", {
    y: 100,
    duration: 1,
    delay: 5.3,
    ease: "power2.inOut",
})
gsap.from(".skills", {
    y: 100,
    duration: 1,
    delay: 5.6,
    ease: Expo,
})
function animateElements() {
    gsap.to("#fullstack", {
        y: -20,
        duration: 1,
        delay: 2,
    });

    gsap.to("#ui", {
        y: -24,
        duration: 1,
        delay: 2,
    });

    gsap.to("#ui", {
        y: -45,
        duration: 1,
        delay: 5,
    });

    gsap.to("#freelance", {
        y: -48,
        duration: 1,
        delay: 5,
    });

    gsap.to("#freelance", {
        y: -69,
        duration: 1,
        delay: 7,
    });
    gsap.to("#fullstack", {
        y: -70,
        duration: 1,
        delay: 7,
        onComplete: function () {
            // Reset all elements to their initial state and start animation again
            gsap.set(["#fullstack", "#ui", "#freelance"], { y: 0 });
            animateElements(); // Restart the animation
        },
    });
}
animateElements();


// SECTION 2
gsap.from(".img-dev", {
    y: -100,
    stagger: .1,
    duration: .3,
    opacity: 0,
    ease: Expo,
    scrollTrigger: {
        trigger: ".img-dev",
        scroller: "body",
        start: "top 50%",
    }
})
gsap.from(".img-design", {
    y: -100,
    stagger: .1,
    duration: .3,
    opacity: 0,
    ease: Expo,
    scrollTrigger: {
        trigger: ".img-design",
        scroller: "body",
        start: "top 60%",
    }
})
gsap.from(".card", {
    y: -100,
    stagger: .2,
    duration: .6,
    opacity: 0,
    ease: Expo,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 60%",
    }
})