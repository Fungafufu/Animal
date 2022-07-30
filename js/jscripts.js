/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var navhide = document.getElementById("myLinks");
    if (navhide.style.display === "block") {
      navhide.style.display = "none";
    } else {
      navhide.style.display = "block";
    }
  }


  /*function fadein(){
    document.getElementById("img").style.opacity = 0;
  }

  function fadeout(){
    document.getElementById("img").style.opacity = 1;
  }*/


  document.getElementById("btn1").addEventListener("click", function()
  {
    var box1 = document.getElementById("animal1");
    if(box1.style.display=="none")
    {
      box1.style.display="block";
    }
    else {
      box1.style.display="none";
    }
  })

  document.getElementById("btn2").addEventListener("click", function()
  {
    var box2 = document.getElementById("animal2");
    if(box2.style.display=="none")
    {
      box2.style.display="block";
    }
    else {
      box2.style.display="none";
    }
  })

  document.getElementById("btn3").addEventListener("click", function()
  {
    var box3 = document.getElementById("animal3");
    if(box3.style.display=="none")
    {
      box3.style.display="block";
    }
    else {
      box3.style.display="none";
    }
  })
