
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
    
   