# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<!DOCTYPE html>
<html>
<head>
  <title>Tag Input Field</title>
  <style>
    .tag {
      display: inline-block;
      background-color: #f2f2f2;
      padding: 5px;
      margin: 5px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <input type="text" id="tagInput" placeholder="Enter tags" />
  <div id="tagContainer"></div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(function() {
      var tags = []; // Array to store the tags

      // Function to add a tag
      function addTag(tag) {
        var tagElement = $('<div class="tag">' + tag + '</div>');
        $('#tagContainer').append(tagElement);
      }

      // Function to handle tag input
      function handleTagInput() {
        var tag = $('#tagInput').val().trim();

        if (tag !== '') {
          tags.push(tag); // Add tag to the array
          addTag(tag); // Add tag to the container
          $('#tagInput').val(''); // Clear the input field
        }
      }

      // Handle tag input when Enter key is pressed
      $('#tagInput').on('keydown', function(event) {
        if (event.which === 13 || event.keyCode === 13) {
          handleTagInput();
          return false;
        }
      });

      // Handle tag input when a comma is entered
      $('#tagInput').on('input', function() {
        var value = $(this).val();
        if (value.slice(-1) === ',') {
          handleTagInput();
        }
      });
    });
  </script>
</body>
</html>
