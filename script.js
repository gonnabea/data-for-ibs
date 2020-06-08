const searchInput = document.getElementById("searchInput"),
searchBtn = document.getElementById("searchBtn"),
searchArea = document.getElementById("searchArea"),
background = document.getElementById("background")

function searchClick(){
    searchBtn.style.animation = "moveBtn 0.3s forwards";
    searchInput.style.animation = "focusSearch 0.3s forwards";
    
    setTimeout(()=> {
        searchArea.addEventListener("click", revertInput);
        background.addEventListener("click", revertInput);
    }, 500)
}

function revertInput(){
    searchBtn.style.animation = "revertBtn 0.3s forwards";
    searchInput.style.animation = "outFocused 0.3s forwards";
    searchArea.removeEventListener("click", revertInput);
    background.removeEventListener("click", revertInput);
}

function init(){
    searchInput.addEventListener("click", searchClick);
}

init();