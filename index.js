const projectData = [
    {
        img: "./media/learning-journal.jpg",
        alt: "Image of a learning journal site.",
        title: "CSS-Grid Sample",
        appLink: "https://learning-journal-sample.netlify.app/",
        codeLink: "https://github.com/zenidreney/responsive-journal"
    },
    {
        img: "./media/healing-leaf-small.jpg",
        alt: "Image of a webpage displaying plants.",
        title: "Mobile First Landing Page",
        appLink: "https://zenidreney.github.io/portfolio/plantshop/",
        codeLink: "https://github.com/zenidreney/portfolio/tree/main/plantshop"
    },
    {
        img: "./media/herborder.jpg",
        alt: "Image of an app that lets you buy plants.",
        title: "Mobile First Landing Page",
        appLink: "https://pickandorder.netlify.app/",
        codeLink: "https://github.com/zenidreney/orderapp"
    },
    {
        img: "./media/herbpickerapp.jpg",
        alt: "Image of an app that lets you choose plants.",
        title: "An app to catogorize plants",
        appLink: "https://herbpicker.netlify.app/",
        codeLink: "https://github.com/zenidreney/herbpickerapp"
    }
];

const latestCarousel = document.getElementById("latest-carousel");

    const carouselIndicators = document.createElement("div");
    carouselIndicators.className = "carousel-indicators";

        for (let i = 0; i < projectData.length; i++) {
            //const check = document.createElement("p");
            //check.textContent = "Hello";
            const slideBtn = document.createElement("button");
            slideBtn.type = "button";
            
            slideBtn.setAttribute("data-bs-target", "#latest-carousel");
            slideBtn.setAttribute("data-bs-slide-to", i);
            slideBtn.setAttribute("aria-label", `Slide ${i + 1}`);
            
            if (i === 0) {
                slideBtn.className = "active";
                slideBtn.setAttribute("aria-current", "true");
            }
        carouselIndicators.append(slideBtn);
        }

    const carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";

        for (let i = 0; i < projectData.length; i++) {
            
            const carouselItem = document.createElement("div");
            carouselItem.className = "carousel-item mb-0";
            
            if (i === 0) {

                carouselItem.classList.add("active");   
            }
                const itemImg = document.createElement("img");
                itemImg.src = projectData[i].img;
                itemImg.className = "d-block c-img mx-auto";
                itemImg.setAttribute("alt", projectData[i].alt);
            
                const carouselCaption = document.createElement("div");
                carouselCaption.className = "carousel-caption d-block c-carousel mx-auto";
                    
                    const itemName = document.createElement("h5");
                    itemName.textContent = projectData[i].title;
            
                    const appLink = document.createElement("a");
                    appLink.className ="me-5";
                    appLink.href = projectData[i].appLink;
                    appLink.textContent = "See App";
            
                    const codeLink = document.createElement("a");
                    codeLink.href = projectData[i].codeLink;
                    codeLink.textContent = "See Code";
            
                carouselCaption.append(itemName, appLink, codeLink);
            
            carouselItem.append(itemImg, carouselCaption);
            
        carouselInner.append(carouselItem);
        }

        const slideBackBtn = document.createElement("button");
        slideBackBtn.className = "carousel-control-prev c-carousel-control my-auto";
        slideBackBtn.type = "button";
        slideBackBtn.setAttribute("data-bs-target", "#latest-carousel");
        slideBackBtn.setAttribute("data-bs-slide", "prev");

            const slideBackBtnSpan = document.createElement("span");
            slideBackBtnSpan.className = "carousel-control-prev-icon";
            slideBackBtnSpan.setAttribute("aria-hidden", "true");

            const slideBackBtnTxt = document.createElement("span");
            slideBackBtnTxt.className = "visually-hidden";
            slideBackBtnTxt.textContent = "Previous";

        slideBackBtn.append(slideBackBtnSpan, slideBackBtnTxt);

        const slideNextBtn = document.createElement("button");
        slideNextBtn.className = "carousel-control-next c-carousel-control my-auto";
        slideNextBtn.type = "button";
        slideNextBtn.setAttribute("data-bs-target", "#latest-carousel");
        slideNextBtn.setAttribute("data-bs-slide", "next");

            const slideNextBtnSpan = document.createElement("span");
            slideNextBtnSpan.className = "carousel-control-next-icon";
            slideNextBtnSpan.setAttribute("aria-hidden", "true");

            const slideNextBtnTxt = document.createElement("span");
            slideNextBtnTxt.className = "visually-hidden";
            slideNextBtnTxt.textContent = "Next";

        slideNextBtn.append(slideNextBtnSpan, slideNextBtnTxt);

//console.log(slideBackBtn, slideNextBtn);

latestCarousel.append(carouselIndicators, carouselInner, slideBackBtn, slideNextBtn);
