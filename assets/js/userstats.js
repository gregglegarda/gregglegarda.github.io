console.log("userstats.js3");
var total_posts;
var total_visits;
var current_online;
var current_user;



// define the callAPI function that takes a title and message as parameters
var calluserstatsAPI = (name)=>{
    console.log("calluserstatsAPI");
    let new_date = new Date();
    let date = new_date.toISOString();
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"name":name, "date":date});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch(config.api_key_gregglegardauserstatsdev, requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}


function get_name_alias(){
   console.log("get_name_alias function");
   if (window.location.href.endsWith("#posts")){
        console.log("page #posts");
        let person = prompt("Please enter your name or alias:", "");
        if (person == null || person == "") {
            console.log("user cancelled");
            person = "Anonymous User";
            calluserstatsAPI(person);
            current_user = person;
        } else {
            console.log("API called");
            calluserstatsAPI(person);
            current_user = person;
        }
   }
   else{
        console.log("page not #posts");
   }

}




