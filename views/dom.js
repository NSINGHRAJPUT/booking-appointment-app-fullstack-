var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', editItem);

window.addEventListener('load', () => {
  const response = axios.get("http://localhost:3000/booking/users/")
  response.then((response) => {
    response.data.map((user) => {
      createElement(user.Name, user.Number, user.Email)
    })
  })
    .catch((err) => console.log(err))
})
////////////// for creating dom element
function createElement(name, number, email) {
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(name));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(number));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(email));
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
}


// Add item to the list
function addItem(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var number = document.getElementById('number').value;
  var email = document.getElementById('email').value;
  myobj = {
    name: name,
    number: number,
    email: email
  }
  const response = axios.post('http://localhost:3000/booking/add-user/', myobj)
  response.then((res) => {
    createElement(res.data.Name, res.data.Number, res.data.Email)
  }).catch(err => console.log(err))
  document.getElementById('name').value = '';
  document.getElementById('number').value = '';
  document.getElementById('email').value = '';
}

//Remove item from the list
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      let x = li.textContent
      var num = `${x}`.match(/\d+/g);
      const response = axios.post('http://localhost:3000/booking/delete-user/', { Number: num[0] })
      response.then((res) => itemList.removeChild(li)).catch(err => console.log(err))

    }
  }
}

//edit item in the list
function editItem(e) {
  if (e.target.classList.contains('edit')) {
    let x = e.target.parentElement.textContent
    var num = `${x}`.match(/\d+/g);
    const response = axios.post("http://localhost:3000/booking/edit-user/", { Number: num[0] })
    response.then((res) => {
      document.getElementById('name').value = res.data.Name;
      document.getElementById('number').value = res.data.Number;
      document.getElementById('email').value = res.data.Email;
      localStorage.removeItem(num[0]);
      var li = e.target.parentElement;
      itemList.removeChild(li)
      const response = axios.post('http://localhost:3000/booking/delete-user/', { Number: num[0] })
      response.then((res) => console.log(res)).catch(err => console.log(err))
    }).catch(err => console.log(err))

  }
}

