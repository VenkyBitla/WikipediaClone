let inputEle = document.getElementById("searchInput")
let spinnerEle = document.getElementById("spinner")
let resultsCont = document.getElementById("searchResults")

inputEle.addEventListener("keydown", searchQuery)

function searchQuery(event) {
    if(event.key === "Enter") {
        spinnerEle.classList.remove("d-none")
        resultsCont.textContent = ""
        let searchInput = inputEle.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            let { search_results}=jsonData;
            displayResults(search_results)
        })
    }
}

function displayResults(search_results){
   spinnerEle.classList.add("d-none")

   for( let result of search_results){
    displayEachResult(result)
   }
}

function displayEachResult(result){
    console.log(result)
let {title, link, description}= result

let titleEle = document.createElement("h1")
titleEle.textContent = title
titleEle.classList.add("result-title")
resultsCont.appendChild(titleEle)

let linkEle = document.createElement("a")
linkEle.textContent = link
linkEle.href = link
linkEle.target ="_blank"
linkEle.classList.add("result-url")
resultsCont.appendChild(linkEle)

let desEle = document.createElement("p")
desEle.textContent= description
desEle.classList.add("link-description")
resultsCont.appendChild(desEle)
}