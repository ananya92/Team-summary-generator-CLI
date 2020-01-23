function getMainStr(manager, engineers, interns) {
    return `<!DOCTYPE html>
<html>
    <head>
        <title>Team summary</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    </head>
    <body>
        <header class="page-header text-center">
            <h1>Team Summary</h1>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-12">${manager}</div>
            </div>
            <div class="row">${engineers}</div>
            <div class="row">${interns}</div>
        </div>
    </body>
</html>`;
} 

module.exports.getMainStr = getMainStr;