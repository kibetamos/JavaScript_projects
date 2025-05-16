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

//delete function


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
console.log("added to local storage")

}
// ****** SETUP ITEMS **********
