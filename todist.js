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








      var x1 = document.getElementById('serch1');
var x2 = document.getElementById('Search-popup');

// Show x2 when x1 is clicked
x1.addEventListener('click', function() {
    x2.style.display = 'block';
});

// Hide x2 when clicking outside of it
document.addEventListener('click', function(event) {
    if (!x2.contains(event.target) && event.target !== x1) {
        x2.style.display = 'none';
    }
});










function addTask(inputId, taskListId, elementsToHide) {
  const taskInput = document.getElementById(inputId);
  const taskList = document.getElementById(taskListId);

  // Create a new task div
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-item');
  taskDiv.style.display = 'flex';
  taskDiv.style.alignItems = 'center';

  // Create an image element for the circle
  const circleImage = document.createElement('img');
  circleImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADy8vL7+/u6urrp6enh4eHw8PDDw8Ozs7O/v79jY2PHx8d3d3fm5uaFhYXR0dHb29sxMTGWlpZubm4aGhpPT09aWloWFhYODg6bm5vOzs4jIyOLi4uRkZF6eno7OzsuLi6lpaVERERQUFBoaGhAQEAoKCiioqKC/3WOAAAKTUlEQVR4nN1d6WLyKhCtUaNxj1vVT6vW2vb9n/A29VqVcyAkgQCeny4JE8IsZ4bh5cU2mlHaTWbj/Xx5OG5X60ZjvVpMl/3heJN008j67e0i7s7Ox4Ya0/mmG7seaBl0um/LHNnucdonI9dDLoCoNVwUkO6K1Txpux66Dv6NDyWku2I7/udaACWa3WEF6a6Y95quBZFgMDcg3gXnrmthEPHYmHgXjP1SsK2TYfkynFquxboi2lgQ74KZDx5Be29Nvgxj1zLGfavyZdi7NJLts3X5Mgw7juSL7L6f9xg7sZD29AvDd+3y9WqV7weLQa3ytYvEDY31dLmfvfcmaRqP2lGnPYrTf633t+HpWEjGfo1qdaY9qtM4mSgG1mwP3odT7au91yRfutUaztcw0XW84mR41LrmoZYgcqczlHPhUK+TaJke+xon/sodxNfbpOTFJ7v8q58sG8f33BHsqsUEo1kuPWDVIX/NufnZhEqf5HkSQwM34UjXyhuvv42p80StX4+WXNVEeVfD0dxAHXFaMf/KIH5ZVrnIkSqXxMz4/ZRL0IJ8GWKV/ZgbvlmkUOMHewRg/CG/7afReCOW32htl00ZyB2orUE/dSIX0MJ6EKAwwcbouK70Fq91MAyRfDmmZu4gtxI9MzfIhfwRG1EBUgH7NVIL0myBARGlAibVr10AA9kwKhuqluTCn3XzX02ZQa4oouzRvZkZdiF8S8ZSSd3IzISbJJ9sNBUC/5RfceuKhe5IQo7Spr/Dr/dqctAFwU3jV9nL8Wh7b3LEhfFGx/RR7mLc692YHXFhcCeu1GPnXEK9VpCBs+0lqFRu6X3Ir3MLVli983jJTqRbFNxqFHVBVv4KKBHxUOwa1EXyRUCJiIW0DVVYPqzBK+haLDBAugi9qf34BdWo+r4No51c20ER7DVb6v6ZMaNuPRkGlgPTtIpsGbv0RWVg2lAvJiDZia3lwZYDIRpPOv9js+9nZWu73HvK9Gi9ZRD6YDYjX5+SCl8XlIUeyPt2zvsPcbi13m1HIDm4HM+rWWre3YHQEFP1P8i0++SsIQjbqQxhiXYynaczDVL+qfo5IXp8rZu/gqwrRT6MWApfDcUN5D2Vaw70g/o1DrUscNQ72U8JAeyqOrcIiPKQTSKWVNZft1oGWCo55j/EKfTT4UZgrMAnEfWu/2rmAgz4aTg7gp9ph8zO8ak1iRjZG6oDqAEYtDObCD8KwVJcgUoSf4PMTjhTyLQkUoMQF/pIzcgBZh9iPnTYQppCNoliwRRkHsNRpBdAtlN03eARhGILr/gHEuR8f3QzzgqAKobHjCJsUq5re4o5AMP0ELtjGOl74ItQywDFf/YK/u0BqvvuGSZ4Sf1JhuoDXLf711T8buFsmFUA9T+3r0CT+styqwA2/aZNIazwq5+BLsAvu4X6R+GbHNrYW4gm8c+oA5VjvwDfDoCwuWYFwVaG5XTfAO73leAHW+F0mFUgCnK1FyJV5V9Vgi5Eo7++fAzLsK5tFOYBDH+bf+xzwlANSCdeJku0hgeng6wG0V5cwmAxUyyhxIOAOFsXpuJ5liFZcdmH4Ov4WTyjByDus70YEBu6HmUliMJkdJPo6oTFk4oQye+spFLM3UsTqEFAVDWZVyMqWL8qZYtC9LEPhMAJ1e2+QKQyfvy2SJQwXI8mA3g1ERiLMCmaG8QwYgTG4tP1ECtCzKENYGn6XuWVB7EaIQFzGCbNdoNoLjbwSRglNHKIM7aDTXhhm0M0iHt4b/3uVJwPUXPOIToM2+Cjyf94OQqfhEl33yAyigfYlhFydJhB9GCOkLAJ22lD5nALXk54yd9HiI7pCoLi0CUUI4n100kI0SBIGPo6FCVcwzoMobJbBXxLxW3poVsLUZeuwB6GdFQIg8iYboGICt1rQ59GJBhDrKS5h+iXLiG2CK0mUYS4r/QMaVP37VmqAeNDjPrDhtgMf0w+CRviHtFvmNWwEzPItbUg6j+4HmJFIF8q2o+16yFWhOiFxpi3CNsxJXkLiDbCNvlQRvuC+cOwDaKoOLMyS1H5hG0uWA5YpMFD2yzzCNHNzgpJaQlKsBCFyYqDoCgz5AgR6ml+CW7xw5BzM1AM/PupuIk2ZFUjZtKW9NOD0zFWg2j6LrMFMxsuoQgO2mXFweoMdyFKaoSfuM77WjoDzRScjrIKREGuhSXPv98CivVDrTiBrV1/BL7Ie4e3CfgC0Vbc+nw//961599/+Px7SLGLWYhUhnIfMDTpeYq93PcbR55/P/4z9FSABjuP7yFsKwmlzdcN0MBayBPCFIeWR8R+tMIPwOiHRrlBr1ZxZ8zz9RgCQg1anoXU6ov0icKDWbBJZkjOKU4h2UUJvwkpV4odPsmPsINkOCsRp5CVIwBPFZA6xWONKF+IJ/CFYhPxfEROpmEv11CCKDwUR5LIBuc0kOIasWBGHhqRVtAhJPVJH2Fp+gzbeYdg9tFSyE8PIE/D757zGciZOooqYFSna99DYdKTXZUeRJvoPZ+B6lHNT6Bj4/l7St7RHAOAf/A6nUheujwjTp6Jz84bdkjOd8TIf/xtbkbO7MyPiNgRQ77uK2VnBWnsFyHKxtOlyCZD630jR2Ed7A61JMhA9fKC7JxjH703du6aJvPCziXzr2sNO+FPOyvIDof2reyUnX+on7vGgyAavvk29FT7Avvu6GHAPtkMeg5poUonck6UT9wbNmBvFO7KQk8d90VEKmDRAhJ+prMfIlIBi29+pUvZi/w+P5e7BPPJ7I0P6oY/+lLRAT252rldpMdN559cycEOPnYdSzF/q7zfTALoCs/LCKgVayxK02XUt2k0pq6CqQ5/q6rw1izMyOBGpXIlWtGGcdPjJqFBKAsTj5vr5kbjo26muEMOxv1F5RQgdcKNXLkQZE/aRNdjqYjD+qaxSY6ANSag4vHVFjISEtfsiyTTYY1Gvw670eHOVQZjOh2PF/yDfScOM7x/MBjq8FjqF192NU6XUIb/Y2W0WVB0lMv4Ya94aiIzET+YmlZ08sXwsxztyJiq7mmhYkvmUlxkNB/9T1Ty2eFv5To7w9Lseuwq3s+GNTs1kq/6DEdjejX6lgQR/+PL3mZsHp7dsDdhoCYkNf8Aq82cOYdwh+2mmg4fzdQvSsP6FteY5TQe8fldVrWms/yrH+23C1Dq1Cv2vaL+XKcl7imnqGXPWXrUGUrjsOvqsgtxMsyfvAzTuiqzWSKcoz/rxarZjNLWWG0X7lEjs9DWH9UPVofz23dvko7anSiKOu1RnE4Grc2uf8DCUAVe6y2UlAeNlrCov2BZS+MYg5Nm+JGW8jOCsasKyU6e92EGfZddY0f2ZZy73rvTsfuu7n3o+hspmJSKmHlTbtYqZB81cXKdqnxEzFPG5bFzvfwIBua0ztzX/UjNnpR9L4Bzy+v9Ac3uvJCzKWA7dl8KoYHRex7bQbGaJz6YBl3EyV4v5LvgtE+CbPWXtt76xxzZpvNN10O1WQTNKO0ms/HwdbpYrbO2YuvVYrrsD8ebpJtG9pXKf2aDcm+27QpbAAAAAElFTkSuQmCC'; // Replace with your circle image URL
  circleImage.style.width = '20px'; // Optional: set the image width
  circleImage.style.height = '20px'; // Optional: set the image height
  circleImage.style.marginRight = '10px'; // Optional: set the margin between the image and the text

  // Create a checkbox image element
  const checkboxImage = document.createElement('img');
  checkboxImage.src = 'data:image/png;base64,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'; // Replace with your checkbox image URL
  checkboxImage.style.width = '14px'; // Optional: set the image width
  checkboxImage.style.height = '10px'; // Optional: set the image height
  checkboxImage.style.display = 'none'; // Initially hide the checkbox image
  checkboxImage.style.position = 'relative'
  checkboxImage.style.right = '27px'
  // Add an event listener to the circle image
  circleImage.addEventListener('click', function() {
    if (checkboxImage.style.display === 'none') {
      checkboxImage.style.display = 'block';
    } else {
      checkboxImage.style.display = 'none';
    }
  });

  // Create a text element for the task
  const taskText = document.createElement('span');
  taskText.textContent = taskInput.value;

  // Add the circle image, checkbox image, and text to the task div
  taskDiv.appendChild(circleImage);
  taskDiv.appendChild(checkboxImage);
  taskDiv.appendChild(taskText);

  // Add the new task div to the task list
  taskList.appendChild(taskDiv);

  // Clear the input field
  taskInput.value = '';

  // Hide the specified elements
  elementsToHide.forEach(function(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'none';
    }
  });

  // Show the task list
  taskList.style.display = 'block';
}

// Event listener for input1
document.getElementById('kaam-add1').addEventListener('click', function() {
  addTask('input1', 'taskList', ['add-task2', 'picture1', 'picture2']);
});

document.getElementById('input1').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask('input1', 'taskList', ['add-task2', 'picture1', 'picture2']);
  }
});

// Event listener for input2
document.getElementById('kaam-add2').addEventListener('click', function() {
  addTask('input2', 'taskList', ['add-task2', 'picture1', 'picture2']);
});

document.getElementById('input2').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask('input2', 'taskList', ['add-task2', 'picture1', 'picture2']);
  }
});




const inputField = document.getElementById('add-task-popup');

inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    inputField.style.display = 'none';
  }
});


const inputField1 = document.getElementById('add-task-popup1');

inputField1.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    inputField1.style.display = 'none';
  }
});





const inputField22 = document.getElementById('add-task-popup');
const a22 = document.getElementById('kaam-add1')
a22.addEventListener('click', function(event) {
 {
    inputField22.style.display = 'none';
  }
});


const inputField11 = document.getElementById('add-task-popup');
const a11 = document.getElementById('kaam-add1')
a11.addEventListener('click', function(event) {
 {
    inputField11.style.display = 'none';
  }
});








document.getElementById('toggleButton').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden');
});





























    