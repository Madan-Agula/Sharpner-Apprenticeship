// public/deletePage.js
function deletePage() {
    const pageToDelete = document.getElementById('pageToDelete').value;
  
    fetch(`http://localhost:3000/${pageToDelete}`, { method: 'DELETE' })
      .then(response => response.text())
      .then(result => {
        document.getElementById('result').innerText = result;
      })
      .catch(error => console.error('Error deleting page:', error));
  }
  