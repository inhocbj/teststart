# Lottery Number Generator

## Overview

This project is a simple web application that generates random lottery numbers.

## Features

*   Generates 6 unique random numbers between 1 and 45.
*   Displays the generated numbers in a visually appealing way.
*   Allows the user to generate new numbers with a button click.
*   Google Analytics (gtag.js) integration for tracking.

## Current Request

The user wants to add the Google tag (gtag.js) to all HTML files in the project.

### Plan

1.  **Identify all HTML files:** Use `glob` to find all HTML files (already done: `index.html`).
2.  **Add gtag.js to `<head>`:** Insert the Google Tag script at the top of the `<head>` section in each HTML file.
3.  **Verify changes:** Ensure the scripts are correctly inserted and the pages still load.