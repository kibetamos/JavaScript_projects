// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option

let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

//submit form
form.addEventListener('submit', addItem)

clearBtn.addEventListener('click',clearItems)


// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    // console.log(grocery.value)
    const value = grocery.value
    const id = new Date().getTime().toString();
    // console.log(id);
    if(value && !editFlag){
        const element =document.createElement('article');
        //add class
        element.classList.add('grocery-item');
        //add id
        const attr = document.createAttribute('data-id');
        attr.value=id;
        element.setAttributeNode(attr);
        element.innerHTML=` <p class="title">${value}</p>
              <div class="btn-container">
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>

                 <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>`
              //pick the delete button

            const deleteBtn = element.querySelector('.delete-btn')
            const editBtn = element.querySelector('.edit-btn')

            deleteBtn.addEventListener('click',deleteItem);
            editBtn.addEventListener('click',editItem);
              //append child
              list.appendChild(element);
              displayAlert("Item added to the List", 'success');

              //show container
              container.classList.add("show-container")
              //add to local storage
              addToLocalStorage(id,value);
              //set back to default
              setBackToDefault()
console.log("add item")
    }else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert('value changed','success');
        editLocalStorage(editID,value);
        setBackToDefault();

console.log("edit")
    }else{
// console.log('Empty value');
displayAlert('Please Enter Value', 'danger')
    }
}

//display alert
function displayAlert(text, action){
alert.textContent = text;
alert.classList.add(`alert-${action}`);


//remove alert
setTimeout(function(){
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
}, 1000);
}
//clear items
function clearItems(){

    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        })
    }
    
container.classList.remove("show-container");
displayAlert('empty list', 'danger');
setBackToDefault();
}
//edit function
function editItem(){
    const element = e.currentTarget.parentElement.parentElement;
//set edit Item
editElement = e.currentTarget.parentElement.previousElementSibling;

//set form value
grocery.value= editElement.innerHTML;
editFlag = true;
    element = element.dataset.id;
    submitBtn.textContent = "edit";

    console.log("edit")
}
//delete function
function deleteItem(e){
    console.log("delete")
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length===0){
        container.classList.remove("show-container")
    }
    displayAlert('Item removed', 'danger');
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id);
}

//set back to default
function setBackToDefault(){
console.log("set back to default");
grocery.value = '';
editFlag = false;
editID = '';
submitBtn.textContent='submit';
}

// ****** LOCAL STOR{AGE **********
function addToLocalStorage(id, value){
    const grocery = {id:id, value:value}
    
console.log("added to local storage")

}

function removeFromLocalStorage(id){

}

function editLocalStorage(id, value){

}

localStorage.setItem('orange', JSON.stringify([]))
// ****** SETUP ITEMS **********
