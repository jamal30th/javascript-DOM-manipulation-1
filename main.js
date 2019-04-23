// let items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
 // items[1].textContent = 'Hello 2';
// items[1].style.background = 'red'
// for (let i = 0; i < items.length; i++) {
//     items[i].style.background=('#f4f4f4');
    
// }
// var li = document.getElementsByTagName('li');
// for (let i = 0; i < li.length; i++) {
//    li[i].style.backgroundColor='#f4f4f4'
    
// }
// var header = document.querySelector('#mainheader');
// header.style.borderBottom = '4px solid #ccc';

// var input = document.querySelectorAll('input');    
// input.value = ' Hello World'
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green'
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color= 'purple'
// var titles = document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent = 'Hello'
// titles[1].textContent ='Hello'
var odd = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    
}
var even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = '#ccc';
    
}