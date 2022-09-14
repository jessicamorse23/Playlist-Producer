function goSearch() {
    //will be built from screen inputs
    var searchTerms = "g.1051,g.1050"
    document.location.replace("./results.html?="+searchTerms)
}

$("button").on("click", goSearch)
