console.log("marketpost.js 2");

function display_post(data) {
    console.log("submit_post", data);
    let date = new Date();
    let now = date.toISOString();
    console.log(now);
    $( "#market_post_history" ).empty();
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        var object = data[i];
        $( "#market_post_history" ).prepend( "<div><br /><h4 class='major'>"+ object['Title'] + "</h4><p>" + object['Message']+ "<br />" + object['ID']+"</p><br /><br /></div>")
    }
    clear_post()
}


// define the callAPI function that takes a first name and last name as parameters
var callAPI = (title, description)=>{
     console.log("went here to callAPI");
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"title":title,"message":description});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://osew5a4fd2.execute-api.us-east-1.amazonaws.com/dev6981", requestOptions)
    .then(response => response.text())
    .then(result => display_post(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}


function clear_post() {
    document.getElementById("demo-message-title").value = "";
    document.getElementById("demo-message").value = "";
}

//callAPI(document.getElementById('demo-message-title').value,document.getElementById('demo-message').value);



