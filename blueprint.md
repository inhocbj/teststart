# Lottery Number Generator

## Overview

This project is a simple web application that generates random lottery numbers.

## Features

*   Generates 6 unique random numbers between 1 and 45.
*   Displays the generated numbers in a visually appealing way.
*   Allows the user to generate new numbers with a button click.
*   Google Analytics (gtag.js) integration for tracking.
*   Microsoft Clarity integration for user behavior analytics.

## Current Request

The user wants to add Microsoft Clarity tracking script to all HTML files.

### Plan

1.  **Identify all HTML files:** Use `glob` (already done: `index.html`).
2.  **Add Microsoft Clarity to `<head>`:** Insert the Clarity script into the `<head>` section of `index.html`.
3.  **Verify changes:** Ensure the script is correctly inserted and the page loads without errors.