console.log("userstats.js");
var total_posts;
var total_visits;
var current_guests;



// define the callAPI function that takes a title and message as parameters
var calluserstatsAPI = (fname, lname)=>{

    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"firstName":fname, "lastName":lname});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://l72kez4ojb.execute-api.us-east-1.amazonaws.com/gregglegardauserstatsdev", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}

calluserstatsAPI("greggy", "legarday");