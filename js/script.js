/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================
   NAVBAR ON SCROLL
========================= */

const navbar =
    document.querySelector(".navbar");


if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .service-card, .join, .about-card"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-button");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        filterButtons.forEach((item) => {

            item.classList.remove("active");

        });


        button.classList.add("active");


        projectCards.forEach((card) => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "";

                setTimeout(() => {

                    card.classList.add("visible");

                }, 50);

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   PROJECT CARD HOVER
========================= */

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("hovered");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("hovered");

    });

});


/* =========================
   ANIMATION COUNTER
========================= */

const counters =
    document.querySelectorAll(".stat-number");


const counterObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter =
                    entry.target;

                const target =
                    parseInt(
                        counter.dataset.target
                    );


                if (isNaN(target)) {
                    return;
                }


                let current = 0;

                const duration = 1200;

                const startTime =
                    performance.now();


                function updateCounter(currentTime) {

                    const progress =
                        Math.min(
                            (currentTime - startTime) /
                            duration,
                            1
                        );


                    current =
                        Math.floor(
                            progress * target
                        );


                    counter.textContent =
                        current;


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );


                counterObserver.unobserve(
                    counter
                );

            });

        },
        {
            threshold: 0.5
        }
    );


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* =========================
   CURRENT YEAR
========================= */

const yearText =
    document.querySelector(".footer-year");


if (yearText) {

    yearText.textContent =
        new Date().getFullYear();

}


/* =========================
   SMOOTH PROJECT LINKS
========================= */

const projectLinks =
    document.querySelectorAll(
        ".project-card a"
    );


projectLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const href =
            link.getAttribute("href");


        if (
            !href ||
            href === "#"
        ) {

            event.preventDefault();

        }

    });

});


/* =========================
   HERO PARALLAX
========================= */

const hero =
    document.querySelector(".hero");

const heroVisual =
    document.querySelector(".hero-visual");


if (hero && heroVisual) {

    hero.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                hero.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;


            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;


            heroVisual.style.transform =
                `translate(${x * 10}px, ${y * 10}px)`;

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            heroVisual.style.transform =
                "translate(0, 0)";

        }
    );

}

/* =========================
   CUSTOM BACKGROUND
========================= */

const particleContainer =
    document.querySelector(
        "#background-particles"
    );

const glowOne =
    document.querySelector(
        ".glow-one"
    );

const glowTwo =
    document.querySelector(
        ".glow-two"
    );


/* =========================
   CREATE PARTICLES
========================= */

if (particleContainer) {

    const particleCount = 35;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.classList.add(
            "background-particle"
        );


        const randomLeft =
            Math.random() * 100;

        const randomTop =
            Math.random() * 100;

        const randomSize =
            2 + Math.random() * 4;

        const randomDuration =
            5 + Math.random() * 8;

        const randomDelay =
            Math.random() * 8;


        particle.style.left =
            `${randomLeft}%`;

        particle.style.top =
            `${randomTop}%`;

        particle.style.width =
            `${randomSize}px`;

        particle.style.height =
            `${randomSize}px`;

        particle.style.animationDuration =
            `${randomDuration}s`;

        particle.style.animationDelay =
            `${randomDelay}s`;


        particleContainer.appendChild(
            particle
        );

    }

}


/* =========================
   MOUSE BACKGROUND MOVEMENT
========================= */

document.addEventListener(
    "mousemove",
    (event) => {

        const mouseX =
            event.clientX /
            window.innerWidth -
            0.5;

        const mouseY =
            event.clientY /
            window.innerHeight -
            0.5;


        if (glowOne) {

            glowOne.style.transform =
                `translate(
                    ${mouseX * 45}px,
                    ${mouseY * 45}px
                )`;

        }


        if (glowTwo) {

            glowTwo.style.transform =
                `translate(
                    ${mouseX * -35}px,
                    ${mouseY * -35}px
                )`;

        }

    }
);

/* =========================
   LOADING SCREEN
========================= */

const loadingScreen =
    document.querySelector("#loading-screen");

const loadingVideo =
    document.querySelector("#loading-video");


if (loadingScreen) {

    // Make sure the loading screen starts visible
    loadingScreen.classList.remove("hidden");


    // If there is a loading video
    if (loadingVideo) {

        loadingVideo.addEventListener(
            "ended",
            () => {

                loadingScreen.classList.add("hidden");

            }
        );


        // Fallback:
        // if the video cannot load/play,
        // don't leave the website stuck forever.
        loadingVideo.addEventListener(
            "error",
            () => {

                loadingScreen.classList.add("hidden");

            }
        );

    }


    // Extra fallback in case the video
    // doesn't trigger "ended".
    window.addEventListener(
        "load",
        () => {

            setTimeout(() => {

                loadingScreen.classList.add("hidden");

            }, 500);

        }
    );

}

/* =========================
   PROJECT SHOWCASE
========================= */

const projectData = [

    {
        number: "01",
        title: "Project Name",
        category: "WEB DESIGN",
        description:
            "A modern website designed with a clean visual system, responsive layout, and a strong focus on presentation.",
        location: "Bandung, Indonesia",
        year: "2026",
        image: "assets/images/project-01.jpg",
        link: "#"
    },

    {
        number: "02",
        title: "Project Name",
        category: "WEB DEVELOPMENT",
        description:
            "A responsive web project built to provide a smooth experience across desktop and mobile devices.",
        location: "Bandung, Indonesia",
        year: "2026",
        image: "assets/images/project-02.jpg",
        link: "#"
    },

    {
        number: "03",
        title: "Project Name",
        category: "LANDING PAGE",
        description:
            "A focused landing page created to present a brand, service, or idea with a clear and engaging layout.",
        location: "Bandung, Indonesia",
        year: "2026",
        image: "assets/images/project-03.jpg",
        link: "#"
    },

    {
        number: "04",
        title: "Project Name",
        category: "CREATIVE WEBSITE",
        description:
            "A creative web experience combining visual design, interaction, and responsive development.",
        location: "Bandung, Indonesia",
        year: "2026",
        image: "assets/images/project-04.jpg",
        link: "#"
    },

    {
        number: "05",
        title: "Project Name",
        category: "WEB EXPERIENCE",
        description:
            "An experimental web project focused on creating an immersive and memorable digital experience.",
        location: "Bandung, Indonesia",
        year: "2026",
        image: "assets/images/project-05.jpg",
        link: "#"
    }

];


/* =========================
   PROJECT ELEMENTS
========================= */

const projectButtons =
    document.querySelectorAll(
        ".project-selector-item"
    );

const projectImage =
    document.querySelector(
        "#project-display-image"
    );

const projectCategory =
    document.querySelector(
        "#project-display-category"
    );

const projectTitle =
    document.querySelector(
        "#project-display-title"
    );

const projectDescription =
    document.querySelector(
        "#project-display-description"
    );

const projectLocation =
    document.querySelector(
        "#project-display-location"
    );

const projectYear =
    document.querySelector(
        "#project-display-year"
    );

const projectLink =
    document.querySelector(
        "#project-display-link"
    );


/* =========================
   SHOW PROJECT
========================= */

function showProject(index) {

    const project =
        projectData[index];

    if (!project) {
        return;
    }


    if (projectImage) {

        projectImage.src =
            project.image;

        projectImage.alt =
            project.title;

    }


    if (projectCategory) {

        projectCategory.textContent =
            project.category;

    }


    if (projectTitle) {

        projectTitle.textContent =
            project.title;

    }


    if (projectDescription) {

        projectDescription.textContent =
            project.description;

    }


    if (projectLocation) {

        projectLocation.textContent =
            project.location;

    }


    if (projectYear) {

        projectYear.textContent =
            project.year;

    }


    if (projectLink) {

        projectLink.href =
            project.link;

    }


    projectButtons.forEach(
        (button, buttonIndex) => {

            button.classList.toggle(
                "active",
                buttonIndex === index
            );

        }
    );

}


/* =========================
   PROJECT BUTTONS
========================= */

projectButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                showProject(index);

            }
        );

    }
);


/* =========================
   INITIAL PROJECT
========================= */

if (projectButtons.length > 0) {

    showProject(0);

}
