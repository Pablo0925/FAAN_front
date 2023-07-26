

  
const tabs = document.querySelectorAll('.tabs a');

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    // Remove the active class from all tabs
    tabs.forEach((tab) => tab.classList.remove('active'));

    // Add the active class to the clicked tab
    event.target.classList.add('active');
  });
});
