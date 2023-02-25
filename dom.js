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

 var item =document.querySelectorAll('li:nth-child(2)');
 item[0].style.color='green'

 var odd=document.querySelectorAll('li:nth-child(odd)');
 for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green'
 }