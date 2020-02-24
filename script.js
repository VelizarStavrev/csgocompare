// SCRIPT FILE FOR CSGO STATS
// by Velizar Stavrev
// API KEY 
// Your Steam Web API Key
// Key: 8A83A42008F83E486594C9D7374CC977
// Domain Name: https://velizarstavrev.github.io/csgostats/

// CSGO STATS USES THIS API
// http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=<<KEY>>&steamid=<<PROFILEID>>

fetch('https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=8A83A42008F83E486594C9D7374CC977&steamid=76561198050060764')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));
