document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the mask div
    const mask = document.getElementById('mask');

    // Function to check for collision between two elements
    function isColliding(elem1, elem2) {
        const rect1 = elem1.getBoundingClientRect();
        const rect2 = elem2.getBoundingClientRect();
        
        return !(
            rect1.right < rect2.left || 
            rect1.left > rect2.right || 
            rect1.bottom < rect2.top || 
            rect1.top > rect2.bottom
        );
    }

    // Function to check for collision between mask and all other divs
    function checkCollisions() {
        const otherDivs = document.querySelectorAll('div:not(#mask)');
        otherDivs.forEach(div => {
            if (isColliding(mask, div)) {
                console.log("Touched:", div.tagName);
                stopBackground()
            }
        });
    }

    // Check for collisions every 100 milliseconds
    setInterval(checkCollisions, 10);
});

  // Variables
  let isMovingLeft = false;
  let isMovingRight = false;
  let isMovingUp = false;
  let isMovingDown = false;
  const moveSpeed = 25; // Adjust speed as needed
  let background;

  // Function to move background
  function moveBackground() {
    if (!background) return; // Check if background is defined
    const rect = background.getBoundingClientRect();
    if (isMovingLeft) {
      background.style.left = (rect.left + moveSpeed) + 'px';
    }
    if (isMovingRight) {
      background.style.left = (rect.left - moveSpeed) + 'px';
    }
    if (isMovingUp) {
      background.style.top = (rect.top + moveSpeed) + 'px';
    }
    if (isMovingDown) {
      background.style.top = (rect.top - moveSpeed) + 'px';
    }
  }

  // Function to stop background movement
  function stopBackground() {
    if (isMovingLeft = true) {
        const rect = background.getBoundingClientRect();
        background.style.left = (rect.left + 2) + 'px';
    }
    if (isMovingRight = true) {
        const rect = background.getBoundingClientRect();
        background.style.left = (rect.left - 2) + 'px';
    }
    if (isMovingUp = true) {
        const rect = background.getBoundingClientRect();
        background.style.top = (rect.top - 2) + 'px';
    }
    if (isMovingDown = true) {
        const rect = background.getBoundingClientRect();
        background.style.top = (rect.top + 2) + 'px';
    }
    isMovingLeft = false;
    isMovingRight = false;
    isMovingUp = false;
    isMovingDown = false;
  }

  // Event listener for keydown event
  document.addEventListener('keydown', function(event) {
    if (isMovingLeft || isMovingRight || isMovingUp || isMovingDown) {
      return; // If any movement is ongoing, ignore additional key presses
    }

    if (event.key === 'ArrowLeft') {
      isMovingLeft = true;
    } else if (event.key === 'ArrowRight') {
      isMovingRight = true;
    } else if (event.key === 'ArrowUp') {
      isMovingUp = true;
    } else if (event.key === 'ArrowDown') {
      isMovingDown = true;
    }
  });

//   // Event listener for keyup event
//   document.addEventListener('keyup', function(event) {
//     if (event.key === 'ArrowLeft') {
//       isMovingLeft = false;
//     } else if (event.key === 'ArrowRight') {
//       isMovingRight = false;
//     } else if (event.key === 'ArrowUp') {
//       isMovingUp = false;
//     } else if (event.key === 'ArrowDown') {
//       isMovingDown = false;
//     }
//     stopBackground();
//   });

  // Continuous movement loop
  function moveLoop() {
    moveBackground();
    requestAnimationFrame(moveLoop);
  }
  moveLoop();

  // Wait for the DOM to fully load before accessing elements
  document.addEventListener('DOMContentLoaded', function() {
    background = document.getElementById('background');
  });