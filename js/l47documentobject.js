
// //=> Parent to Children

// var getli = document.querySelector('ul li');
// 	getli = document.querySelector('li.list-group-item');
// 	getli = document.querySelector('li.list-group-item:first-child');
// console.log(getli);

// let ch1;
// const getul = document.querySelector('ul.list-group');
// console.log(getul);

// ch1 = getul.children; //HTMLCollection(5)
// console.log(ch1);
// console.log(ch1[2]);
// // need to fix error
// // ch1[1] .textContent = "Have to go";
// // getul.children[3].innerText = "Have to cook";
// // getul.children[4].innerHTML = 'Have to read <a href="#" id="delete-item3" class="delete-item' 

// // need fix code error
// // ch1 = getul; //ul element
// // ch1 = getul.children; //HTMLCollection
// // ch1 = getul.children[0];
// // ch1 = getul.children[0].children;  //HTMLCollection


// // ch1 = getul.children[0].children[0];
// // ch1 = getul.children[0].children[0].id;
// // ch1 = getul.children[0].children[0].className;
// // ch1 = getul.children[0].children[0].classList; //DOMTokenlist
// // ch1 = getul.children[0].children[0].classlist[0];
// // ch1 = getul.children[0].children[0].href;
// // 	//   ul     li         a        	
// // ch1 = getul.children[0].children[0].children; //HTMLColection
// //     //   ul     li         a           i
// // ch1 = getul.children[0].children[0].children[0];

// // console.log(ch1);

// // need fix code error
// //=> Child Element Count
// ch1 = getul.children.length; //5
// ch1 = getul.childElementCount; //5

// ch1 = getul.children[0].childElementCount; //1
// ch1 = getul.children[0].children[0].childElementCount; //1

// console.log(ch1);

//8CE

let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;

val = document.URL;

val = document.links; //HTMLCollection
val = document.links[0]; 	
val = document.links[3]; //<a href="#" id="delete-item4" class="delete-item myitem" ><i class="fas fa-trash-alt"></i></a>
val = document.links[3].id; //delete-item4
val = document.links[5].id; //clearall

val = document.links[3];
val = document.links[3].className; //delete-item myitem
val = document.links[3].classList; //DOMTokenList 
val = document.links[3].classList[0]; //delete-item
val = document.links[3].classList[1]; //myitem

val = document.forms;
val = document.forms[0];
val = document.forms[0].id; //form
val = document.forms[0].className; // form
val = document.forms[0].classList; //DOMToken List
val = document.forms[0].classList[0]; //form
val = document.forms[0].action;
val = document.forms[0].method; //post

val = document.images;
val = document.images[0];
val = document.images[0].id;//loading
val = document.images[0].classNmae;
val = document.images[0].classList[0];
val = document.images[0].src; 
val = document.images[0].alt; //loader

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type; //text/javascript

// console.log(val);


// => Change Styling

document.getElementById("tasktitle").style.backgroundColor = "green";
document.getElementById("tasktitle").style.color = "#fff";
document.getElementById("tasktitle").style.padding = "5px" 

// =>Change Content
// document.getElementById("tasktitle").textContent = "My job";
// document.getElementById("tasktitle").innerText = "My Tasks";
// document.getElementById("tasktitle").innerHTML = "<span style='color: yellow'>My Todo</span>"; 


// =>Call by Class class Name

 const lis = document.getElementsByClassName("list-group-item");
 console.log(lis);
 console.log(lis[2]);

 // lis[2].style.color = "blue";
 // lis[2].textContent = "Have to Visit";
 // lis[2].innerText = "Have to cook";
 // lis[2].innerHTML = 'Have to Cook<a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

 // =>Call By tag Name (Element)
 const litags = document.getElementsByTagName("li");
 // console.log(litags); //HTMLCollection
 // console.log(litags[1]);

 // litags[1].style.color = "red";
 // litags[1].innerHTML = 'Have to Cook<a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

 // => Query Selector

 console.log(document.querySelector("#tasktitle"));
 console.log(document.querySelector(".card-title"));
 console.log(document.querySelector("h3"));

 console.log(document.querySelector("li")); //only first li
 console.log(document.querySelector(".list-group-item"));

 // document.querySelector('li').style.color = "blue";
 // document.querySelector('ul li').style.color = "violet";
 // document.querySelector('ul li:nth-child(odd)').style.backgroundColor = "gray";
 // document.querySelector('ul li:nth-child(even)').style.backgroundColor = "silver";
 // document.querySelector('ul li:last-child').style.backgroundColor = "green";
 // document.querySelector('ul li:last-of-type').style.backgroundColor = "orange";
 // document.querySelector('ul li:nth-of-type(4)').style.backgroundColor = "steelblue";


// => querySelectorAll

 console.log(document.querySelectorAll('#tasktitle'));
 console.log(document.querySelectorAll('#tasktitle')[0]);

 console.log(document.querySelectorAll('.card-title'));
 console.log(document.querySelectorAll('.card-title')[0]);

 console.log(document.querySelectorAll('li'));
 console.log(document.querySelectorAll('li')[2]);

 console.log(document.querySelectorAll('.list-group-item'));
 console.log(document.querySelectorAll('.list-group-item')[3]);


 const listitems = document.querySelector("ul").getElementsByTagName("li");
 // console.log(listitems);//HTMLCollection
 // console.log(typeof listitems); //object
 // console.log(listitems[1]);

 // const arritems = Array.from(listitems);
 // console.log(arritems);


 // arritems.forEach(function(arritem,idx){
 // 	console.log(arritem);
 // });

 const listitms = document.querySelectorAll("ul.list-group li.list-group-item");
 // console.log(listitms);//NodeList(5)
 // console.log(typeof listitms);
 // console.log(listitms[1]);


 // listitms.forEach(function(listitm,idx){
 // 	// console.log(listitm);

 // 	// listitm.innerText = "Hello World";
 // 	listitm.innerText = `${++idx} = HEllo World`;
 // });

 const lisodds = document.querySelectorAll("li:nth-child(odd)");
 // console.log(lisodds);
 const lisevens = document.querySelectorAll("li:nth-child(even");
 // console.log(lisevens);

// lisodds.forEach(function(lisodd,idx){
// 	lisodd.style.backgroundColor = "gray";
// });

// lisevens.forEach(function(liseven,idx){
// 	liseven.style.backgroundColor = "orange"; 
// });

// for(let i=0;i < lisevens.length;i++){
// 	console.log(i); // 0 1
// 	lisevens[i].style.backgroundColor = "silver";
// }

// => Parents to children
  var getli = document.querySelector("li");
  	  getli = document.querySelector("li.list-group-item");
  	  getli = document.querySelector("li.list-group-item:first-child");

  	  console.log(getli);

  	 
let chl;

const getul = document.querySelector("ul.list-group");
console.log(getul);

chl = getul.children; 
console.log(chl);//HTMLCollection
// console.log(chl[2]);

// chl[1].textContent = "Have to Cook";
// getul.children[3].innerText = "Have to Cook";
// getul.children[4].innerHTML = `Have to Read <a href="#" id="delete-item5" class="delete-item"><i class="fas fa-trash-alt"></i></a>`

// Parent to children to children

 chl = getul; //ul element
 chl = getul.children; //HTMLCollection
 chl = getul.children[0];
 chl = getul.children[0].children;  //HTMLCollection


 chl = getul.children[0].children[0];
 chl = getul.children[0].children[0].id;
 chl = getul.children[0].children[0].className;
 chl = getul.children[0].children[0].classList; //DOMTokenlist
 chl = getul.children[0].children[0].classList[0];
 chl = getul.children[0].children[0].href;
 	//   ul     li         a        	
 chl = getul.children[0].children[0].children; //HTMLColection
     //   ul     li         a           i
 chl = getul.children[0].children[0].children[0]; 		

 console.log(chl);


// =>Child Element Count
 chl = getul.children.length;
 chl = getul.childElementCount;

 chl = getul.children[0].childElementCount;//1
 chl - getul.children[0].children[0].childElementCount; //1
 console.log(chl);

 // =>Children To Parent Element

 const getfirstli = document.querySelector("li.list-group-item:first-child");
 console.log(getfirstli);

 let getparent = getfirstli.parentElement;

 	 getparent = getfirstli.parentElement.parentElement;

 	 getparent = getfirstli.parentElement.parentElement.parentElement;

 console.log(getparent);


// =>Next Element Sibling

let getsibling = getfirstli;
	getsibling = getfirstli.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
					// li1          li2                 li3                 li4              li5
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(getsibling);

//=> Previous Element Sibling
				 // li1          li2                   li2                 li3
getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(getsibling);

// => Create Element

const newli = document.createElement('li');

//Add ID
newli.id = "new-list";

//Add Class

newli.className = "list-group-item";

newli.className = "list-group-item delete-me";
newli.className = "list-group-item delete-me delete-i";


newli.classList.add("delete-u");
newli.classList.add("delete-you");
newli.classList.add("delete-we","delete-your","delete-us");

//Add Attribute
// setAttribute(attrname,value);
newli.setAttribute('title',"newitem");

//Add Text

// newli.textContent = "hay";
// newli.innerText = "hi";
// newli.innerHTML = `List Item 6<a href="#" id="delete-item1" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;


newli.appendChild(document.createTextNode("Hello World"));

const newlink = document.createElement("a");
newlink.href = "#";
newlink.id = "delete-item6"
// newlink.className = 'delete-item';
newlink.classList.add('delete-item');

const newitalic = document.createElement('i');
newitalic.classList.add("fas","fa-trash-alt");

newlink.appendChild(newitalic);
console.log(newlink);

newli.appendChild(newlink);

console.log(newli);

document.querySelector('ul.list-group').appendChild(newli);

// =>Replace Element
// replaceChild(new,old);

const newtitleh2 = document.createElement('h2');
newtitleh2.id = "tasktitle";

const newcaption = document.createTextNode("All My List");
newtitleh2.appendChild(newcaption);


// console.log(newtitleh2);

const oldtitleh4 = document.getElementById("tasktitle");
// console.log(oldtitleh4);

const getcardfooter = document.querySelector(".card-footer");
getcardfooter.replaceChild(newtitleh2,oldtitleh4);


// => Remove Element (self)
const getlis = document.querySelectorAll('li'); //Node List
// console.log(getlis);
// console.log(getlis[0]);


// getlis[0].remove();
// getlis[1].remove();


console.log(getlis); //6

// => Remove Child Element 

const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// getfirstul.remove();
// console.log(getfirstul.children[0]);

// getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getfirstul.children[4]);

// getfirstul.removeChild(getfirstul.children[1]);


// =>Attribute

const firstli = document.querySelector('li');
console.log(firstli);
const firstlichild = firstli.children[0];
// console.log(firstlichild.id);
// console.log(firstlichild.href);
// console.log(firstlichild);
console.log(firstlichild.getAttribute("htef"));//#
console.log(firstlichild.getAttribute("id"));//#

console.log(firstlichild.title); //iamtitle
console.log(firstlichild.altl); //undefined
console.log(firstlichild.getAttribute("alt"));

console.log(firstlichild.href); // https://google.com
console.log(firstlichild.getAttribute('href')); //https://google.com

let hasatt = firstlichild.hasAttribute('href');
console.log(hasatt); //true

hasatt = firstlichild.hasAttribute('hay');
console.log(hasatt); //false


// 13AT
// const firstchild = document.querySelector("li");

firstlichild.classList.add("delete-myself");
firstlichild.classList.add("delete-ourserve");

console.log(firstlichild.classList);



if(firstlichild.className === "delete-item delete-myself delete-ourserve"){
	console.log("Yes");
}else{
	console.log("No");
}

if(firstlichild.classList.contains("delete-myself")){
		console.log("Yes");
}else{
	console.log("No");
}

// => addEventListener(eventtype,callbackfunction)

// const clearbtn = document.querySelector(".clear-tasks");

// clearbtn.addEventListener('click',function(e){
	// console.log("i am working");

	// console.log(e);
	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList);

// 	console.log(this);
// 	console.log(this.id);
// 	e.preventDefault();
// });

// method 2

function myclick(e){
	// console.log("hay");

	e.preventDefault();
	// console.log(e.target);
	// console.log(this);
	// console.log(this.id);

		// e.target.innerText = "finished";
	// this.innerText = "Done"; 

// Coordinate Event - relative to the window

console.log(e);
const clientx = e.clientX;
const clienty = e.clientY;
console.log(clientx, clienty);

// Coordinate Event - relative to the element

const offsetx = e.offsetX;
const offsety = e.offsetY;
console.log(offsetx, offsety);


}

// clearbtn.addEventListener('click',myclick);

// 14VD

// Mouse Event (Pointer Event)

const clbtn = document.querySelector('.clear-tasks');

//single click
// clbtn.addEventListener('click',mouseeventtype);

//Double Click
// clbtn.addEventListener('dblclick',mouseeventtype);

// mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

//mouseup
// clbtn.addEventListener('mouseup',mouseeventtype);

const card = document.querySelector('.card');

//mouse enter

// card.addEventListener('mouseenter',mouseeventtype);

//mouseover
// card.addEventListener('mouseover',mouseeventtype);   


// mouseleave
// card.addEventListener('mouseleave',mouseeventtype);

// mouseout
// card.addEventListener('mouseout',mouseeventtype);

//mousemove
// card.addEventListener('mousemove',mouseeventtype);

const heading2 = document.querySelector('h2');





function mouseeventtype(e){
	// console.log('i am working');

	console.log(`Event type = ${e.type}`);

	e.preventDefault();

	// heading2.textContent = `MouseX : ${e.clientX} MouseY : ${e.clientY}`;
	heading2.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;


	// document.body.style.backgroundColor = `rgba(${e.clientX},${e.clientY},${e.clientX},0.7)`;

	document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},0.7)`;
}


//submit

// const getform = document.querySelector('form');
// getform.addEventListener('submit',function(e){
// 	console.log(`Event type = ${e.type}`)

// 	e.preventDefault();
// });

// =>Input Event (Keyboard Event)
// const getinput = document.querySelector('#task');

//keydown
// getinput.addEventListener('keydown',inputeventtype);

//keypress
// getinput.addEventListener('keypress',inputeventtype);

//keyup
// getinput.addEventListener('keyup',inputeventtype);

//input
// getinput.addEventListener('input',inputeventtype);

//focus
// getinput.addEventListener('focus',inputeventtype);

//blur
// getinput.addEventListener('blur',inputeventtype);

//cut(ctrl+X)
// getinput.addEventListener('cut',inputeventtype);

//paste(ctrl+V)
// getinput.addEventListener('paste',inputeventtype);




// function inputeventtype(e){
	// console.log(e.target);
	// console.log(this);
	// console.log(e.target.value);
	// console.log(this.value);
	// console.log(getinput.value);

	// console.log(`Event Type = ${getinput.value}`);
// }


// =>Event Bubbling 
 // document.querySelector('.card-title').addEventListener('click',function(){
 // 	console.log('i am card-title');
 // });

// document.querySelector('.card-header').addEventListener('click',function(){
// 	console.log('i am card-header');
// });

//=>Event Delegation

const getdeleteitem = document.querySelector('.delete-item');

getdeleteitem.addEventListener('click',function(e){
	// console.log('i am delete item');

	// console.log(e.target);  //i tag
	// console.log(this);         //a tag

 e.preventDefault();
});

// document.body.addEventListener('click',eventdeleg);

// function eventdeleg(e){

	// console.log(e.target);

	// console.log(e.target.className);


	//i
	// if(e.target.className === "fas fa-trash-alt"){
	// 	console.log('i am working');
	// }
	// if(e.target.parentElement.className === "delete-item"){
	// 	console.log('i am working');
	// }

	// if(e.target.parentElement.classList.contains('delete-item')){
	// 	console.log('i am working');
	// }

		// if(e.target.parentElement.classList.contains('delete-item')){
		// console.log('i am working');

		//i
		// e.target.remoe()

		//i             a
	 // e.target.parentElement.remove();

		//i             a          li
		// e.target.parentElement.parentElement.remove();	
	// }



	// e.prevetDefault();
// }


	document.querySelector("form").addEventListener('click',function(e){
		console.log("I am working");
		e.preventDefault();
		const getnewtask = document.getElementById("task").value;
		// console.log(getnewtask);

		let alltasks;

		if(localStorage.getItem("mytasks") === null ){
			alltasks = [];
			console.log("No Value Yet");
		}else{
			console.log("value already exits");
			alltasks = JSON.parse(localStorage.getItem('mytasks'));
			console.log(alltasks);
			console.log(typeof alltasks);

		}

		alltasks.push(getnewtask);

		localStorage.setItem('mytasks',JSON.stringify(alltasks));

		console.log(alltasks);
	})


// console.log(localStorage.getItem('mytasks'));
// console.log(typeof localStorage.getItem('mytasks'));

console.log(JSON.parse(localStorage.getItem('mytasks')));
console.log(typeof JSON.parse(localStorage.getItem('mytasks')));





