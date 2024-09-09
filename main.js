// Neumorphic Digital Clock - JavaScript Code
// Author: bufferwise
// Join the Discord community:
// https://discord.gg/26MMXRHgZB

// Query all strip elements (hour, minute, second)
const strips = [...document.querySelectorAll(".strip")];
const numberSize = 8; // Number size in 'vmin' for the sliding effect

/**
 * Highlights a specific digit on the given strip.
 * Adds a "pop" effect briefly for a visual highlight.
 * 
 * @param {number} stripIndex - The index of the strip (hour, minute, second).
 * @param {number} digit - The digit to highlight (0-9).
 */
function highlight(stripIndex, digit) {
  const selectedNumber = strips[stripIndex].querySelector(`.number:nth-of-type(${digit + 1})`);
  selectedNumber.classList.add("pop");

  // Remove the highlight class after 950ms to create a ticking effect
  setTimeout(() => {
    selectedNumber.classList.remove("pop");
  }, 950);
}

/**
 * Slides the strip to show the current digit.
 * 
 * @param {number} stripIndex - The index of the strip to update (0 for hours, 2 for minutes, 4 for seconds).
 * @param {number} number - The two-digit number to display on the strip.
 */
function stripSlider(stripIndex, number) {
  // Split number into two digits
  const firstDigit = Math.floor(number / 10);
  const secondDigit = number % 10;

  // Slide the first digit
  strips[stripIndex].style.transform = `translateY(${firstDigit * -numberSize}vmin)`;
  highlight(stripIndex, firstDigit);

  // Slide the second digit
  strips[stripIndex + 1].style.transform = `translateY(${secondDigit * -numberSize}vmin)`;
  highlight(stripIndex + 1, secondDigit);
}

/**
 * Updates the clock every second.
 * Retrieves the current time and updates the hour, minute, and second strips accordingly.
 */
function updateClock() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Update the hour, minute, and second strips
  stripSlider(0, hours);
  stripSlider(2, minutes);
  stripSlider(4, seconds);
}

// Set an interval to update the clock every second
setInterval(updateClock, 1000);
