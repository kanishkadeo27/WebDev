const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn"); 

const popupContainerEl = document.querySelector(".popup-container");

const popupBtnEl = document.querySelector(".popup-btn");

const  crossBtnEl = document.querySelector(".cross-btn");

btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

crossBtnEl.addEventListener("click",()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
});
