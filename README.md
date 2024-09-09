# Neumorphic Clock Project

## Project Description

This project involves creating a digital clock with a modern neumorphic design. Neumorphism is a design trend that combines shapes, gradients, and shadows to create a soft, extruded plastic look. This clock will display the current time with a sleek, three-dimensional aesthetic.

## Features

- **Real-time Clock**: Displays the current time, updating every second.
- **Neumorphic Design**: Utilizes CSS to create a soft, 3D effect.
- **Responsive Layout**: Adjusts to different screen sizes.

## Technologies Used

- **HTML**: Structure of the clock.
- **CSS**: Styling for the neumorphic effect.
- **JavaScript**: Logic to update the time.

## Code

### HTML: [Click here for the complete code.](https://github.com/bufferwise/Neu-Times/blob/main/index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Neumorphic Digital Clock</title>

  <!-- Link to the CSS file -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Main clock container -->
  <div class="clock">
    <!-- Hour strip -->
    <div class="hr">
    ....
```

### CSS: [Click here for the complete code.](https://github.com/bufferwise/Neu-Times/blob/main/style.css)

```css
/* ----------------------------------------------------------------------
   Neumorphic Digital Clock - Stylesheet
   Author: bufferwise (https://discord.gg/26MMXRHgZB)
   ---------------------------------------------------------------------- */

/* GLOBAL RESET & DEFAULT STYLES ---------------------------------------- */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* BODY STYLING --------------------------------------------------------- */
body {
  font-family: 'Roboto Mono', monospace;
  font-size: 4vmin;
  ....
```

### JavaScript: [Click here for the complete code.](https://github.com/bufferwise/Neu-Times/blob/main/main.js)

```javascript// Neumorphic Digital Clock - JavaScript Code
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
  ....
```

## How to Run

1. **Clone the Repository**: Download or clone the project files.
2. **Open `index.html`**: Open the HTML file in a web browser to see the clock in action.

## Conclusion

This project is a great way to learn about neumorphic design and how to implement it using HTML, CSS, and JavaScript. It combines visual design with functional programming to create a stylish and practical digital clock.

---

#### Feel free to customize the design and functionality to suit your needs! If you have any questions or need further assistance, [let me know](https://discord.gg/26MMXRHgZB).
