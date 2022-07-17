let KitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

let KitchenInputData;
let kitchenInputDataArray = [];

function setLocalStorage(){
    localStorage.setItem("kitchenInput" ,JSON.stringify(kitchenInputDataArray));
}

function getLocalStorage(){
    if(localStorage.getItem("kitchenInput")){
        kitchenInputDataArray = JSON.parse(localStorage.getItem("kitchenInput"));
        buildUI();
        
    }
}

function buildUI(){
    kitchenItemsList.textContent = '';
    kitchenInputDataArray.forEach((item) => {
         // Create DOM elements now
    let li = document.createElement("li");

    let spanEl = document.createElement('span');
    li.appendChild(spanEl);
    spanEl.innerText = item;
    
    li.style.cssText = 'animation-name: slideIn;'
    kitchenItemsList.appendChild(li);
    KitchenInput.value = '';
    KitchenInput.focus(); 
   
    // Create Trash button
    let trashBtn = document.createElement('i');
    trashBtn.classList.add("fas", "fa-trash");
    li.appendChild(trashBtn);

    // Create Edit button
    let editBtn = document.createElement('i');
    editBtn.classList.add('fas', 'fa-edit');
    li.appendChild(editBtn);
    });
    
   
}

// Step 2
// Add kitchen items
function addKitchenItems(){
   KitchenInputData = KitchenInput.value;

   kitchenInputDataArray.push(KitchenInputData);

   console.log(kitchenInputDataArray);

    // Set to local storage
   setLocalStorage();

    // Get from local storage
    getLocalStorage();
    
}

//Delete item from kitchen list
function deleteKitchenItem(event){
    if(event.target.classList[1] === 'fa-trash'){
        let item = event.target.parentElement;
        console.log(item);
        item.classList.add('slideOut');
        item.addEventListener('transitionend', function(){
            console.log("Animation has been completed");
            item.remove();
        })
        // item.remove();
    }
}

// Edit Kitchen item
function editKitechenItem(event){
    if(event.target.classList[1] === 'fa-edit'){
        let editedVlaue = prompt("Please add new text");
        let item = event.target.parentElement;
        let spanEl = item.querySelector('span');
        spanEl.innerText = editedVlaue;
    }
}

// Step 1
// Add an event listener to the button
addBtn.addEventListener('click', addKitchenItems);
kitchenItemsList.addEventListener('click', deleteKitchenItem);
kitchenItemsList.addEventListener('click', editKitechenItem);

getLocalStorage();