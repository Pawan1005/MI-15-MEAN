<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUE2</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <script src="js2.js"></script>
</head>

<body>
    <h1>percentage</h1>
    <div>
                <label for="subject1">Sub-1:</label> 
                <input type="number" id="sub1">
                  <br>
                <label for="subject2">Sub-2:</label> 
                <input type="number"  id="sub2">
                <br>
                <label for="subject3">Sub-3:</label> 
                <input type="number"  id="sub3">
                <br>
                <label for="subject4">Sub-4:</label> 
                <input type="number"  id="sub4">
                <br>
                <label for="subject5">Sub-5:</label> 
                <input type="number" id="sub5">
                <br>
            
        <button type="button" class="btn btn-outline-primary" onclick="calculation()">Calculate </button>
        <p>Total Marks: <span id="totalmarks"></span> & Percentage: <span id="percentage"></span>%</p>
        <p>Grade: <span id="grade"></span></p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html> 