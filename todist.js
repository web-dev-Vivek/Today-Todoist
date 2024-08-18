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









// var blur = document.getElementById('option1');
// var navback = document.getElementById('navbar');
// var mainback = document.getElementById('background');
// var centerDiv = document.getElementById('centerDiv');

// blur.addEventListener('click', function() {
//     // Add the blur effect to navback and mainback
//     navback.classList.add('blurred');
//     mainback.classList.add('blurred');

//     // Ensure centerDiv is not affected by the blur
//     centerDiv.classList.add('no-blur');
// });




var slide = document.getElementById('toggleButton');
var nav = document.getElementById('navbar');
var main = document.getElementById('background');
var left1 = document.getElementById('left1');
var left2 = document.getElementById('left2');

var isToggled = false; // Initial state

function toggleStyles() {
    if (!isToggled) {
        // Apply styles to slide and hide navbar
        nav.style.transform = 'translateX(-100%)'; // Move nav to the left
        setTimeout(function() {
            nav.style.display = 'none'; // Hide after transition
        }, 500);
        
        main.style.marginLeft = '0px';
        left1.style.paddingLeft = '39vw';
        left2.style.paddingLeft = '37vw';
        slide.style.position = 'absolute';
        slide.style.left = '0px';
    } else {
        // Revert styles to show navbar
        nav.style.display = ''; // Make navbar visible
        setTimeout(function() {
            nav.style.transform = 'translateX(0)'; // Slide navbar back to original position
        }, 10); // Trigger transition
        main.style.marginLeft = '';
        left1.style.paddingLeft = '29vw'; // Revert back to 29vw
        left2.style.paddingLeft = '';
        slide.style.position = '';
        slide.style.left = '';
    }

    // Toggle the state
    isToggled = !isToggled;
}

// Toggle styles on button click
slide.addEventListener('click', toggleStyles);

// Toggle styles on "M" key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'M' || event.key === 'm') {
        toggleStyles();
    }
});








    document.addEventListener('DOMContentLoaded', function() {
        const addIcon = document.getElementById('addIcon');
        const optionsDiv = document.getElementById('optionsDiv');
        const myProjectDiv = document.querySelector('.my_project');
        const option2 = document.getElementById('option2');
        const popup1 = document.getElementById('popup1');
        const closePopup1 = document.getElementById('closePopup1');

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
        option2.addEventListener('click', function() {
            popup1.style.display = 'flex';
            optionsDiv.classList.remove('show'); // Hide the options div after selecting an option
        });

        // Close the centered div when the "Close" button is clicked
        closePopup1.addEventListener('click', function() {
            popup1.style.display = 'none';
        });
    });












    document.addEventListener('click', function(event) {
    var div = document.getElementById('popup1');

    // Check if the clicked target is outside the div
    if (!div.contains(event.target)) {
        div.style.display = 'none';
        event.stopPropagation();
    }
});







    document.addEventListener('click', function(event) {
    var div = document.getElementById('centerDiv');

    // Check if the clicked target is outside the div
    if (!div.contains(event.target)) {
        div.style.display = 'none';
        event.stopPropagation();
    }
});









    var openPopupButton = document.getElementById('option2');
var closePopupButton = document.getElementById('closePopup1');
var popup = document.getElementById('popup1');
var overlay = document.getElementById('overlay');

// Open the popup
openPopupButton.addEventListener('click', function() {
    overlay.style.display = 'flex';
    popup.style.display = 'flex';
});

// Close the popup
closePopupButton.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

// Close the popup when clicking on the overlay
overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});




     var openPopupButton1 = document.getElementById('option1');
    var closePopupButton1 = document.getElementById('closePopup');
    var popup1 = document.getElementById('centerDiv');
    var overlay1 = document.getElementById('overlay');

    // Open the popup
    openPopupButton1.addEventListener('click', function() {
        overlay1.style.display = 'flex';
        popup1.style.display = 'flex';
    });

    // Close the popup
    closePopupButton1.addEventListener('click', function() {
        overlay1.style.display = 'none';
        popup1.style.display = 'none';
    });

    // Close the popup when clicking on the overlay
    overlay1.addEventListener('click', function() {
        overlay1.style.display = 'none';
        popup1.style.display = 'none';
    });







    document.getElementById("add-task1").addEventListener("click", function() {
    var div2 = document.getElementById("add-task-popup");
    div2.style.display = "block";
});






document.getElementById("add-task1").addEventListener("click", function() {
    var div2 = document.getElementById("add-task-popup");
    div2.style.display = "block";
});

document.addEventListener("click", function(event) {
    var div2 = document.getElementById("add-task-popup");
    var div1 = document.getElementById("add-task1");
    
    if (div2.style.display === "block" && !div2.contains(event.target) && !div1.contains(event.target)) {
        div2.style.display = "none";
    }
});








var close = document.getElementById("close");
var to_close = document.getElementById("add-task-popup");

close.addEventListener('click', function() {
    to_close.style.display = 'none';
});






// Show elm2 when elm1 is clicked
document.getElementById("add-task2").addEventListener("click", function(event) {
    var elm2 = document.getElementById("add-task-popup1");
    elm2.style.display = "block";
    event.stopPropagation(); // Prevent this event from triggering the document click listener
});

// Hide elm2 when clicking outside of it
document.addEventListener("click", function(event) {
    var elm2 = document.getElementById("add-task-popup1");

    // Check if elm2 is visible and the click happened outside of elm2
    if (elm2.style.display === "block" && !elm2.contains(event.target)) {
        elm2.style.display = "none";
    }
});

// Prevent elm2 from closing when clicking inside of it
document.getElementById("add-task-popup1").addEventListener("click", function(event) {
    event.stopPropagation();
});



var clean = document.getElementById('add-task2');
var item1 = document.getElementById('left1');
var item2 = document.getElementById('left2');

clean.addEventListener('click', function() {
    item1.style.display = 'none';
    item2.style.display = 'none';
});





 // Get the reference to the div and the document
        var targetDiv = document.getElementById('add-task-popup1');
        var shghht = document.getElementById('left1');
        var iuhiu = document.getElementById('left2');
        document.addEventListener('click', function(event) {
            // Check if the click happened outside the div
            if (!targetDiv.contains(event.target)) {
                shghht.style.display = 'block'
                iuhiu.style.display = 'block'
            }
        });

        // Optional: Prevent the style change when clicking inside the div
        targetDiv.addEventListener('click', function(event) {
            event.stopPropagation(); // Stops the click event from propagating to the document
        });





 // JavaScript to handle the functionality
        var inbox = document.getElementById('inbox');
        var second_background = document.getElementById('background1');
        
        inbox.addEventListener('click', function() {
            // Hide background2 and show background1
            document.getElementById('background').style.display = 'none';
            second_background.style.display = 'block';
        });
        
        var background = document.getElementById('background');
        var today = document.getElementById('today');
        
        today.addEventListener('click', function() {
            // Hide background1 and show background2
            document.getElementById('background1').style.display = 'none';
            background.style.display = 'block';
        });





