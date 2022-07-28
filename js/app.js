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
    listItem.innerHTML = `<a class="menu__link" href="#${Link}">${Name}</a>`;
    list.append(listItem);
}



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

function sectionSelected (el){
    sectionSelect = el.getBoundingClientRect() ;
    return(sectionSelect.top)
}

    function sectionActive (){
        
        for (i=0;i<sections.length;i++){

            if(sectionSelected(sections[i])){

                if(!sections[i].classList.contains("your-active-class")){

                    sections[i].classList.add("your-active-class");
            }
            else{
                sections[i].classList.remove("your-active-class");
            }          
        }       
    }
    
}    



/*
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
document.querySelector("html").style.scrollBehavior ="smooth";

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click
createList();
// Set sections as active
document.addEventListener("scroll",sectionActive);

