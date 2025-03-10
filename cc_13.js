//Task 1: Creating the Base Structure in index.html

//Task 2: Adding Employee Cards Dynamically
function createEmployeeCard(name, position) {
    const employeeCard = document.createElement('div');
employeeCard.setAttribute(`class`, `employee-card`);

    const employeeContainer = document.getElementById(`.employeeContainer`);
employeeContainer.appendChild(employeeCard);

    const header = document.createElement(`h2`);
    header.textContent = name;

    const paragraph = document.createElement(`p`);
    paragraph.textContent = position;

    const removeButton = document.createElement(`button`);
    removeButton.textContent = `Remove`;
    removeButton.addEventListener(`click`, () => {
        employeeCard.remove();
});

employeeCard.appendChild(header);
employeeCard.appendChild(paragraph);
employeeCard.appendChild(removeButton);

//Task 4: Implementing Removal of Employee Cards with Event Bubbling
if (employeeContainer) {
    employeeContainer.addEventListener(`click`, (event) => {
        if (event.target.className === `employeeCard`) {
            console.log(`Button clicked`);
        }
        event.stopPropagation();
    });
};
};

    //Task 2: Test Cases
createEmployeeCard(`Mary Poppins`, `Umbrella Engineer`);
createEmployeeCard(`Curious George`, `Banana Specialist`);    
createEmployeeCard(`The Rock`, `Rock`); 

//Task 3: Converting NodeLists to Arrays for Bulk Updates
const employeeCards = document.querySelectorAll(`.employeeCard`);
const employeeCardsArray = Array.from(employeeCards);
    employeeCardsArray.forEach((card) => {
        card.style.border = `2px solid black`;
});

