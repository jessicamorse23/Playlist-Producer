$(document).ready(function(){
    $('#happyCheck').hide()
    $('#sadCheck').hide()
    $('#angryCheck').hide()
    $('#lovingCheck').hide()
    $('#sillyCheck').hide()
    $('#cheerfulCheck').hide()
    $('#motivatedCheck').hide()
    $('#sleepyCheck').hide()
  })

function goSearch() {
    //will be built from screen inputs
    $('#happy') = 'g.115,g.71,g.75'
    $('#sad') = 'g.33,g.407,g.299,g.21,g.453,g.438'
    $('#angry') = 'g.394,g.146,g.33,g.5'
    $('#loving') = 'g.115,g.194,g.75,g.69'
    $('#silly') = 'g.156,g.470'
    $('#cheerful') = 'g.115,g.71,g.4,g.75,g.446'
    $('#motivated') = 'g.5,g.146,g.71,g.246,g.394'
    $('#sleepy') = 'g.299,g.21,g.453,g.438,g.69'
    
    var searchTerms = "g.1051,g.1050"
    document.location.replace("./results.html?="+searchTerms)
}



$("button").on("click", goSearch)