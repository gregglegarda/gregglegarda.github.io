console.log("marketpost.js 2");

function display_post(data) {
    console.log("submit_post", data);
    $( "#market_post_history" ).empty();
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        var object = data[i];
        $( "#market_post_history" ).prepend( "<div><br /><h4 class='major'>"+ object['title'] + "</h4><p>" + object['message']+ "<br />" + object['ID']+"</p><br /><br /></div>")
    }
    clear_post()
}


// define the callAPI function that takes a first name and last name as parameters
var callAPI = (title, description)=>{
    console.log("went here to callAPI");
    let date = new Date();
    let now = date.toISOString();
    console.log(now);
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw = JSON.stringify({"now":now, "title":title,"message":description, "date":now});
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://89xodcg5pj.execute-api.us-east-1.amazonaws.com/gregglegardadev", requestOptions)
    .then(response => response.text())
    .then(result => display_post(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}


function clear_post() {
    document.getElementById("demo-message-title").value = "";
    document.getElementById("demo-message").value = "";
}

//callAPI(document.getElementById('demo-message-title').value,document.getElementById('demo-message').value);

/*
// Include the AWS SDK module
const AWS = require('aws-sdk');
// Instantiate a DynamoDB document client with the SDK
let dynamodb = new AWS.DynamoDB.DocumentClient();
// Use built-in module to get current date & time
//let date = new Date();
// Store date and time in human-readable format in a variable
//let now = date.toISOString();
// Define handler function, the entry point to our code for the Lambda service
// We receive the object that triggers the function as a parameter
exports.handler = async (event) => {
    // Extract values from event and format as strings
    let now = JSON.stringify(`ID: ${event.now}`);
    let title = JSON.stringify(`Title: ${event.title}`);
    let message = JSON.stringify(`Message: ${event.message}`);
    // Create JSON object with parameters for DynamoDB and store in a variable
    let params = {
        TableName:'HelloWorldDatabase',
        Item: {
            'ID': now,
            'Title': title,
            'Message': message
        }
    };
    // Using await, make sure object writes to DynamoDB table before continuing execution
    await dynamodb.put(params).promise();


    const scanResults = [];
    let items;
    let result;
    do{
        items =  await dynamodb.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey  = items.LastEvaluatedKey;
    }while(typeof items.LastEvaluatedKey !== "undefined");
    //result = scanResults.sort((a, b) => b.ID - a.ID);
    result = scanResults;

    // Create a JSON object with our response and store it in a constant
    const response = {
        statusCode: 200,
        body: result
    };
    // Return the response constant
    return response;
};

*/