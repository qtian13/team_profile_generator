function generateCard(employeeAdded) {
    // let card = $('<div>').addClass("card");
    // let cardContent = $("<div>").addClass("card-content").appendTo(card);
    // let cardTitle = $("<div>").addClass("title").text(employeeAdded.name).appendTo(cardContent);
    // let cardSubtitle = $("<div>").addClass("subtitle").text(employeeAdded.role).appendTo(cardContent);
    // let panel = $("<div>").addClass("panel").appendTo("cardContent");
    // let id = $("<div>").addClass("panel-block").appendTo(panel).text(employeeAdded.getId());
    // let email = $("<div>").addClass("panel-block").appendTo(panel).text(employeeAdded.getEmail());
    // switch (employeeAdded.getRole()) {
    //     case "Manager":
    //         let officeNumber = $("<div>").addClass("panel-block").appendTo(panel).text("Office Number: " + employeeAdded.getOfficeNumber());
    //         break;
    //     case "Engineer":
    //         let gitHubUserName = $("<a>").attr("href", "https://github.com/" + employeeAdded.getGitHubUserName()).attr("target", "_blank").text(employeeAdded.getGitHubUserName());
    //         let gitInfo = $("<div>").addClass("panel-block").appendTo(panel).text("GitHub: ").append(gitHubUserName);
    //         break;
    //     case "Intern":
    //         let schoolInfo = $("<div>").addClass("panel-block").appendTo(panel).text("School: " + employeeAdded.getSchool());
    //         break;
    // }
    let specialPanel;
    switch (employeeAdded.getRole()) {
        case "Manager":
            specialPanel = `<div class="panel-block">
            OfficeNumber: ${employeeAdded.getOfficeNumber()}
        </div>`
            break;
        case "Engineer":
            specialPanel = `<a class="panel-block" href="https://github.com/${employeeAdded.getGitHubUserName()}" target="_blank">
            GitHub: ${employeeAdded.getGitHubUserName()}
        </a>`
            break;
        case "Intern":
            specialPanel = `<div class="panel-block">
            School: ${employeeAdded.getSchool()}
        </div>`
            break;
        default:
            specialPanel= "";
    }
    return `
    <div class="column is-4">
        <div class="card" style="height: 100%;">
            <div class="card-content">
                <div class="title">${employeeAdded.name}</div>
                <div class="subtitle">${employeeAdded.getRole()}</div>
                <div class="panel">
                    <div class="panel-block">
                        ID: ${employeeAdded.getId()}
                    </div>
                    <a class="panel-block" href="mailto:${employeeAdded.getEmail()}" target="_blank">
                        Email: ${employeeAdded.getEmail()}
                    </a>
                    ${specialPanel}
                </div>
            </div>
        </div>
    </div>`
}

module.exports = generateCard;