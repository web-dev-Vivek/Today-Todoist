document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const addIcon = document.getElementById('addIcon');
    const optionsDiv = document.getElementById('optionsDiv');
    const myProjectDiv = document.querySelector('.my_project');
    const option1 = document.getElementById('option1');
    const centerDiv = document.getElementById('centerDiv');
    const closePopup = document.getElementById('closePopup');

    // Function to show the options div
    addIcon.addEventListener('click', function(event) {
        optionsDiv.classList.add('show');
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });

    // Function to hide the options div when clicking outside
    document.addEventListener('click', function(event) {
        if (!myProjectDiv.contains(event.target) && optionsDiv.classList.contains('show')) {
            optionsDiv.classList.remove('show');
        }
    });

    // Prevent the click event inside the options div from hiding it
    optionsDiv.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Show the centered div when "Option 1" is clicked
    option1.addEventListener('click', function() {
        centerDiv.style.display = 'block';
        optionsDiv.classList.remove('show'); // Hide the options div after selecting an option
    });

    // Close the centered div when the "Close" button is clicked
    closePopup.addEventListener('click', function() {
        centerDiv.style.display = 'none';
    });
});
