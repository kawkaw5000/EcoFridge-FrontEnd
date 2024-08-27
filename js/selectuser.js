document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.blank-profile-container').style.display = 'block';
  document.querySelector('.selected-profile-container').style.display = 'none';
  document.querySelector('.edit-profile-container').style.display = 'none';

  document.querySelectorAll(".user-list-table tbody tr").forEach(row => {
      row.addEventListener("click", function() {
          showUserDetails(row);
      });
  });
});

function showUserDetails(row) {

  document.querySelector('.blank-profile-container').style.display = 'none';
  document.querySelector('.edit-profile-container').style.display = 'none';
  document.querySelector('.selected-profile-container').style.display = 'block';
 
  document.getElementById('userId').value = row.dataset.id;
  document.getElementById('accountType').value = row.dataset.accounttype;
  document.getElementById('username').value = row.dataset.username;
  document.getElementById('email').value = row.dataset.email;
}

function showEditUserDetails(row) {
  document.querySelector('.blank-profile-container').style.display = 'none';
  document.querySelector('.selected-profile-container').style.display = 'none';
  document.querySelector('.edit-profile-container').style.display = 'block';
  document.getElementById('editUserId').value = row.dataset.id;
  document.getElementById('editAccountType').value = row.dataset.accounttype;
  document.getElementById('editUsername').value = row.dataset.username;
  document.getElementById('editEmail').value = row.dataset.email;
}

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(event) {
      if (this.textContent === 'Edit') {
          event.stopPropagation();

          const selectedRow = this.closest('tr');
          showEditUserDetails(selectedRow);
          
          const dropdownContent = this.closest('.dropdown-content');
          dropdownContent.classList.remove('show');
      }
  });
});
