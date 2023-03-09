var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);
var myobj={};
var myobj1;
// Add item
function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('expense').value;
  var newItem1 = document.getElementById('description').value;
  var newItem2 = document.getElementById('details').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(newItem1));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(newItem2));
  li.appendChild(document.createTextNode(" "));
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-warning btn-sm edit';
  deleteBtn.appendChild(document.createTextNode('Delete'));
  editBtn.appendChild(document.createTextNode('Edit'))
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  itemList.appendChild(li);
  myobj={
    expense:`${newItem}`,
    Description:`${newItem1}`,
    Details:`${newItem2}`
  }
      var myobj_serialized=JSON.stringify(myobj)
      localStorage.setItem(`${newItem}`, myobj_serialized);
      var myobj_deserialized=JSON.parse(localStorage.getItem(`${newItem}`))
      myobj1=myobj_deserialized
      console.log(myobj1)
}
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function editItem(e){
    if(e.target.classList.contains('edit')){
        let x=e.target.parentElement.textContent
        var num = `${x}`.match(/\d+/g);
        let obj = JSON.parse(localStorage.getItem(`${num[0]}`))
        console.log(obj.expense)
        document.getElementById('expense').value=obj.expense;
        document.getElementById('description').value = obj.Description;
        document.getElementById('details').value =obj.Details;
        localStorage.removeItem(num[0]);
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}

