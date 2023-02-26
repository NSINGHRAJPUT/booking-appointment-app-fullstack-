// var items = document.getElementsByClassName('list-group-item');
//  items[2].style.backgroundColor='green';
//  for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
//     items[i].style.color='purple'
//  }
// var itemx=document.getElementsByClassName('item');
// console.log(itemx)
// itemx[0].style.color='yellow';



// var item=document.getElementsByTagName('li');
// console.log(item[4])
// item[4].style.backgroundColor='red'

//  var item =document.querySelectorAll('li:nth-child()');
//  item[0].style.color='green'

//  var odd=document.querySelectorAll('li:nth-child(odd)');
//  for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green'
//  }

//1.parentelement
var itemList =document.querySelector('#items');
itemList.parentElement.style.backgroundColor='darkgray';

//2.last element child
itemList.lastElementChild.style.color='red';

//3.lastchild
itemList.lastChild.style.fontWeight='bold';

//4.createchild
const node = document.createElement("li");
const textnode = document.createTextNode("item 999");
node.appendChild(textnode);
document.getElementById("items").appendChild(node);

//5.firstelement child
itemList.firstElementChild.style.color='purple';

//6.firstchild
itemList.firstChild.style.backgroundColor='gray';


//7.next sibling
itemList.nextSibling.style.fontWeight='bold';

//8.nextelement sibling
itemList.nextElementSibling.style.color='blue';

//9. previous sibling
itemList.previousSibling.style.backgroundColor='pink';

//10. previous element sibling
itemList.previousElementSibling.style.border='2px solid blue';

//11. create element
var newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';

//12. setAttribute
newDiv.setAttribute('title', 'hello div')

//13. create text node
var newDivText = document.createTextNode('hello world');

//14.append child
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');
var updateItem=document.querySelector('div .list-group');
var li=document.querySelector('div li')
container.insertBefore(newDiv,h1)
updateItem.insertBefore(newDiv,li)

