### Functionality of Application
Here is how the application must function:
- List of genres and movies should populate from the API.
- When a genre or pagination button is clicked, a request should be sent to the API, and then repopulate the movie list.
- The list of genres should stick to the top of the page as a user scrolls down.
- Pagination should display a maximum of 5 options. first page, previous, current, next, and last page
  - Example: There are 20 pages, and you are currently on the 10th page. [First][9][10][11][Last]

### General Requirements
- Webpage must **NOT** use a CSS framework such as Bootstrap, Foundation, etc.
- Webpage must be responsive. Its mobile look is up to you.
- JavaScript will be used heavily. You may use either Vue, React, Angular, or vanilla JavaScript. Vue.js is highly recommended as that is our choice of framework.

### API Use
First, you must [login](https://www.themoviedb.org/login) or [create an account](https://www.themoviedb.org/account/signup) with TMDb.
To get TMDb API token, visit the API tab in your [account settings](https://www.themoviedb.org/settings/api).
Once you have landed on the API details page, click to generate an API key at the bottom of the page.

You will need to figure out on your own how to use the API token, as well as what routes you need to use.

### Colors
- Green: #64BD7A
- Light Gray: #F2F5F8
- Black: #F2F5F8
- Bluish Gray (The text on gray buttons): #5A6375

### Style Guidelines
- Grid has a max-width of 1160px
- Reference assessment.png above or view the [Link To Design File](https://www.figma.com/file/hXc9GdswxKwOhXDWypNUYc/Movie-App?node-id=0%3A1)
- *PLEASE NOTE: The design file is just an example and only uses one movie title. Your application should show multiple movie titles.*