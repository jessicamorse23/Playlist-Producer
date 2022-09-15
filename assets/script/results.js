var apiKey ="NzE2OGZiMzEtYjAyMi00ZjM5LWI2ZGEtNzUwZWI3YmExMWQ1"

//from window query
var querySearch = document.location.search.split("?=")[1]
var searchTerms
searchTerms = "/" + querySearch

var napsterURL = "https://api.napster.com/v2.2"
var genresURL = "/genres"
var playlistURL = "/playlists/top"
var artistsURL = "/artists"
//paging?
var offset = 0;
//playlist objects
var playlistArr = []
// artist id objects for url building
var artistIDArr = []
//names for display
var artistNameArr = []
//artist objects
var artistDetail = []

var listIndex = 0;

function displayScreen() {

    for(card = 1; card <= 4; card++) {
        var workingCard = $("#playlist-" + card)

        var cardDiv = $("<div>")
        cardDiv.addClass("card-divider")
        var pTitle = $("<h2>")
        pTitle.attr("id", "playlist-" + card + "-title")
        pTitle.text(playlistArr[listIndex].name)
        cardDiv.append(pTitle)

        var pImg = $("<img>")
        pImg.attr("src", "https://" + playlistArr[listIndex].image)

        var cardSect = $("<div>")
        cardSect.addClass("card-section align-self-middle flex-child-auto")
        var pDetailDesc = $("<p>")
        pDetailDesc.text(playlistArr[listIndex].desc)
        var pDetailArtists = $("<p>")
        var pDetailArtistsList = $("<ul>")
        for(var a = 0; a < playlistArr[listIndex].artists.length; a++) {
            //get artist name from artistDetail
    
            var artistItem = $("<li>")
            artistItem.text(playlistArr[listIndex].artists[a])
            pDetailArtistsList.append(artistItem)
        }
        pDetailArtists.append(pDetailArtistsList)
        var favBtn = $("<button>")
        favBtn.addClass("custom-btn-like")
        var favBtnText = $("<span>")
        favBtnText.text("Like ❤️")
        favBtn.append(favBtnText)

        cardSect.append(pDetailDesc)
        cardSect.append(pDetailArtists)
        cardSect.append(favBtn)

        workingCard.append(cardDiv)
        workingCard.append(pImg)
        workingCard.append(cardSect)

        listIndex++
    }
}

function getPlaylists() {
    var getPlaylistsURL = napsterURL + genresURL + searchTerms + playlistURL + "?apikey=" + apiKey + "&limit=10"//&offset=" + offset
    fetch(getPlaylistsURL)
        .then(function (response) {
            if (response.ok) {
                return response.json().then(function (data) {
                    // console.log(data)
                    //build playlist objects and artist id array
                    for(var i = 0; i <data.playlists.length; i++) {
                        var playlist = {
                            "id": data.playlists[i].id,
                            "name": data.playlists[i].name,
                            "desc": data.playlists[i].description,
                            "image": data.playlists[i].images[0].url.split("://")[1],
                            "artists": data.playlists[i].links.sampleArtists.ids,
                            "weight": 0                            
                        }
                        for( var artist = 0; artist < playlist["artists"].length; artist++) {
                            //if artist is not already in list, add it
                            if(artistIDArr.indexOf(playlist.artists[artist]) === -1) {
                                artistIDArr.push(playlist.artists[artist])
                            }
                        }
                        //find dups
                        var dupCheck = playlistArr.findIndex(function (current) {
                            return (current.id == data.playlists[i].id) 
                        });
                        //if dup found, increae weight, else add it
                        if (dupCheck > -1) {
                                playlistArr[dupCheck].weight += 1
                            }
                            else {
                                playlistArr.push(playlist)
                            }
                        //sort by weight
                    }
                    playlistArr.sort(function (item1, item2) {
                        if(item1.weight > item2.weight) {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    })
                    getArtists();
                });
            }
            else {
                console.log("error " + response.status + " " + response.statusText)
            }
        })
}

function getArtists() {
    var getArtistsURL = napsterURL + artistsURL + "/" + artistIDArr.join(",") + "?apikey=" + apiKey
    fetch(getArtistsURL)
        .then(function (response) {
            if(response.ok) {
                return response.json().then(function (data) {
                    //build artist objects
                    for(var x  = 0; x < data.artists.length; x++) {
                        var artistDetail = {
                            "artistName" : data.artists[x].name,
                            "artistID" : data.artists[x].id
                        }
                        artistNameArr.push(artistDetail)
                    }
                    displayScreen();
                })
            }
            else {
                console.log("error " + response.status + " " + response.statusText)
            }
        })
}

getPlaylists();

var favoritesListEl = $("favorites");

var printFavorites = function (playlist) {
    var listEl = $("<li>"); 
    console.log (a);
    var listDetail = p1Details;
    listEl.addClass (playlist.item).text(listDetail);
    listEl.appendTo(favoritesListEl);
}; 