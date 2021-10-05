console.log("gregg");
// define the callAPI function that takes a first name and last name as parameters
var callAPI = (firstName,lastName)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
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
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}



function submit_post() {
    var title = $('#demo-message-title').val();
    var description = $('#demo-message').val();
    console.log("went here");
    $( "#market_post_history" ).prepend( "<div><br /><h4 class='major'>"+ title + "</h4><p>" + description+ "</p><br /><br /></div>")
    saveStaticDataToFile();
}

function clear_post() {
    document.getElementById("demo-message-title").value = "";
    document.getElementById("demo-message").value = "";
}

