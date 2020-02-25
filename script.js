// SCRIPT FILE FOR CSGO STATS
// by Velizar Stavrev
// API KEY 
// Your Steam Web API Key
// Key: 8A83A42008F83E486594C9D7374CC977
// Domain Name: https://velizarstavrev.github.io/csgostats/

function getStats() {
    var searchID = document.getElementById("search").value;
    if (isNaN(searchID)) {
        // console.log("is text")
        
        ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=8A83A42008F83E486594C9D7374CC977&vanityurl="
        url = ogurl + searchID;

        fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);
            var steamID = out.response.steamid;
            getSteamStats(steamID);
            getCSStats(steamID);
        }).catch(err => console.error(err));
    }
    else {
        // console.log("is number")

        var steamID = searchID;
        getSteamStats(steamID);
        getCSStats(steamID);
    }
}

function getSteamStats(steamID) {

    ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=8A83A42008F83E486594C9D7374CC977&steamids="
    url = ogurl + steamID;

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);

            // Stat display
            document.getElementById("avatar").src = out.response.players[0].avatarfull;
            document.getElementById("nick").innerHTML = "Username: " + out.response.players[0].personaname;

            // console.log("ID1: ", steamID);

    }).catch(err => console.error(err));
}

function getCSStats(steamID) {
    
    ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=8A83A42008F83E486594C9D7374CC977&steamid=";
    url = ogurl + steamID;

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);

            // console.log(out.playerstats.stats[0]);

            // Stat display
            document.getElementById("personID").innerHTML = "ID: " + out.playerstats.steamID;
            document.getElementById("statOne").innerHTML = "Stat 1: " + "Total Kills " + out.playerstats.stats[0].value;
            document.getElementById("statTwo").innerHTML = "Stat 2: " + "HE Kills " + out.playerstats.stats[10].value;
            document.getElementById("statThree").innerHTML = "Stat 3: " + "Total Glock Pews " + out.playerstats.stats[50].value;

            // console.log("ID2: ", steamID);

    }).catch(err => console.error(err));
}
