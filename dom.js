
let btn=document.querySelector('.btn');
   btn.addEventListener('click',(e)=>{
      e.preventDefault();
      var full_name=document.getElementById('name').value;
        var email_id=document.getElementById('email').value;
      //   console.log(full_name)
      localStorage.setItem('full name', full_name);
      localStorage.setItem('emailid', email_id);
      // console.log(localStorage.getItem('emailid'))
   })
    
   