//hides check box for icon inputs 
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
    var searchTerms = "g.1051,g.1050"
    document.location.replace("./results.html?="+searchTerms)
}


function checkInput (){
// pushes checked inputs into array 
var checkedInput = $('input:checked');
var checked = [];

$.each(checkedInput, function(){
    checked.push($(this).val());
});

    $('#happy-check').val('g.115,g.71,g.75');
    $('#sad').val('g.33,g.407,g.299,g.21,g.453,g.438') ;
    $('#angry').val('g.394,g.146,g.33,g.5');
    $('#loving').val('g.115,g.194,g.75,g.69');
    $('#silly').val('g.156,g.470');
    $('#cheerful').val('g.115,g.71,g.4,g.75,g.446');
    $('#motivated').val('g.5,g.146,g.71,g.246,g.394');
    $('#sleepy').val('g.299,g.21,g.453,g.438,g.69');
console.log(checked);
}
// $('button').on('click', checkInput)

$("button").on("click", goSearch)