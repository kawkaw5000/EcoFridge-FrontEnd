document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("add-btn");
  var closeModalBtn = document.getElementById("closeModalBtn");

  if (btn) {
      btn.onclick = function() {
          modal.style.display = "flex";
          setTimeout(function() {
              modal.classList.add("show");
          }, 10);
      };
  }

  if (closeModalBtn) {
      closeModalBtn.onclick = function() {
          modal.classList.remove("show"); 
          setTimeout(function() {
              modal.style.display = "none";
          }, 300);
      };
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.remove("show"); 
          setTimeout(function() {
              modal.style.display = "none"; 
          }, 300); 
      }
  };
});
