# HTML Code Generator

## Overview

The HTML Code Generator is a web application that allows users to easily create HTML code snippets by selecting an HTML element, adding attributes, and specifying content. This tool is perfect for beginners learning HTML or developers who want a quick way to generate code snippets.

## User Journey

1. **Access the Application**

   - The user navigates to the HTML Code Generator app in their web browser.

2. **Select an HTML Element**

   - The user is presented with a dropdown menu containing a list of common HTML elements (e.g., `div`, `p`, `h1`, `a`, `img`, etc.).
   - The user selects the desired HTML element from the dropdown.

3. **Add Attributes**

   - Below the dropdown, there is an input field labeled "Attributes."
   - The user can enter any attributes they wish to add to the selected HTML element (e.g., `class="my-class"` or `id="my-id"`).
   - Attributes should be entered in the proper syntax.

4. **Enter Content (if applicable)**

   - For elements that can contain content (e.g., `div`, `p`, `h1`), a textarea labeled "Content" is displayed.
   - The user can enter the content that will appear inside the HTML element.
   - For self-closing elements (e.g., `img`, `input`), the content field is hidden since it is not applicable.

5. **Generate HTML Code**

   - The user clicks the "Generate HTML Code" button.
   - The application generates the HTML code based on the user's selections and inputs.
   - The generated code is displayed below the button in a formatted code block.

6. **Copy the Code**

   - Below the generated code, there is a "Copy to Clipboard" button.
   - The user can click this button to copy the generated HTML code to their clipboard.
   - A success message "Code copied to clipboard!" is displayed upon successful copying.

## Additional Features

- **Responsive Design**

  - The application is responsive and works well on various screen sizes, including mobile devices and larger screens.

- **User-Friendly Interface**

  - The inputs are clearly labeled, and the interface is intuitive.
  - Buttons have hover effects and are styled for ease of use.

- **Error Handling**

  - The application ensures that the inputs are properly sanitized.
  - Loading states are handled gracefully (although the app does not make any API calls in this version).

## Technologies Used

- **SolidJS**

  - A declarative JavaScript library for creating user interfaces.

- **Tailwind CSS**

  - A utility-first CSS framework used for styling the application.

- **Vite**

  - A fast build tool used for bundling and developing the application.

## Getting Started

To run the application locally:

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run the Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Preview the Production Build**

   ```bash
   npm run serve
   ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
