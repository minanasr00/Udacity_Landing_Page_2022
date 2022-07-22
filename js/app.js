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
let sections = Array.from(document.querySelectorAll("section")) ;
let menu = document.getElementById("navbar__list") ;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItem(){
    for(let i=0;i<sections.length;i++){
        sectionName = sections[i].getAttribute("data-nav") ;
        sectionLink = sections[i].getAttribute("id") ;
        let listItem = document.createElement("li") ;
        listItem.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>` ;
        menu.appendChild(listItem) ;
    }
}

function sectionInView (el){
    sectionPostion = el.getBoundingClientRect() ;
    return(sectionPostion.top>=0)
}

    function sectionActive (){
        
        for (i=0;i<sections.length;i++){

            if(sectionInView(sections[i])){

                if(!sections[i].classList.contains("your-active-class")){

                    sections[i].classList.add("your-active-class");
            }
            else{
                sections[i].classList.remove("your-active-class");
            }          
        }       
    }
    
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
createListItem();
// Set sections as active
document.addEventListener("scroll",sectionActive);

