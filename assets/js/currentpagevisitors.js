var url = window.location.href;
$.getJSON('https://api.gosquared.com/now/v3/pages?api_key=demo&site_token=GSN-106863-S&href=' + encodeURIComponent(url), function(data) {
  print("visitors now: ", data.visitors);
  $('#online-now').addClass('visible').find('.visitors').text(data.visitors);

});