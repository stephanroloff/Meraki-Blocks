import { applyMasonryLayout } from "./masonry-code.js";

setTimeout(() => {

    applyMasonryLayout({
        gridSelector: ".masonry-grid",
        itemSelector: ".masonry-item",
        contentSelector: ".masonry-content",
        rowHeight: 1,
        containsImages: false,  // Originally was true I changed it to false
    });

}, 1000)
