function myFunction() {
    var x = document.getElementById( "myTopnav");
    if (x.className === "customLinks") {
      x.className += " responsive";
      document.getElementById("closeicon").style.display = "block" ;
      document.getElementById("openicon").style.display = "none" ;
      document.getElementById("mobile").style.display = "none" ;
      document.getElementById("mockup").style.filter = "brightness(50%)" ;
    } else {
      x.className = "customLinks";
      document.getElementById("openicon").style.display = "block" ;
      document.getElementById("closeicon").style.display = "none" ;
      document.getElementById("mobile").style.display = "block" ;
      document.getElementById("mockup").style.filter = "brightness(100%)" ;
    }
  }
