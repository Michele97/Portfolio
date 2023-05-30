 function ShowN(){
        document.getElementById("descN").classList.remove("hide");
        document.getElementById("descN").classList.add("show");
        document.getElementById("boxMain").classList.add("opacity");
        document.getElementById("boxMain").classList.add("blur");
        document.getElementById("Vue").disable=true;
        document.getElementById("Next").disable=true;
        document.getElementById("Laravel").disable=true;
 }
 function ShowV(){
        document.getElementById("descV").classList.remove("hide");
        document.getElementById("descV").classList.add("show");
        document.getElementById("boxMain").classList.add("opacity");
        document.getElementById("boxMain").classList.add("blur");
        document.getElementById("Vue").disable=true;
        document.getElementById("Next").disable=true;
        document.getElementById("Laravel").disable=true;
 }
 function ShowL(){
        document.getElementById("descL").classList.remove("hide");
        document.getElementById("descL").classList.add("show");
        document.getElementById("boxMain").classList.add("opacity");
        document.getElementById("boxMain").classList.add("blur");
        document.getElementById("Vue").disable=true;
        document.getElementById("Next").disable=true;
        document.getElementById("Laravel").disable=true;
        
 }

 window.onclick = function(event) {
    
    if (!(event.target.matches('.imgbox'))  ) {

      var dropdowns = document.getElementsByClassName("desc");
      var i;

      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          openDropdown.classList.add('hide');
          document.getElementById("boxMain").classList.remove("opacity");
          document.getElementById("boxMain").classList.remove("blur");

        }
      }
    }
  }



