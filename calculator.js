// Function to calculate the result
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;
    switch(operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = "Cannot divide by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkModeEnabled', body.classList.contains('dark-mode'));

    // Toggle the image background for the entire page
    const darkModeBackgroundImageUrl = '/images/1424202.png';
    const normalModeBackgroundImageUrl = '/images/DL26Rv.png';

    if (body.classList.contains('dark-mode')) {
        body.style.backgroundImage = `url(${darkModeBackgroundImageUrl})`;
        body.style.backgroundSize = 'cover';
    } else {
        body.style.backgroundImage = `url(${normalModeBackgroundImageUrl})`;
        body.style.backgroundSize = 'cover';
    }
}

// Check if dark mode is enabled
if (localStorage.getItem('darkModeEnabled') === 'true') {
    toggleDarkMode(); // Toggle dark mode if it was enabled previously
}

// Event listener for dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
