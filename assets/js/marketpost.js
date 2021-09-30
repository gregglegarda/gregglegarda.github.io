console.log("gregg");



function submit_post() {
    var title = $('#demo-message-title').val();
    var description = $('#demo-message').val();
    console.log("went here");
    $( "#market_post_history" ).prepend( "<div><br /><h4 class='major'>"+ title + "</h4><p>" + description+ "</p><br /><br /></div>")


}

function clear_post() {
    document.getElementById("demo-message-title").value = "";
    document.getElementById("demo-message").value = "";
}
