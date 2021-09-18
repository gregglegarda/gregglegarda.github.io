console.log("gregg");



function submit_post() {
    var n_jquery=$('#demo-message').val();
    var n_js =document.getElementById('demo-message').value;
    console.log("n_jquery",n_jquery);
    console.log("n_js",n_js);
}

function clear_post() {
    document.getElementById("demo-message").value = "";
}