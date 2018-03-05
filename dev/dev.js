$( document ).ready(function() {
    // console.log( "ready!" );

    // var queryEx = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=7gCY693a53ZjIQPAsatsvX9jwLXFFcNe&limit=5";

    var queryTest = "http://api.giphy.com";
    var searchEndPoint = "/v1/gifs/search" + "?q=";
    var randomEndPoint = "/v1/gifs/random" + "?q=";
    var apiKey = "&api_key=" + "7gCY693a53ZjIQPAsatsvX9jwLXFFcNe";
    var searchTerm = "cat";

    queryTest += [
        searchEndPoint +
        searchTerm +
        apiKey
    ];

    var dotGet = $.get(queryTest);

    console.log("queryTest: ",  queryTest);

    dotGet.done(function(data) { 
        console.log("red wine, success! ", data); 
        
    });

    
// END OF: $( document ).ready(function() {
});