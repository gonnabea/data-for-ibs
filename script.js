const data = require("./data");
const searchInput = document.getElementById("searchInput"),
searchBtn = document.getElementById("searchBtn"),
searchArea = document.getElementById("searchArea"),
background = document.getElementById("background"),
resultArea = document.getElementById("resultArea"),
searchForm = document.getElementById("searchForm")

console.log(data)

function searchClick(){
    searchBtn.style.animation = "moveBtn 0.4s forwards";
    searchInput.style.animation = "focusSearch 0.4s forwards";
    searchInput.style.textAlign = "center";
    searchInput.placeholder = "증상 혹은 의심되는 상태를 입력하세요"
    setTimeout(()=> {
        resultArea.addEventListener("click", revertInput);
    }, 500)
}

function revertInput(){
    searchBtn.style.animation = "revertBtn 0.4s forwards";
    searchInput.style.animation = "outFocused 0.4s forwards";
    searchInput.style.textAlign = "start";
    searchInput.placeholder = "증상을 입력하세요"
    resultArea.removeEventListener("click", revertInput);
}

function handleSearch(e){
    e.preventDefault();
    revertInput()
}

function init(){
    searchInput.addEventListener("click", searchClick);
    searchForm.addEventListener("submit", handleSearch)
}

init();