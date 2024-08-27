<h1 allign="center" id="title"> Sequence Squares </h1>

![Sequence Squares](assets/images/responsive.png)

[Live Project can be viewed here.](https://kenya-rae.github.io/sequence-square-game/)
![Sequence Squares Logo](assets/images/favicon/favicon.ico)

Sequence Squares is an online memory game that will put your memory to the test. Give yourself a challenge in remembering the sequence. How long can you remember sequences?

## Table of Contents

### User Experience (UX)

- [Project Goals](#project-goals)
- [User Goals](#user-experience-ux)
- [Developer Goals](#developers-goals)
- [User Stories](#user-stories)
- [Design Choices](#design-choices)
- [Wireframes](#wireframes)

### Features

- [Loaded page](#loaded-page)
- [Feedback Form](#feedback-form)
- [How to Play ](#how-to-deploy-to-github-pages)
- [Game in Progress](#game-in-progress)
- [Correct Sequence Alert](#correct-sequence-alert)
- [Game Over Alert](#game-over-alert)
- [Future Features](#future-feautres)

### Testing

- [Bugs](#bugs)

### Deployment

- [How to Deploy Site](#deployments)

### Credits

- [Credits](#credits)
- [Code](#code)
- [Acknowledgments](#acknowledgments)

## User Experience (UX)

### Project Goals

This project's goal is to use JavaScript to build a simple game. It is a memory-based game similar to the well-known Simon Says game. This project has a target audience of anyone ages 6+, and those who like to play games in their spare time.

#### Recruiters Goals

The main audience for this site is anyone aged 6+.

#### User Goals:

- To complete the game.
- Enjoy the game.
- Challenge memory.

#### Developers goals:

- Create a simple and interactive game.
- Demonstrate the use of Javascript.
- Make an enjoyable game for users.

#### User Stories

As a user I want:

- To play an interactive game, that is also fun.
- To understand the instructions given.
- Increase the difficulty.
- Consistent functionalities.

As the site owner I want:

- A fun game that I and others enjoy.
- A structured and simple code
- Demonstrate what I have learnt with JavaScript.
- Clear and intrepidity within my game/site.
- A game that functions and is consistent.

## Design Choices

### Languages Used

- HTML
- CSS
- JavaScript

### Fonts

- The font Teko was used for the main title and the sub-title of "How to Play?".
- Poppins was used for the instructions on how to play and the footer elements.

### Icons

- For my footer elements, I used basic icons to identify my social links. These are easy to recognise also.
- The website icon, I created it on Favicon. I created four squares, with two squares solid to represent the game.

### Colours

- I used a black background and some bold bright colours to make it more appealing to the game, I think it gives an arcade game feel.
- The colours of this project were all randomised via [Coolors](https://coolors.co/a8d5e2-f9a620-ffd449-548c2f-104911) and then selected by myself.

### Images

- Favicon Icon images can be found [Favicon](assets/images/favicon/).

### Video Files

- Link to video, used to show features [Sequence Square Game Video](assets/video/sequence-squares-game.mp4).

### Wireframes

The design choices were decided over the development of this project. The Wireframes for the original design can be found [here](assets/images/wireframes/original/).
The overall site has changed over development. This was due to the complexity it may have when building. As this is my first time working with JavaScript. I wanted to make something very simple and basic, due to where my skill set currently is. The wireframe for the final look can be found [here](assets/images/wireframes/finals/).

- Wireframes were created using [Balsamiq](https://balsamiq.com/).

## Features

- Functional footer which provides a link to GitHub and my portfolio.
- Instructions collapse area, is functional and able to see how to play the game.
- Favicon is used to give individuality to the site.
- Responsive for all screen sizes.
- Easy navigation and simple to interact with.
- Identifiable buttons.
- Feedback form that allows emails to be sent to receive feedback from users.

### Loaded page:

When you first load on the page you are met with a "Start" and "Instructions" button.

<details>
<summary>User Interface</summary>
<IMG src="assets/images/start-game-ux.png"  alt="User Interface"/>
</details>

### Feedback Form:

A simple feedback form is at the bottom of the page. Allowing users to provide feedback on what they would prefer, what they liked and disliked etc.

<details>
<summary>Feedback Form</summary>
<IMG src="assets/images/feedback-form.png"  alt="Feedback Form"/>
</details>

When you have successfully sent your email over, an alert will display to show that this has been sent.

<details>
<summary>Feedback Sent</summary>
<IMG src="assets/images/feedback-sent.png"  alt="Feedback Form Sent"/>
</details>

### How to Play:

The instruction button when clicked, displays instructions on how to play the game.

<details>
<summary>How to Play</summary>
<IMG src="assets/images/how-to-play.png"  alt="Instructions on how to play"/>
</details>

### Game in Progress:

When you press start, the sequence will display. Each square will flash a light one at a time. You will have to repeat the sequence once the computer has finished displaying its sequence.

https://github.com/user-attachments/assets/ef96fd9d-1452-48a8-928d-68f2ae11a51f

### Correct Sequence Alert:

If you match the sequence correctly an alert will display before the next round.

<details>
<summary>Correct sequence Alert</summary>
<IMG src="assets/images/user-successful.png"  alt="Correct Sequence Alert"/>
</details>

### Game over Alert:

The game-over alert will display when you incorrectly select the wrong button.
<br> <details>

<summary>Game Over Alert</summary>
<IMG src="assets/images/game-over.png"  alt="Game Over Alert"/>
</details>

## Future Features

- I plan to have an ending level to cap the game once a certain level has been reached. As a result, I would like to incorporate a winning celebration on the screen for the successful users. Or change the alerts to text elements on the page.
- Furthermore, I would also like to add sound to the game, whether that is with the game buttons or putting a radio/API that allows the user to play the game as well as listen to their favourite songs.
- As well as this I would like to make the game visibly inactive if the game has not been started or provide a start menu that will take you to the game.
- I would like to dive into different colour schemes to improve user experience and accessibility for screen readers.
- In the future, I would like to implement another mode as suggested in my testing section. This game could be a great challenge mode and have a standard game with fewer buttons but the same game to make it less complex from the start. Also, add a countdown on the start button for a new game and each successful round.

## Accessibility

- Ensured that the flashlight-up styling had to be transparent to ensure that everyone could see the sequence being flashed.
- Used colours that would interfere or clash with each other, easy on the eye.

## Testing

### Manual Testing

| What to test        | Expected Results                                         | Passed   |
| ------------------- | -------------------------------------------------------- | -------- |
| Start Button        | Start the game                                           | &#x2714; |
| Instructions Button | Display how to play the game                             | &#x2714; |
| Game Buttons        | Show the game sequence and allow user input to repeat it | &#x2714; |
| Scroll Up Button    | Send user back to the top of the page.                   | &#x2714; |
| Feedback Form       | Allow user input and send feedback email                 | &#x2714; |
| Footer links        | Send user to correct pages                               | &#x2714; |

### For this project I have had friends and family ranging from 7 to 56 years old, test amongst various devices. Such as;

- iPhone 12 Pro - Safari, Portrait mode.
- iPhone 11 Pro - Safari, Portrait and Landscape mode.
- iPhone 13 - Safari, Portrait and Landscape mode.
- MacBook - Chrome.
- iPhone XR - Safari, Portrait Mode.
- iPhone 15 - Safari, Portrait Mode.
- iPad 9th Gen - Safari, Landscape Mode.
- iPad 6th Gen - Safari, Portraite Mode.
- iPad 7th Gen - Safari, Portrait Mode.
- HP Pavillion Gaming Laptop 17 - Chrome
- Samsung S12 - Samsung Internet, Portrait mode.
- iPhone 13 - Safari, Portrait and Landscape Mode.

After collating the data from my testers, the consensus of Sequence Squares is that it is a good functional game. All buttons and functionalities worked correctly as they should. No mention of the flow of the page, however, some suggestions were similar to my future features. Suggestions such as a countdown timer for the start of each round, starting rounds with fewer buttons and having a success rate that will then increase the difficulty once the user has developed some confidence and is switched on in the game. As for the successful or game-over alerts, it was suggested to have glowing text within the page itself that will signify if there is a next level, game over or game complete.

Another tester had stated that this should be an app as this is something they would play as they travelled. Although I had a feedback form below by habit testers messaged me back instead. However, one tester did use the feedback form and I received the following screenshot below, in which the tester expressed the same suggestions. They had also mentioned that yellow and orange squares looked somewhat similar which had them a bit confused when it came to repeating the sequence. As well as having this current code as a challenge mode and have easier mode with fewer buttons in the standard games.

<details>
<summary>Feedback Email</summary>
<IMG src="assets/images/feedback.JPG"  alt="Received Feedback Email"/>
To follow the GDPR guidelines I have cropped out the email and name of the tester.
</details>

### Lighthouse - Developer Chrome Tools

Using the Google Chrome Developer tools, I used Lighthouse within an incognito browser (due to extension interference) to look at the overall quality of my site.

<details>
<summary>Lighthouse Overview</summary>
<IMG src="assets/images/lighthouse/lighthouse-overview.png"  alt="Lighthouse Overview Score"/>
</details>
<br>

Although the overall quality of my site was a score of 91, the accessibility of my site could improve significantly.

<details>
<summary>Lighthouse Acessibility</summary>
<IMG src="assets/images/lighthouse/lighthouse-accessibility.png"  alt="Lighthouse Accessibility Score"/>
</details>
<br>

I have recognised that some elements (Square buttons) were missing Aria attributes within them. I rectified this by adding an aria-label to my div buttons to improve. As well as this, background and foreground colours do not have a sufficient contrast ratio.

I had a few diagnostics within the lighthouse section that could be improved.

<details>
<summary>Lighthouse Diagnostics</summary>
<IMG src="assets/images/lighthouse/lighthouse-diagnostics.png"  alt="Lighthouse Accessibility Score"/>
</details>
<br>

Overall I understand how to resolve a few of them. However currently, "Serve static assets with an efficient cache policy", "Avoid serving legacy JavaScript to modern browsers" and "Eliminate render-blocking resources" are things I'm not sure how to resolve. I have read into these diagnostics and have tried to improve on things that were within my capacity. Such as contrasting the slogan "Square Up" was previously a yellow glow, though changing to a red/pink has removed this issue.

Once I made all the changes, I retested my site in Lighthouse. I had better results:
<br>

<details>
<summary>Lighthouse Overview - After changes</summary>
<IMG src="assets/images/lighthouse/lighthouse-overview-after-change.png"  alt="Lighthouse Overview Score - After changes"/>
</details>

### Validators

W3c was used to validate HTML, CSS and JavaScript code.

HTML Validator:

<details>
<summary>HTML Validator Overview Part 1</summary>
<IMG src="assets/images/validators/html-validator-error-button.png"  alt="HTML Validator Overview Part 1"/>
</details>
<details>
<summary>HTML Validator Overview Part 2</summary>
<IMG src="assets/images/validators/html-validator-error-paragraph.png"  alt="HTML Validator Overview Part 2"/>
</details>
<details>
<summary>HTML Validator Overview Part 3</summary>
<IMG src="assets/images/validators/html-validator-warning-javatype.png"  alt="HTML Validator Overview Part 3"/>
</details>
<details>
<summary>HTML Validator Overview Part 4</summary>
<IMG src="assets/images/validators/html-validator-info.png"  alt="HTML Validator Overview Part 4"/>
</details>
<br>
Overall, I needed to neaten up my HTML by removing some attributes (for attributes within the submit button element and type within the script elements in the head). I also changed the paragraph element within the list element of how to play, as this was not allowed - these were changed to a list item. I have noticed the info text, I had removed the "/" from the closing tags, due to the autosave extension I have the slash is automatically returned to the end of the self-closing element. This doesn't interfere with the web itself. However, moving forward I will remove this extension to reduce the feedback within this validator. Once I had made the changes to the errors/warnings, I had a successful pass with no warnings and errors. (Though the info for the ending tags with the "/" still appeared as expected).

<br>
<details>
<summary>HTML Validator - Pass</summary>
<IMG src="assets/images/validators/html-validator-no-error.png"  alt="HTML Validator - Pass"/>
</details>

<br>
CSS Validator:
<br>
<details>
<summary>CSS Validator - Pass</summary>
<IMG src="assets/images/validators/css-validator.png"  alt="CSS Validator - Pass"/>
</details>

There was nothing to report back or fix within my CSS as far as the validator was concerned.

JavaScript Validator:
<br>
<br>
When using the JavaScript validator, I had some feedback regarding undefined and unused variables.

<details>
<summary>JavaScript Validator</summary>
<IMG src="assets/images/validators/js-validator.png"  alt="JavaScript Validator Results"/>
</details>
<br>
It states that emailjs is undefined, I'm unsure if I need to define this as a variable. This syntax was copied from emailJS and modified with my service and template ID.

As for **_howTo() and sendEmail()_**, they have come back as unused. This could be due to the function not being currently used on the site. However, the functionality of the site is not affected by this.

## Bugs

### Current Bugs

- Currently no outstanding bugs. The console displays the following message:
<br>
<details>
<summary>Console Message</summary>
<IMG src="assets/images/console/console.png"  alt="Console message"/>
I had to ensure paths for the favicon were linked correctly and refreshed the page and this was resolved.
</details>
<br>
<details>
<summary>Console Message - After Change</summary>
<IMG src="assets/images/console/console-after-changes.png"  alt="Console message - after changes"/>
This current message is things I'm unable to resolve due to the submission date. However, no effect on the website or user experience.
</details>
<br>

### Fixed Bugs

- When hovering over the squares within the grid, squares would move. I found that this could be caused due to the child elements not being "fixed" within the parent div. I used box-sizing: border-box to resolve my issue for now.
- Cannot set properties of null (setting 'innerText') - showScore (script.js:31:46), newGame (script.js:19:3), HTMLButtonElement.onclick ((index):18:55). It seemed I had a typo when getting my element within the showTurns function.
- Undefined data result when checking the current game in dev tools. Checked data attributes within HTML div square classes and changed them to data-id, this allowed me to pull the correct data within the script.js file.
- Sequence started immediately on page load, due to the sequence function being called at the very start. I removed this function from the pure game start.
- Sequence didn't increase, it used all 9 buttons within one sequence, calling them one after another. However, It wouldn't increment. This was because I hadn't called the sequence and combined it with "++".
- A new game would be called every time, even when the user was successful in copying the sequence. I had mixed up a lot of the game logic. I had to restructure and go through the copy and remove some called functions.
- EmailJS function works when an email has been sent. When testing in the development or deployed area, it seems that there is a limit to how many emails are sent out.
- Feedback email could be sent without any user input. I provided my EmailJS function a try and catch block (which I had learned recently in Python) to provide an error when no user input has been given.
- (Not much of a bug)The original 9 buttons had been reduced to 6. I wasn't sure how to increase difficulty once a user was successful due to how I incremented the sequence. I had removed 3 buttons and tried this game with 6 buttons and it naturally increases the difficulty.
- (Not much of a bug)Whilst trying to disable my squares, I realised that I'm unable to disable and enable this due to these being div elements. I had tried to disable the play area until the game started but this ruined the structure of the page. Due to the deadline of this project, I'm unable to change the code to accommodate this. However, now obtain the information to not make this error again.

## Deployments

This project was deployed to GitHub Pages using the steps below;

### How to Deploy to GitHub Pages.

1. Open the browser, search GitHub and log in. If you do not have an account, sign up [here](https://github.com/login).
2. Locate and select the [Sequence Squares](https://github.com/Kenya-Rae/sequence-square-game).
3. Once the repository is open, select settings.
4. Select 'Pages', which is found on the left-hand side under the Code and Automation category.
5. Underneath build and deployment, there are two sub-heading 'Source' and 'Branch'. Select the 'None' dropdown below the branch sub-heading.
6. Change the 'None' option to 'Main', then press "Save".
7. Wait a few moments whilst the pages refresh. (This could take up to 5 minutes.)
8. You may need to refresh the page, to see the saved changes. You should have seen that the site and the link to the live site. An orange icon will display which will indicate that the save changes are still loading.
9. You can also check your deployment by selecting 'Code'. On the right-hand side, you should see 'Deployments'. Select 'Deployments' to view the status of your deployments.

### How to run this project locally.

To clone this project to Gitpod use the following steps;

1. Open the browser, search GitHub and log in. If you do not have an account, sign up [here](https://github.com/login).
2. Open a new tab, search Gitpod and log in. If you don't have an account, you can sign in with GitHub.
3. Open a new workspace.
4. Go back to the GitHub tab and locate [Sequence Squares](https://github.com/Kenya-Rae/sequence-square-game).
5. Click the green "<> Code" button.
6. Under the HTTPS tab, copy the URL for the repository.
7. Go back to your Gitpod Workspace and open the terminal.
8. Change the location of your current working directory to where you want the cloned directory.
9. Type "git clone", then paste the URL that you had copied earlier from GitHub.
10. Press Enter to create your local clone.

### How to Fork this project.

To fork this project from Gitpod, please follow the steps below;

1. Open the browser, search GitHub and log in. If you do not have an account, sign up [here](https://github.com/login).
2. Locate the GitHub tab and locate the project you want to fork. [Sequence Squares.](https://github.com/Kenya-Rae/sequence-square-game)
3. At the top right-hand side of the page, you will see a "Fork" button. Click on the button and wait a few moments. You should see the new forked repository under your own GitHub account.
4. By default the folk is named as their upstream repositories, you can rename the repositories by typing a name in the "Repository name" field.
5. You can also add a description to your fork and/or copy the default branch only.
6. To also access the files in the repository. Head over to your forked repository. Click the green "<> Code" button.
7. Under the HTTPS tab, copy the URL for the repository.
8. Go to the workspace you have created earlier.
9. To change the current directory to the location where you want the cloned directory.
10. Type "git clone" and paste the URL you copied from GitHub. Press "Enter" and your local clone will be created.

## Credits

### Frameworks, Libraries and Programs Used

- [Balsamiq](https://balsamiq.com/) - For creating wireframes.
- [GitHub](https://github.com/) - To store my repository and deploy site.
- [Gitpod](https://www.gitpod.io/) - Used to write code for this project.
- [coolors](https://coolors.co/a8d5e2-f9a620-ffd449-548c2f-104911) - Used to find colours for the website.
- [Font Awesome](https://fontawesome.com/) - For Icons in the footer
- [EmailJS](https://www.emailjs.com/) - Used to create an email service for my feedback form.
- [Am I responsive](https://ui.dev/amiresponsive) - To show my website in different browsers for responsive design.
- [Favicon](https://favicon.io/) - To make and generate my website icon.
- [HTML Validation](https://validator.w3.org/) - To validate my HTML Code.
- [CSS Validation](https://jigsaw.w3.org/css-validator/) - To validate my CSS code.

### Code

- [CSS Buttons](https://www.w3schools.com/css/css3_buttons.asp) - For shawdowing properties.
- [Toggle Hiding and Showing](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp) - How to get my toggle to work on the instructions.
- [Bootstrap Media Queries](https://getbootstrap.com/docs/4.1/layout/overview/) - Used their basic media query for my project and put my CSS styling.
- [Glowing Text](https://www.w3schools.com/howto/howto_css_glowing_text.asp) - Used to create a glowing effect on the "Square Up!" slogan.
- [Back to the top](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) - Used to function to provide button, the ability to scroll up to the top of the page.

### Acknowledgments

- [Martina Terlevic](https://github.com/SephTheOverwitch) - Supported me through the project, listened and allowed me to talk about my concerns and thoughts about JavaScript. Giving advice not just for my projects but in life too.
- [Zahria](https://github.com/zioan) - For allowing me to go through my concerns with JavaScript. Aiding my thinking when writing and debugging code. Showed me how to use the prettier extension on GitPod, due to my horrible indentations.
- [Mitko Bachvarov](https://code-institute-room.slack.com/team/U03R20N303G) - Supported my last mentor session before submitting this project. Gave great suggestions on a current project and provided knowledge for moving forward with logical code.
- [Bro Code JS Course](https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=32962s) - As I wasn't understanding the concepts well, I discovered this video that explained enough for me to understand JS concepts.
- [W3schools](https://www.w3schools.com) - Used as a refresher.
- Friends and family who helped test and supported me through the emotions of this project. This proved to be a challenge.

[Back to top](#title)
