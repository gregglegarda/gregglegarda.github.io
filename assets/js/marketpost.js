console.log("gregg");



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



function saveStaticDataToFile() {
          // (A) CREATE BLOB OBJECT
      var myBlob = new Blob(["CONTENT"], {type: "text/plain"});

      // (B) FORM DATA
      var data = new FormData();
      data.append("upfile", myBlob);

      // (C) AJAX UPLOAD TO SERVER
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "3b-upload.php");
      xhr.onload = function () {
        console.log(this.status);
        console.log(this.response);
      };
      xhr.send(data);
}
