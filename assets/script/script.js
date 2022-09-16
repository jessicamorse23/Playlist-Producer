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

var apiKey ="NzE2OGZiMzEtYjAyMi00ZjM5LWI2ZGEtNzUwZWI3YmExMWQ1"
var genreUrl = `http://api.napster.com/v2.2/genres?apikey=${apiKey}`

fetch(genreUrl)
    .then(function(response){
        return response.json()
    })
    .then (function(results){
        // gets genre ids from api 
        var popGenre = results.genres[0].id
        var elGenre = results.genres[7].id
        var gospelGenre = results.genres[14].id
        var altGenre = results.genres[2].id
        var countryGenre = results.genres[5].id
        var jazzGenre = results.genres[6].id
        var classicalGenre = results.genres[11].id
        var newAgeGenre = results.genres[13].id
        var bluesGenre = results.genres[15].id
        var metalGenre = results.genres[21].id
        var rapGenre = results.genres[3].id
        var rockGenre = results.genres[1].id
        var rnbGenre = results.genres[4].id
        var vocalGenre = results.genres[17].id
        var comedyGenre = results.genres[20].id
        var childrenGenre = results.genres[19].id
        var oldiesGenre = results.genres[12].id
        var folkGenre = results.genres[16].id
        var soundTracksGenre = results.genres[18].id

        // sets values of moods to the genres
        $('#happyCheck').val(`${popGenre},${elGenre},${gospelGenre}`);
        $('#sadCheck').val(`${altGenre},${countryGenre},${jazzGenre},${classicalGenre},${newAgeGenre},${bluesGenre}`);
        $('#angryCheck').val(`${metalGenre},${rapGenre},${altGenre},${rockGenre}`);
        $('#lovingCheck').val(`${popGenre},${rnbGenre},${gospelGenre},${vocalGenre}`);
        $('#sillyCheck').val(`${comedyGenre},${childrenGenre}`);
        $('#cheerfulCheck').val(`${popGenre},${elGenre},${oldiesGenre},${gospelGenre},${folkGenre}`);
        $('#motivatedCheck').val(`${rockGenre},${rapGenre},${elGenre},${soundTracksGenre},${metalGenre}`);
        $('#sleepyCheck').val(`${jazzGenre},${classicalGenre},${newAgeGenre},${bluesGenre},${vocalGenre}`);
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
    console.log(checked);
});

}
// $('button').on('click', checkInput)

$("button").on("click", goSearch)