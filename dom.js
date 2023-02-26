
let btn=document.querySelector('.btn');
   btn.addEventListener('click',(e)=>{
      e.preventDefault();
      var full_name=document.getElementById('name').value;
        var email_id=document.getElementById('email').value;
      //   console.log(full_name)
      var myobj={
         name:`${full_name}`,
         email_id: `${email_id}`
      }
      var myobj_serialized=JSON.stringify(myobj)
      localStorage.setItem('user details', myobj_serialized);
      var myobj_deserialized=JSON.parse(localStorage.getItem('user details'))
      console.log(myobj_deserialized)
   
   })
    
   