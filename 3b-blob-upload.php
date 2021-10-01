<?php
echo move_uploaded_file(
  $_FILES["upfile"]["tmp_name"],
  "demo.txt"
) ? "OK" : "ERROR UPLOADING";