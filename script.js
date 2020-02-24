// SCRIPT FILE FOR CSGO STATS
// by Velizar Stavrev
// API KEY 
// Your Steam Web API Key
// Key: 8A83A42008F83E486594C9D7374CC977
// Domain Name: https://velizarstavrev.github.io/csgostats/

// function getStats() {
//     var searchID = document.getElementById("search").value;
//     if (isNaN(searchID)) {
//         console.log("is text")

//         fetch('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=8A83A42008F83E486594C9D7374CC977&vanityurl=LuckY0n3')
//             .then(res => res.json())
//             .then((out) => {
//                 console.log('Output: ', out);
//                 var steamID = out.response.steamid;
//         }).catch(err => console.error(err));
//     }
//     else {
//         console.log("is number")
//         var steamID = searchID;
//     }
// }

function getCSStats() {
    fetch('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=8A83A42008F83E486594C9D7374CC977&steamid=76561198050060764')
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);

            // console.log(out.playerstats.stats[0]);

            // Stat display
            document.getElementById("personID").innerHTML = "ID: " + out.playerstats.steamID;
            document.getElementById("statOne").innerHTML = "Stat 1: " + "Total Kills " + out.playerstats.stats[0].value;
            document.getElementById("statTwo").innerHTML = "Stat 2: " + "HE Kills " + out.playerstats.stats[10].value;
            document.getElementById("statThree").innerHTML = "Stat 3: " + "Total Glock Pews " + out.playerstats.stats[50].value;


    }).catch(err => console.error(err));
}

function getSteamStats() {
fetch('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=8A83A42008F83E486594C9D7374CC977&steamids=76561198050060764')
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);

            // Stat display
            document.getElementById("avatar").src = out.response.players[0].avatarfull;
            document.getElementById("nick").innerHTML = "Username: " + out.response.players[0].personaname;

    }).catch(err => console.error(err));
}

// gets ID if steam profile name is typed
// function getSteamID() {
//     fetch('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=8A83A42008F83E486594C9D7374CC977&vanityurl=LuckY0n3')
//             .then(res => res.json())
//             .then((out) => {
//                 console.log('Output: ', out);

//                 var steamID = out.response.steamid;
//                 console.log(steamID);

//         }).catch(err => console.error(err));
// }
    

