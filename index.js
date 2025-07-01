/*Dynamically Render Projects from data.js*/
import { latestData, featuredData } from "./data.js";
import { renderCarousel } from "./carousel.js";

    renderCarousel(latestData, "latest-carousel");
    renderCarousel(featuredData, "feat-carousel");

