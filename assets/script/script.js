//hides check box for icon inputs 
$(document).ready(function () {
    $('#happyCheck').hide()
    $('#sadCheck').hide()
    $('#angryCheck').hide()
    $('#lovingCheck').hide()
    $('#sillyCheck').hide()
    $('#cheerfulCheck').hide()
    $('#motivatedCheck').hide()
    $('#sleepyCheck').hide()
})

// sets values of moods to the genres
$('#happyCheck').val('g.115,g.71');
$('#sadCheck').val('g.33,g.438');
$('#angryCheck').val('g.394,g.146');
$('#lovingCheck').val('g.115,g.194');
$('#sillyCheck').val('g.156,g.470');
$('#cheerfulCheck').val('g.115,g.4');
$('#motivatedCheck').val('g.5,g.71');
$('#sleepyCheck').val('g.21,g.438');

function goSearch() {
    //pushes checked inputs into array
    var checkedInput = $('input:checked');
    var checked = [];

    $.each(checkedInput, function () {
        checked.push($(this).val());
    });
    var searchTerms = checked
    document.location.replace("./results.html?=" + searchTerms)
}

$("button").on("click", goSearch)

$(document).ready(function() {
    $("div").effect("slide");
  });