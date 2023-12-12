    // Scroll to MainPAge on Refresh

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("header").scrollIntoView({ behavior: 'smooth' });

    const toggleButton = document.getElementById("toggleButton");
    const otherSection = document.getElementById("otherSection");

    toggleButton.addEventListener("click", function () {
        otherSection.classList.toggle("d-none");
    });
});


// Bar Graph

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("trigger").addEventListener("click", function () {
      let duration = 0;
      let elements = document.querySelectorAll(".fill");
      
      elements.forEach(function (element) {
        duration = 1 + Math.floor(Math.random() * 20) / 10;
        element.style.animation = `animate-positive ${duration}s`;
        element.style.opacity = "1";
      });
    });
  
    document.getElementById("reset").addEventListener("click", function () {
      document.querySelectorAll(".fill").forEach(function (element) {
        element.style.animation = "";
        element.style.opacity = "0";
      });
    });
});
  

//Side Bar

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("openMenu").addEventListener("click", function(){
        sideMenu.style.right = "0";
    });
    document.getElementById("closeMenu").addEventListener("click", function(){
        sideMenu.style.right = "-200px";
    });

});


// For right animation of About section //

document.addEventListener("DOMContentLoaded", function() {

    var isRightAnimVisible = false;

    function handleButtonClick() {
        var rightAnimContainer = document.getElementById("rightAnimContainer");
    
        if (!isRightAnimVisible) {
            rightAnimContainer.classList.add("animate-right");
    
            document.getElementById("trigger").removeEventListener("click", handleButtonClick);
    
            isRightAnimVisible = true;
        }
    }
    
    document.getElementById("trigger").addEventListener("click", handleButtonClick);
    
    document.getElementById("rightAnimContainer").addEventListener("animationend", function() {
        if (!isRightAnimVisible) {
            this.classList.remove("animate-right");
        }
    });
    
    

});

// For left animation of About section //

document.addEventListener("DOMContentLoaded", function() {

    var isLeftAnimVisible = false;

    function handleButtonClick() {
        var leftAnimContainer = document.getElementById("leftAnimContainer");
    
        if (!isLeftAnimVisible) {
            leftAnimContainer.classList.add("animate-left");
    
            document.getElementById("trigger").removeEventListener("click", handleButtonClick);
    
            isLeftAnimVisible = true;
        }
    }
    
    document.getElementById("trigger").addEventListener("click", handleButtonClick);
    
    document.getElementById("leftAnimContainer").addEventListener("animationend", function() {
        if (!isLeftAnimVisible) {
            this.classList.remove("animate-left");
        }
    });
    
    

});