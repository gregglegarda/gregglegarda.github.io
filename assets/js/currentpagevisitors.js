console.log("currentpagevisitors.js");
var url = window.location.href;
console.log("currentpagevisitors.js", url);
var updateGoSquared = function() {
  $.getJSON('https://api.gosquared.com/now/v3/pages?api_key=demo&site_token=GSN-106863-S&href=' + encodeURIComponent(url), function(data) {
    setTimeout(updateGoSquared, 5000);
    $('#online-now').addClass('visible').find('.visitors').text(data.visitors);
  });
};

updateGoSquared();