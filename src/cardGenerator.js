// generate a panel according to the role
function generateSpecialPanel(employeeAdded) {
    switch (employeeAdded.getRole()) {
        case "Manager":
            return `<div class="panel-block">
                        OfficeNumber: ${employeeAdded.getOfficeNumber()}
                    </div>`
        case "Engineer":
            return `<a class="panel-block" href="https://github.com/${employeeAdded.getGithub()}" target="_blank">
                        GitHub: ${employeeAdded.getGithub()}
                    </a>`
        case "Intern":
            return `<div class="panel-block">
                        School: ${employeeAdded.getSchool()}
                    </div>`
        default:
            return ``;
    }
}

// generate an icon according to the role
function generateIcon(role) {
    switch (role) {
        case "Manager":
            return `<i class="fas fa-mug-hot"></i>`;
        case "Engineer":
            return `<i class="fas fa-glasses"></i>`
        case "Intern":
            return `<i class="fas fa-user-graduate"></i>`
        default:
            return ``;
    }
}

// generate a card with the employee infomation
function generateCard(employeeAdded) {
    const role = employeeAdded.getRole();
    return `
            <div class="column is-4">
                <div class="card">
                    <div class="card-header">
                        <div class="card-header-title">
                            <div class="title">${employeeAdded.name}</div>
                            <div class="subtitle"><span class="icon">${generateIcon(role)}</span>${employeeAdded.getRole()}</div>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="panel">
                            <div class="panel-block">
                                ID: ${employeeAdded.getId()}
                            </div>
                            <a class="panel-block" href="mailto:${employeeAdded.getEmail()}" target="_blank">
                                Email: ${employeeAdded.getEmail()}
                            </a>
                            ${generateSpecialPanel(employeeAdded)}
                        </div>
                    </div>
                </div>
            </div>`
}

module.exports = generateCard;