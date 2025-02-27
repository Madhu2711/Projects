let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');
const quotes=[{quote:'“So many books, so little time.”',
    person:'Frank Zappa'
},{quote:'“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
    person:'Albert Einstein'
},{quote:'“A room without books is like a body without a soul.”',
    person:'Marcus Tullius Cicero'
},{quote:'“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
    person:'Bernard M. Baruch'
},{quote:'“You only live once, but if you do it right, once is enough.”',
    person:'Mae West'
}];
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})