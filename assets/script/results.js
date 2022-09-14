var apiKey ="NzE2OGZiMzEtYjAyMi00ZjM5LWI2ZGEtNzUwZWI3YmExMWQ1"
//from window query

var searchTerms
//placeholder til window quuery is built
searchTerms = "/g.1051,g.1050"

var napsterURL = "http://api.napster.com/v2.2"
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

function getPlaylists() {
    var getPlaylistsURL = napsterURL + genresURL + searchTerms + playlistURL + "?apikey=" + apiKey + "&limit=5"//&offset=" + offset
    fetch(getPlaylistsURL)
        .then(function (response) {
            if (response.ok) {
                return response.json().then(function (data) {
                    // console.log(data)
                    //build playlist objects and artist id array
                    for(var i = 0; i <data.playlists.length; i++) {
                        var playlist = {
                            "name": data.playlists[i].name,
                            "image": data.playlists[i].images[0].url,
                            "artists": data.playlists[i].links.sampleArtists.ids                            
                        }
                        for( var artist = 0; artist < playlist["artists"].length; artist++) {
                            artistIDArr.push(playlist.artists[artist])
                        }
                        playlistArr.push(playlist)
                    }
                    for(var pArr = 0; pArr < playlistArr.length; pArr++) {
                        console.log("playlist array" + pArr +":" + playlistArr[pArr]["name"] + " " + playlistArr[pArr]["image"] + " " + playlistArr[pArr]["artists"] )
                    }
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
                    // console.log(data)
                    //build artist objects
                    for(var x  = 0; x < data.artists.length; x++) {
                        var artistDetail = {
                            "artistName" : data.artists[x].name,
                            "artistID" : data.artists[x].id
                        }
                        artistNameArr.push(artistDetail)
                    }
                    for(var aArr = 0; aArr < artistNameArr.length; aArr++){
                        console.log("Artist Name" + aArr + " " + artistNameArr[aArr]["artistName"] + " " + artistNameArr[aArr]["artistID"]);
                    }
                })
            }
            else {
                console.log("error " + response.status + " " + response.statusText)
            }
        })
}

getPlaylists();