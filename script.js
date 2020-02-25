// SCRIPT FILE FOR CSGO STATS
// by Velizar Stavrev
// API KEY 
// Your Steam Web API Key
// Key: 8A83A42008F83E486594C9D7374CC977
// Domain Name: https://velizarstavrev.github.io/csgostats/

// CODE START

// Search on Enter press
document.getElementById("search1").addEventListener('keydown', keyEvents1);
document.getElementById("search2").addEventListener('keydown', keyEvents2); 

function keyEvents1(event) {
    switch (event.keyCode) {
        case 13:
            getStats1();
        break;
    }
}

function keyEvents2(event) {
    switch (event.keyCode) {
        case 13:
            getStats2();
        break;
    }
}

// USER 1
function getStats1() {
    var searchID = document.getElementById("search1").value;
    if (isNaN(searchID)) {
        // console.log("is text")
        
        ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=8A83A42008F83E486594C9D7374CC977&vanityurl="
        url = ogurl + searchID;

        fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);
            var steamID = out.response.steamid;
            getSteamStats1(steamID);
            getCSStats1(steamID);
        }).catch(err => console.error(err));
    }
    else {
        // console.log("is number")

        var steamID = searchID;
        getSteamStats1(steamID);
        getCSStats1(steamID);
    }
}

function getSteamStats1(steamID) {

    ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=8A83A42008F83E486594C9D7374CC977&steamids="
    url = ogurl + steamID;

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);

            // Stat display
            document.getElementById("avatar1").src = out.response.players[0].avatarfull;
            document.getElementById("nick1").innerHTML = "Nickname: " + out.response.players[0].personaname;
            document.getElementById("name1").innerHTML = "Name: " + out.response.players[0].realname;
            timeConverter1(out.response.players[0].timecreated);
            document.getElementById("link1").href = out.response.players[0].profileurl;

    }).catch(err => console.error(err));
}

function getCSStats1(steamID) {
    
    ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=8A83A42008F83E486594C9D7374CC977&steamid=";
    url = ogurl + steamID;

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);

            // Stat display
            document.getElementById("personID1").innerHTML = "ID: " + out.playerstats.steamID;
            document.getElementById("p1s1").innerHTML = "Time Played: " + ((out.playerstats.stats[2].value) / (60 * 60)).toFixed(2) + " hrs";
            document.getElementById("p1s2").innerHTML = "Wins: " + out.playerstats.stats[5].value;
            document.getElementById("p1s3").innerHTML = "MVPs: " + out.playerstats.stats[102].value;
            document.getElementById("p1s4").innerHTML = "Score: " + out.playerstats.stats[133].value;
            document.getElementById("p1s5").innerHTML = "Kills: " + out.playerstats.stats[0].value;
            document.getElementById("p1s6").innerHTML = "Deaths: " + out.playerstats.stats[1].value;
            document.getElementById("p1s7").innerHTML = "Headshots: " + out.playerstats.stats[25].value;
            document.getElementById("p1s8").innerHTML = "Damage Done: " + out.playerstats.stats[6].value;
            document.getElementById("p1s9").innerHTML = "Money Earned: " + out.playerstats.stats[7].value;
            document.getElementById("p1s10").innerHTML = "Weapons Donated: " + out.playerstats.stats[38].value;
            document.getElementById("p1s11").innerHTML = "Bombs Set: " + out.playerstats.stats[3].value;
            document.getElementById("p1s12").innerHTML = "Bombs Defused: " + out.playerstats.stats[4].value;
            document.getElementById("p1s13").innerHTML = "Hostage Rescues: " + out.playerstats.stats[8].value;

    }).catch(err => console.error(err));
}

// USER 2
function getStats2() {
    var searchID = document.getElementById("search2").value;
    if (isNaN(searchID)) {
        // console.log("is text")
        
        ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=8A83A42008F83E486594C9D7374CC977&vanityurl="
        url = ogurl + searchID;

        fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);
            var steamID = out.response.steamid;
            getSteamStats2(steamID);
            getCSStats2(steamID);
        }).catch(err => console.error(err));
    }
    else {
        // console.log("is number")

        var steamID = searchID;
        getSteamStats2(steamID);
        getCSStats2(steamID);
    }
}

function getSteamStats2(steamID) {

    ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=8A83A42008F83E486594C9D7374CC977&steamids="
    url = ogurl + steamID;

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);

            // Stat display
            document.getElementById("avatar2").src = out.response.players[0].avatarfull;
            document.getElementById("nick2").innerHTML = "Nickname: " + out.response.players[0].personaname;
            document.getElementById("name2").innerHTML = "Name: " + out.response.players[0].realname;
            timeConverter2(out.response.players[0].timecreated);
            document.getElementById("link2").href = out.response.players[0].profileurl;

    }).catch(err => console.error(err));
}

function getCSStats2(steamID) {
    
    ogurl = "https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=8A83A42008F83E486594C9D7374CC977&steamid=";
    url = ogurl + steamID;

    fetch(url)
        .then(res => res.json())
        .then((out) => {
            // console.log('Output: ', out);

            // Stat display
            document.getElementById("personID2").innerHTML = "ID: " + out.playerstats.steamID;
            document.getElementById("p2s1").innerHTML = "Time Played: " + ((out.playerstats.stats[2].value) / (60 * 60)).toFixed(2) + " hrs";
            document.getElementById("p2s2").innerHTML = "Wins: " + out.playerstats.stats[5].value;
            document.getElementById("p2s3").innerHTML = "MVPs: " + out.playerstats.stats[102].value;
            document.getElementById("p2s4").innerHTML = "Score: " + out.playerstats.stats[133].value;
            document.getElementById("p2s5").innerHTML = "Kills: " + out.playerstats.stats[0].value;
            document.getElementById("p2s6").innerHTML = "Deaths: " + out.playerstats.stats[1].value;
            document.getElementById("p2s7").innerHTML = "Headshots: " + out.playerstats.stats[25].value;
            document.getElementById("p2s8").innerHTML = "Damage Done: " + out.playerstats.stats[6].value;
            document.getElementById("p2s9").innerHTML = "Money Earned: " + out.playerstats.stats[7].value;
            document.getElementById("p2s10").innerHTML = "Weapons Donated: " + out.playerstats.stats[38].value;
            document.getElementById("p2s11").innerHTML = "Bombs Set: " + out.playerstats.stats[3].value;
            document.getElementById("p2s12").innerHTML = "Bombs Defused: " + out.playerstats.stats[4].value;
            document.getElementById("p2s13").innerHTML = "Hostage Rescues: " + out.playerstats.stats[8].value;

    }).catch(err => console.error(err));
}

// TIME CONVERTER
function timeConverter1(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    document.getElementById("created1").innerHTML = "Created: " + time;
}

function timeConverter2(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    document.getElementById("created2").innerHTML = "Created: " + time;
}