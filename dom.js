
let btn=document.querySelector('.btn');
var itemList = document.getElementById('items')
   btn.addEventListener('click',(e)=>{
      e.preventDefault();
      var full_name=document.getElementById('name').value;
      var email_id=document.getElementById('email').value;
      var phone_number=document.getElementById('number').value;
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(`${full_name},${email_id},${phone_number}`))
      // Create del button element
  var deleteBtn = document.createElement('button');
  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //add classes to edit button 
  editBtn.className ='btn btn-warning btn-sm edit'
  // Append text node
  deleteBtn.appendChild(document.createTextNode('Delete'));
  editBtn.appendChild(document.createTextNode('edit'));
  // Append button to li
  li.appendChild(editBtn)
  li.appendChild(deleteBtn);
  
      itemList.appendChild(li)
      var myobj={
         name:`${full_name}`,
         email_id: `${email_id}`, 
         number:`${phone_number}`
      }
      var myobj_serialized=JSON.stringify(myobj)
      localStorage.setItem(`${email_id}`, myobj_serialized);
      var myobj_deserialized=JSON.parse(localStorage.getItem(`${email_id}`))
      console.log(myobj_deserialized)
   
   
   itemList.addEventListener('click', removeItem);
   itemList.addEventListener('click', edititem)

   // Remove item
   function removeItem(e){
     if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
         var li = e.target.parentElement;
         itemList.removeChild(li);
       }
     }
   }
   
   // editing item

   function edititem(e){
      if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
         itemList.removeChild(li);
         console.log(myobj)
        localStorage.removeItem(email_id)
         document.getElementById('name').value=myobj.name
         document.getElementById('email').value=myobj.email_id
         document.getElementById('number').value=myobj.number

      }
   }
  
})