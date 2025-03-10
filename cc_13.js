//Task 1: Creating the Base Structure in index.html

//Task 2: Adding Employee Cards Dynamically
function createEmployeeCard(name, position) {
    const employeeCard = document.createElement('div');
employeeCard.setAttribute(`class`, `employee-card`); //created this function to add class to employee card

    const employeeContainer = document.getElementById("employeeContainer"); //container for employee cards

    const header = document.createElement(`h2`);
    header.textContent = name;

    const paragraph = document.createElement(`p`);
    paragraph.textContent = position;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit"; //added this
    
    const removeButton = document.createElement(`button`);
    removeButton.textContent = `Remove`; //button will appear to remove stuff
    removeButton.addEventListener(`click`, (event) => {
        event.stopPropagation();
        employeeCard.remove();
    });

    employeeCard.appendChild(header);
    employeeCard.appendChild(paragraph);
    employeeCard.appendChild(editButton);
    employeeCard.appendChild(removeButton);
    employeeContainer.appendChild(employeeCard);
} //created this function to add class to employee card
 
//Task 5: Inline Editing of Employee Details
const editButton = document.createElement("button");
editButton.addEventListener("click", () => {
    const nameInput = document.createElement("input");
    nameInput.value = header.textContent;

    const positionInput = document.createElement("input");
    positionInput.value = paragraph.textContent;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    employeeCard.innerHTML = "";
    employeeCard.appendChild(nameInput);
    employeeCard.appendChild(positionInput);
    employeeCard.appendChild(saveButton);

    saveButton.addEventListener("click", () => {
        header.textContent = nameInput.value;
        paragraph.textContent = positionInput.value;

        employeeCard.innerHTML = "";
        employeeCard.appendChild(header);
        employeeCard.appendChild(paragraph);
        employeeCard.appendChild(editButton);
        employeeCard.appendChild(removeButton);

    });
});

//Task 4: Implementing Removal of Employee Cards with Event Bubbling
document.getElementById("employeeContainer").addEventListener("click", (event) => {
    if (event.target.classList.contains("employee-card")) {
        console.log("Employee card clicked!");
    }
});

    //Task 2: Test Cases
createEmployeeCard(`Mary Poppins`, `Umbrella Engineer`); 
createEmployeeCard(`Curious George`, `Banana Specialist`);    
createEmployeeCard(`The Rock`, `Rock`); 

//Task 3: Converting NodeLists to Arrays for Bulk Updates
const employeeCards = document.querySelectorAll(`.employee-card`);
const employeeCardsArray = Array.from(employeeCards);
    employeeCardsArray.forEach((card) => {
        card.style.border = `2px solid black`;
});
