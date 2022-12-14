//Dom crash course part 1
/*
//Examine the document object //
/*
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.links);
console.log(document.images);
*/

//Change Text Content//
//1.headerTitle.textContent = 'Pro';
//2.headerTitle.innerText = 'Hello';//pays attention to styles
//3.headerTitle.innerHTML = "<h1>hello</h1>";    


//Element Selectors //
//1. GET ELEMENT BY ID
//let headerTitle = document.getElementById('header-title');
//let input = document.getElementById('input');
// console.log(document.getElementById('header-title'));
//console.log(headerTitle);

//Change Style
//headerTitle.style.border = 'solid 3px #000';
/*
const changeStyle = document.querySelector('#click');

//2. GET ELEMENTS BY CLASS NAME
let items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = ' Hello two';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'cyan';

//Loop through these arrays and change the items style
const colorCollection = ['blue', 'cyan', 'yellow', 'green'];
const textColor = ['white', 'black','black', 'white']
for(let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = colorCollection[i];
        items[i].style.color = textColor[i];
}

//3. GET ELEMENTS BY TAG NAME
let h1 = document.getElementsByTagName('h1');

//console.log(title);
//console.log(title[1]);
h1[0].textContent = 'Very Cool';
h1[0].style.fontWeight = 'bold';
h1[0].style.color = 'lime';

//QUERY SELECTOR
//we can us there everything like tag name, class name, id..
//selects the first match

let items2Header = document.querySelector('.title2');
items2Header.style.color = 'gray';

let addItemsHeader = document.querySelector('.title');
addItemsHeader.style.color = 'red';

const input = document.querySelector('input'); 
input.style.marginBottom = '15px';
input.style.border= 'solid black 3px';
input.value = 'Hello, this is styled form';

changeStyle.style.backgroundColor = 'lime'; 
changeStyle.style.color = 'blue';
changeStyle.style.border = 'solid 2px blue';

let body = document.querySelector('body');
body.style.backgroundColor = 'cyan';

//with query selector we can use any type of css selectors
let submit = document.querySelector("input[type='submit']");
submit.value = 'SEND';




//with query selector we can use any type of css selectors
let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'gray';

//  QUERY SELECTOR ALL
it's simply the same as querySelector but it's instead of selecting the
first match it's gonna select all of them as the name suggest


//grab and change all odd items
let odd = document.querySelectorAll('li:nth-child(odd)');

for(let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'lime';
}

//grab and change all even items
let even = document.querySelectorAll('li:nth-child(even)');

for (let a = 0; a < even.length; a++) {
    even[a].style.backgroundColor = 'cyan';
}
*//*
//TRAVERSING THE DOM
let itemList = document.querySelector('#items');

//parentNode
//console.log(itemList.parentNode);
//we can use it as a selector
itemList.parentNode.style.backgroundColor = 'blue';
itemList.parentNode.style.color = 'white';

//console.log(itemList.parentNode.parentNode);

//parentElement is the same thing as parentNode

// childNodes
//console.log(itemList.childNodes);
//lists child nodes but it's not recommended because of it puts line between as text

//children
//console.log(itemList.children);
//console.log(itemList[0])
itemList.children[1].style.backgroundColor = 'black';
itemList.children[1].style.color = 'green';

//first child (not recommended)
//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);

//last child
//console.log(itemList.lastChild);

//lastElementChild
//console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent = 'Life could be a dream';

//Siblings
/*
//next nextSibling (not recommended you can use nextElementSibling instead)
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
*/
/*
itemList.previousElementSibling.style.backgroundColor = 'cyan';
itemList.previousElementSibling.style.color = 'yellows';
*/


//Create elements methods and properties

//createElement//
/*
//create a div
const newDiv = document.createElement('div');


//we can add classes to our new element
newDiv.className = 'hello';

//We can add ID too
newDiv.id = 'hello2';

//Add attribute
newDiv.setAttribute('title', 'hello div');

//Create text node
const newDivText = document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);
//console.log(newDiv);

//insert to our html
const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

newDiv.style.fontSize  = '25px';
*/

//Events
///let button = document.getElementById('button');
//button.addEventListener('click', buttonClick);

//function buttonClick(event) {
  //console.log('Button Clicked!');
  //  document.getElementById('header-title').textContent = 'Changed!';
  //  document.querySelector('#main').style.backgroundColor = 'blue';
  //console.log(event);
  /*console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.className)*/
  //console.log(event.type);

  //console.log(event.clientX);
   //console.log(event.clientY);
   //console.log(event.offsetY);
  // console.log(event.offsetX);
  //console.log(event.ctrlKey);
 // console.log(event.altKey);
 // console.log(event.shiftKey);
//}


const box = document.getElementById('box');

//box.addEventListener('mouseout', runEvent);

document.body.addEventListener('mousemove', runEvent);
function runEvent(event) {
    //console.log('EVENT TYPE: ' +event.type);
    const output = document.getElementById('output');
   // output.innerHTML = '<h2>MouseX: ' +event.offsetX+ '</h2><h2>MouseY: '+event.offsetY+ '</h2>';
    document.body.style.backgroundColor = "rgba("+event.offsetX+", "+event.offsetY+", 150)";
}
//MAin Action
const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.querySelector('#filter');

//Filter Event
filter.addEventListener('keyup', filterItems);


//Delete event
itemList.addEventListener('click', removeItem);
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
      let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}


//Forms submit event
form.addEventListener('submit', addItem);
//Add Item
function addItem(e) {
    e.preventDefault();
    //get input value
    const newItem = document.getElementById('item').value;

    //create new li element
    const li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';
   
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button
    const deleteBtn = document.createElement('button');

    //Add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //Append Text Node
    deleteBtn.appendChild(document.createTextNode("X"));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append button to li
    itemList.appendChild(li);
}


//filter items

function filterItems(e) {
    // convert to lower case
    const text = e.target.value.toLowerCase();
    //Get li's
    const items = itemList.getElementsByTagName('li');
    //Convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }); 
}