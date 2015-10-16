$(document).ready(function(){

  //declare the api, data and callback function to send to getJSON:
  // var movieAPI = "http://www.omdbapi.com/?";
  // var data = {
  //   t: title,
  //   y: "1997",
  //   plot: "short",
  //   r: "json"
  // };
  // function callback(response) {
  //   console.log("u got to the callback response!!!!!!!!");
  //   console.log(response.Title);

  // };

  // select some elements on page..



  //when user submits form, return search results to the movie id div from the api..

  $('form').submit(function(e){
    e.preventDefault();

    var $titleSearch = $('#title');
    var $yearSearch = $('#year');
    var $submitButton = $('#submit');
    var title  = $titleSearch.val();
    var year = $yearSearch.val();
    $('#movies').html('');



    var movieAPI = "http://www.omdbapi.com/?";
    var data = {
      t: title,
      y: "1997",
      plot: "short",
      r: "json"
    };
  function callback(response) {
    console.log("u got to the callback response!!!!!!!!");
    console.log(response.Title);
    var nate = '';
    nate += "<h1>" + response.Title + "</h1>";
    $('#movies').html(nate);
  };


    // use the getJSON jquery ajax method..
    $.getJSON(movieAPI, data, callback);


  })//ends form submit click



})//ends ready