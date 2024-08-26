document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".user-list-table tbody tr").forEach(row => {
      row.addEventListener("click", function() {
          const userId = this.getAttribute("data-id");
          const accountType = this.getAttribute("data-accounttype");
          const username = this.getAttribute("data-username");
          const email = this.getAttribute("data-email");

          document.getElementById("userId").value = userId;
          document.getElementById("accountType").value = accountType;
          document.getElementById("username").value = username;
          document.getElementById("email").value = email;
      });
  });
});


