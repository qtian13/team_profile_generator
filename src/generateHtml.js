const fs = require('fs');

// write html to index.html
function generateHtml(cardsContent) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="hero">
        <div class="hero-body">
            <h1 class="title has-text-centered">Team Profile</h1>
        </div>
    </header>
    <main>
        <div class="columns is-flex-wrap-wrap is-justify-content-space-around">
            ${cardsContent}
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>
</html>`;
    writeToFile("./dist/index.html", html);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err? console.log(err) : console.log('Success!'));
}

module.exports = generateHtml;
