/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          var transAnswer = document.getElementById("answer1");
          if (dropdowns == "Today") {
            transAnswer.innerHTML = "<p>Today</p>";
          }else{
            openDropdown.classList.remove('show');
          }
        }  
      }
    }
  }
  var transDrop = document.getElementById("show");
        var transAnswer = document.getElementById("answer1");

        transDrop.onchange = function() {
        var selectedValue = transDrop.options[transDrop.selectedIndex].value;
      
        if (selectedValue === "Today") {
        transAnswer.innerHTML = "<p>Today</p>";
      }
    }


  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("drop");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.from')) {
      var dropdowns2 = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns2.length; i++) {
        var openDropdown2 = dropdowns2[i];
        if (openDropdown2.classList.contains('drop')) {
          openDropdown2.classList.remove('drop');
        }
      }
    }
  }

  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("go");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.to')) {
      var dropdowns3 = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns3.length; i++) {
        var openDropdown3 = dropdowns3[i];
        if (openDropdown3.classList.contains('go')) {
          openDropdown3.classList.remove('go');
        }
      }
    }
  }