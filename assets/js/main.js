// toggle account menu starts
let account = document.getElementById('account');
let userDropdown = document.querySelector('.userDropdown');

account.addEventListener('click', () => {
    userDropdown.classList.toggle('openUserDropdown');
    account.classList.toggle('hoverstate');
});

document.addEventListener('click', (e) => {
    if ((e.target.id !== "account") && (e.target.id !== "accountHamburger") && (e.target.id !== "accountHamburger1") && (e.target.id !== "accountHamburger2") && (e.target.id !== "accountHamburger3") && (e.target.id !== "usericon")) {
        userDropdown.classList.remove('openUserDropdown');
        account.classList.remove('hoverstate');
    }
});

// toggle account menu ends

// scroll filters starts
let filterBoxLeft = document.querySelector('.filterBoxLeft');
let filterBoxLeftIconBox = document.querySelector('.filterBoxLeftIconBox');
let prevFilter = document.querySelector('.prevFilter');
let nextFilter = document.querySelector('.nextFilter');
let leftScroll = filterBoxLeft.scrollLeft;
let scrollwidth = filterBoxLeft.scrollWidth;

nextFilter.addEventListener('click', () => {
    if ((filterBoxLeft.scrollLeft + filterBoxLeft.offsetWidth ) <= scrollwidth) {
        filterBoxLeft.scrollLeft += 200;
        prevFilter.style.display = 'flex';
    }
    
});

prevFilter.addEventListener('click', () => {
    if (filterBoxLeft.scrollLeft > 0) {
        filterBoxLeft.scrollLeft -= 200;
        nextFilter.style.display = 'flex';
    }
});

filterBoxLeft.addEventListener('scroll', (e)=>{
    if (filterBoxLeft.scrollLeft == 0) {
        prevFilter.style.display = 'none';
    }
    if ((filterBoxLeft.scrollLeft) > 0) {
        prevFilter.style.display = 'flex';
    }
    if ((filterBoxLeft.scrollLeft + filterBoxLeft.offsetWidth ) < scrollwidth) {
        nextFilter.style.display = 'flex';
    }
    if (filterBoxLeft.clientWidth + filterBoxLeft.scrollLeft >= filterBoxLeft.scrollWidth) {
        nextFilter.style.display = 'none';
    }
});


// scroll filters ends


// filters shadow starts here
document.addEventListener('scroll', ()=>{
    if (scrollY>=84 && window.innerWidth>=640) {
        filters.classList.add('shadowUnderFilters');
    }
    if (scrollY<84 && window.innerWidth>=640) {
        filters.classList.remove('shadowUnderFilters');
    }
   
});


// filters shadow ends here


// phone bottom navbar starts here
let mobileFooter = document.querySelector('.mobileFooter');
let phoneMapContainer = document.querySelector('.phoneMapContainer');
window.onscroll = function(e) {
    if (window.innerWidth<640) {
        if (this.oldScroll < this.scrollY) {
            mobileFooter.style.bottom = '-5pc';
            phoneMapContainer.style.bottom = '8vh';
        }
        else{
            mobileFooter.style.bottom = '0pc';
            phoneMapContainer.style.bottom = '-5pc';
        }
    }
    this.oldScroll = this.scrollY;
  }



// phone bottom navbar ends here

