// Index.html --> JS
// Intro.html --> JS
function showNav()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.navigation').style.display = "block";
    // document.querySelector('.project_navigation').style.display = "block";
    setTimeout(() => {
        cross_icon.style.display = "block";
        
    }, 1000);
    hamburger_icon.style.display = "none";
}

function hideNav()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.navigation').style.display = "none";
    cross_icon.style.display = "none";
    hamburger_icon.style.display = "block";

}

// Services.html --> JS
function showNavServices()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.project_navigation').style.display = "block";
    setTimeout(() => {
        cross_icon.style.display = "block";
        
    }, 1000);
    hamburger_icon.style.display = "none";
}

function hideNavServices()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.project_navigation').style.display = "none";
    cross_icon.style.display = "none";
    hamburger_icon.style.display = "block";

}

// Contact.html --> JS
function showNavContact()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.contact_navigation').style.display = "block";
    setTimeout(() => {
        cross_icon.style.display = "block";
        
    }, 1000);
    hamburger_icon.style.display = "none";
}

function hideNavContact()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.contact_navigation').style.display = "none";
    cross_icon.style.display = "none";
    hamburger_icon.style.display = "block";

}

// Contact.html --> JS
function showNavBlog()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.blog_navigation').style.display = "block";
    setTimeout(() => {
        cross_icon.style.display = "block";
        
    }, 1000);
    hamburger_icon.style.display = "none";
}

function hideNavBlog()
{
    var hamburger_icon = document.getElementById('ham');
    var cross_icon = document.getElementById('cross');
    document.querySelector('.blog_navigation').style.display = "none";
    cross_icon.style.display = "none";
    hamburger_icon.style.display = "block";

}

//  this function is on intro page
function toggle_off()
{
    let toggle_on = document.getElementById('toggle_on');
    let toggle_off = document.getElementById('toggle_off');

    if(toggle_off.style.display = "block")
    {
        toggle_on.style.display = "block";
        toggle_off.style.display = "none";
    }
    
}
function toggle_on()
{
    let toggle_on = document.getElementById('toggle_on');
    let toggle_off = document.getElementById('toggle_off');

    if(toggle_on.style.display = "block")
    {
        toggle_off.style.display = "block";
        toggle_on.style.display = "none";
    }
    
}
// $("#toggle_off").click(()=>{
//     $("#toggle_on").toggle();
//     // $("#toggle_off").toggle();

// })


// Image Slider Code:

var prev_btn = document.querySelector(".prev");
var next_btn = document.querySelector(".next");
var slider = document.querySelector(".carousel").children;
var total_images = slider.length;
let index = 0;

prev_btn.addEventListener("click", ()=>{
    mainSliderFunction("prev");
})

next_btn.addEventListener("click", () => {
    mainSliderFunction("next");
})

function mainSliderFunction(direction)
{
    // Simple hai, current image sa utha ka next image pa la jain ga user ko.
    if(direction == "next")
    {
        index+=1;

        // likn agr already akhri image pe hai user tou usa utha ka dobara first image pe
        // la jain ga.
        if(index == total_images)
        {
            index = 0;
        }

    }
    else
    {
        // yani agr hm pehla hi image pe hai aur user prev button pa click krta hai tou usa
        // hm last image pe la jain ga.
        if(index == 0)
        {
            index = total_images - 1;

        }
        // Warna phr jo bhi current image ho gi, us sa pichli wali image pe la jain ga.
        else
        {
            index -=1;
        }
    }

    for(let i = 0; i < slider.length ; i++) {
        slider[i].classList.remove('slider_main');
      }

      slider[index].classList.add('slider_main');
}
