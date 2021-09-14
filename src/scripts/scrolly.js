import scrollama from "scrollama";
import Stickyfill from "stickyfill";

import * as d3 from "d3";

var background = d3.select("#background");
var step = d3.selectAll(".step");
var stickyfill = Stickyfill();

var scroller = scrollama();

function handleResize() {
    //update height of steps
    var stepHeight = Math.floor(window.innerHeight * 0.75);
    step.style("height", stepHeight + "px");

    var backgroundHeight = window.innerHeight / 2;
    var backgroundMarginTop = (window.innerHeight - backgroundHeight) / 6;

    background
        .style("height", backgroundHeight + "px")
        .style("top", backgroundMarginTop + "px");

    //update new element dimensions
    scroller.resize();
}

 function handleStepEnter(response) {
    // add to color to current step
    response.element.classList.add("is-active");
}

 function handleStepExit(response) {
    // add to color to current step
   if (response.direction == "up") {
        response.element.classList.remove("is-active");
   }
}

function stepupStickyfill() {
    d3.selectAll(".sticky").each(function () {
        stickyfill.add(this);
    })
}

function init() {
    stepupStickyfill();
    handleResize();

    scroller
        .setup({
            step: "#g-lede-box .step",
            offset: 0.75,
            debug: false
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);

    window.addEventListener("resize", handleResize);
}

//light em up
init();
