const fs = require('fs');

function generateHtml(cardsContent) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="hero">
        <div class="hero-body">
            <h1 class="title has-text-centered">Team Profile</h1>
        </div>
    </header>
    <main style="max-width: 1000px; margin-left: auto; margin-right:auto">
        <div class="columns is-flex is-flex-wrap-wrap">
            ${cardsContent}
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="../src/generatePrompts.js"></script>
</body>
</html>`;
    writeToFile("./dist/index.html", html);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err? console.log(err) : console.log('Success!'));
}

module.exports = generateHtml;
