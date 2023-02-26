
let btn=document.querySelector('.btn');
var itemList = document.getElementById('items')
   btn.addEventListener('click',(e)=>{
      e.preventDefault();
      var full_name=document.getElementById('name').value;
      var email_id=document.getElementById('email').value;
      var phone_number=document.getElementById('number').value;
      //   console.log(full_name)
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(`${full_name},${email_id},${phone_number}`))
      var deleteBtn = document.createElement('button');
   
      // Add classes to del button
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
      // Append text node
      deleteBtn.appendChild(document.createTextNode('Delete'));
 
      // Append button to li
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
   
   })
   itemList.addEventListener('click', removeItem);
   // Delete event
   
  
   
   // Remove item
   function removeItem(e){
     if(e.target.classList.contains('delete')){
       if(confirm('Are You Sure?')){
         var li = e.target.parentElement;
         itemList.removeChild(li);
       }
     }
   }
   
  
   