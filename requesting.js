var request = function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

var callback = function(str){
  console.log(str);
}

var URL = "https://las.api.riotgames.com/api/lol/LAS/v1.4/summoner/by-name/skywawe19?api_key=RGAPI-6be9af4b-22e2-43cb-b97e-d3fad84552c5";

request(URL, callback);
