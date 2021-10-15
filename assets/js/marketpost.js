console.log("marketpost.js");



function submit_post() {
    console.log("submit post");
    callAPI(document.getElementById('demo-message-title').value,document.getElementById('demo-message').value);
}

function display_post(data) {
    console.log("display_post", data);
    console.log("current_user", current_user);
    $( "#market_post_history" ).empty();
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        var object = data[i];
        $( "#market_post_history" ).prepend( "<div><br /><h4 class='major'>"+ object['title'] + "</h4><p>" + object['message']+ "</p><p>by: " + object['user'] + "<br />on: "+ object['date'] +"</p></div><hr>")
    }
    clear_post();
}



// define the callAPI function that takes a title and message as parameters
var callAPI = (title, message)=>{
    let id = "posts"
    if (title == "" || message == ""){
        id = "none";
    }
    let new_date = new Date();
    let date = new_date.toISOString();
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"id":id, "title":title,"message":message, "date":date, "user":current_user});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch(api_key_gregglegardadev, requestOptions)
    .then(response => response.text())
    .then(result => display_post(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}


function clear_post() {
    document.getElementById("demo-message-title").value = "";
    document.getElementById("demo-message").value = "";
}

//submit post to initialize API call and to pull from database
submit_post();
