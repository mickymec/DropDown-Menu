const dropdownBtn = document.querySelector(".dropdown-btn");
const dropMenu = document.querySelector(".drop-menu");
const menuList = document.querySelector(".menu-list");
const settingList = document.querySelector(".setting-list");
const helpList = document.querySelector(".help-list");
const settingItem = document.querySelector(".setting-item");
const helpItem = document.querySelector(".help-item");
const backSetting = document.querySelector(".back-setting-list");
const backHelp = document.querySelector(".back-help-list");
const arrowBtn = document.querySelector('.bxs-chevron-down');


dropdownBtn.onclick = (()=>{
    dropdownBtn.classList.toggle("width");
    dropMenu.classList.toggle("show");
    arrowBtn.classList.toggle("rotate");
});

settingItem.onclick = (() => {
    // menuList.style.marginLeft = "-280px";
    menuList.style.display = "none";
    settingList.classList.toggle("show-setting");
});

helpItem.onclick = (() => {
    // menuList.style.marginLeft = "-280px";
    menuList.style.display = "none";
    helpList.classList.toggle("show-help");
});

backSetting.onclick = ( ()=> {
    // menuList.style.marginLeft = "0px";
    menuList.style.display = "block";
    settingList.classList.remove("show-setting");
});

backHelp.onclick = ( ()=> {
    // menuList.style.marginLeft = "0px";
    menuList.style.display = "block";
    helpList.classList.remove("show-help");
});
