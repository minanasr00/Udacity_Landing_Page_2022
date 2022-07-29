/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let list = document.getElementById("navbar__list") ;
let sections = document.querySelectorAll("section") ;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createList(){
    for(let i=0;i<sections.length;i++){
        Link = sections[i].getAttribute("id") ;
        Name = sections[i].getAttribute("id") ;
        insertSection();
    }
}

function insertSection() {
    listItem = document.createElement("li");
    listItem.classList.add("aaa")
    listItem.innerHTML = `<a class="menu__link" href="#${Link}">${Name}</a>`;
    list.append(listItem);
}


// build the nav
createList();


//scroll to top button
let scrollBtn = document.getElementById("toTop");

window.onscroll = function() {
    if (window.scrollY<2000){
        scrollBtn.style.display = "none";
    }
    else{
        scrollBtn.style.display = "block";
    }
}

scrollBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
}


//hiding the navbar list
let head = document.querySelector(".page__header");
let hideHeader;
document.onscroll = function(){ 
head.style.display = "block"
clearTimeout(hideHeader)
hideHeader = setTimeout(() => {
    head.style.display = "none";
}, 2500);
    if(window.scrollY > 1000){
        toTop.style.display = "block";
    }
    else{
        toTop.style.display = "none";
        }
    
};


//getting section boundries
function sectionSelected (el){
    return Math.floor(el.getBoundingClientRect().top); 
} 

//set active section
    function sectionActive (){
        
        for (i=0;i<sections.length;i++){
            if(sectionSelected(sections[i])<200 && sectionSelected(sections[i])>=-200){
                
                sections[i].classList.add("your-active-class");
                
                
            }
            else{

                sections[i].classList.remove("your-active-class");

            }           
            
    }
}    

//implement active section by scrolling 
window.addEventListener("scroll",sectionActive);




/*
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// Add class 'active' to section when near top of viewport




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// selects all anchors with class='menu__link'
function Scroll() {
    document.querySelectorAll(".menu__link").forEach((A) => {
        
        addEvent(A);
    });
}

// Scroll to anchor ID using scrollTO event
function addEvent(A) {
    A.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(A.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
}

//calling function to active the smooth scroll
Scroll();