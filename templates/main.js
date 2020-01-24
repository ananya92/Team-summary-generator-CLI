function getMainStr(manager, engineers, interns) {
    return `<!DOCTYPE html>
<html>
    <head>
        <title>Team summary</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <style>
            .card {
                box-shadow: 0 4px 8px 0 rgba(6, 12, 26, 0.096);
                -webkit-box-shadow: 0 0 10px rgba(6, 12, 26, 0.096);
                text-align: center;
            }

            header {
              margin: 0 0 30px 0;
              background-color: #0099ffd8;
              color: white;
            }
            .row {
              padding: 20px;
            }
            h3 {
              color:#0099ffd8;
            }
            h1 {
              color: white;
            }
            .display-1 {
              font-size: 1.75rem;
              font-weight: 400;
            }
        </style>
    </head>
    <body>
        <header class="pb-2 border-bottom text-center">
            <h1 class="display-4">Team Summary</h1>
        </header>
        <div class="container border rounded">
            <h3 class="display-1 text-center">Manager:</h3>
            <div class="row border">
            ${manager}
            </div>
            <h3 class="display-1 text-center">Engineers:</h3>
            <div class="row border">
            ${engineers}
            </div>
            <h3 class="display-1 text-center">Interns:</h3>
            <div class="row border">
            ${interns}
            </div>
        </div>
        <br><br>
    </body>
</html>`;
} 

module.exports.getMainStr = getMainStr;