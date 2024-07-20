![Sequence Squares Logo](/favicon.ico)
<h1 allign="center" id="title"> Sequence Squares </h1>


[Live Project can be viewed here.]()



## Table of Contents

### User Experience (UX)

- Project Goals
- User Goals
- Developer Goals
- User Stories
- Design Choices
- Wireframes

### Features
### Testing
- Bugs
### Deployment
### Credits

- Content
- Media
- Code
- Acknowledgments

## User Experience (UX)

### Project Goals


#### Recruiters Goals

The main audience for this site 6+.

#### User Goals:
- To sucessfully complete the game.
- Enjoy the game.
- Challenege memory.

#### Developers goals:
- Create a simple and interactive game.
- Demonstrate the use of Javescript.

#### User Stories

As a user I want:
- To play a interactive game, that is also fun and enjoyable.
- To understand the instructions given.
- Increase the difficulty.
- Consistent functionalities.

As the site owner I want:
- A fun game that I and others enjoy.
- A structured and simple code
- Demonstrate what I have learnt with JavaScript.
- Clear and intruvitity within my game/site.
- A game that functions and is consistent.


## Design Choices
- 6 Buttons game 
- Colours to make page 
### Languages Used 

- HTML
- CSS
- JavaScript (Jquery)
### Fonts
- Google Fonts: Teko and Poppins 


### Icons 
- Font Awesome for footer items
- Favicon for my web icon, where created an the icon of four squares. 

### Colours
- Bright colours to make it fun.


### Images
- Favicon Icon image can be found []()

### Video Files



### Wireframes
- Wireframes can be accessed via

## Features



### Accessibility

## Testing

## Bugs
- When hovering over the squares within the grid, squares would move. I found that this could be caused due to the child elements not being "fixed" within the parent div. I used box-sizing: border-box to resolve my issue for now.
- Cannot set properties of null (setting 'innerText') - showScore (script.js:31:46), newGame (script.js:19:3), HTMLButtonElement.onclick ((index):18:55). It seemed I had a typo when getting my element within the showTurns function.
- Undefined data result when checking current game in dev tools. Checked data attributes and changed them.
- Sequence started immediately on page load, due to sequence function being called at the very start.
- Sequence didn't increase, it used all 9 buttons within one sequence, calling them one after another. However, It wouldn't increment. This was because I hadnt called the sequnence and combined it with "++".
- New game would be called everytime, even when user was successful in copying sequence. I had mixed up a lot of the game logic. I had to restructer and go through the copy and remove some called functions.
- EmailJS function work when email has been sent. Though the test email is not sending over. Could this be due to the undeployment of the site?


## Deployments
This project was deployed to GitHub Pages using the steps below;
### How to Deploy to GitHub Pages.
1. Open the browser, search GitHub and log in. If you do not have an account, sign up [here](https://github.com/login).
2. Locate and select the []().
3. Once the repository is open, select settings.
4. Select 'Pages', which is found on the left-hand side under the Code and Automation category.
5. Underneath build and deployment, there are two sub-heading 'Source' and 'Branch'. Select the 'None' dropdown below the branch sub-heading.
6. Change the 'None' option to 'Main', then press save
7. Wait a few moments whilst the pages refresh. (This could take up to 5 minutes.)
8. You may need to refresh the page, to see the saved changes. You should have seen that the site and the link to the live site. An orange icon will display which will indicate that the save changes are still loading.
9. You can also check your deployment by selecting 'Code'. On the right-hand side, you should see 'Deployments'. Select 'Deployments' to view the status of your deployments.

### How to run this project locally.
To clone this project to Gitpod use the following steps;

1. Open the browser, search GitHub and log in. If you do not have an account, sign up [here](https://github.com/login).
2. Open a new tab, search Gitpod and log in. If you don't have an account, you can sign in with GitHub.
3. Open a new workspace.
4. Go back to the GitHub tab and locate []().
5. Click the green "<> Code" button.
6. Under the HTTPS tab, copy the URL for the repository.
7. Go back to your Gitpod Workspace and open the terminal.
8. Change the location of your current working directory to where you want the cloned directory.
9. Type "git clone", then paste the URL that you had copied earlier from GitHub.
10. Press Enter to create your local clone.

## Credits

### Frameworks, Libraries and Programs Used
- [coolors](https://coolors.co/a8d5e2-f9a620-ffd449-548c2f-104911) For the colour of the squares.
- [Font Awesome](https://fontawesome.com/) - For Icons in the footer
- [W3schools](https://www.w3schools.com) - Refresh my mind on some basic JavaScript concepts.
- [Bro Code JS Course](https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=32962s)
### Media



### Code
- [CSS Buttons](https://www.w3schools.com/css/css3_buttons.asp)- For shawdowing properties.
- [Toggle Hiding and Showing](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp) - How to get my toggle to work on the instructions.

### Acknowledgments
- 

[Back to top](#title)