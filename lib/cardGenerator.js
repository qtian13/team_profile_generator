function generateCard(employeeAdded) {
    let specialPanel;
    switch (employeeAdded.getRole()) {
        case "Manager":
            specialPanel = `<div class="panel-block">
                        OfficeNumber: ${employeeAdded.getOfficeNumber()}
                    </div>`
            break;
        case "Engineer":
            specialPanel = `<a class="panel-block" href="https://github.com/${employeeAdded.getGithub()}" target="_blank">
                        GitHub: ${employeeAdded.getGithub()}
                    </a>`
            break;
        case "Intern":
            specialPanel = `<div class="panel-block">
                        School: ${employeeAdded.getSchool()}
                    </div>`
            break;
        default:
            specialPanel= ``;
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