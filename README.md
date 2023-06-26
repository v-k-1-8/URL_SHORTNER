# URL_SHORTNER_ACM
This is URL SHORTNER created by Lakhyani Varun, student at IIT ROORKEE, as an open project of ACM IIT ROORKEE.<br>
Project working video is also provided as name 'urlShortnerDemo.mp4'
# HOW TO START THE PROJECT AFTER CLONNING:
Node, npm , Express are expected to be set up for this project.<br>
After cloning, open folder URL_SHORTNER_ACM in terminal and run command npm init so that all dependencies provided in package.json file are installed.<br>
Now, all dependencies and packages are installed, run command 'npm start' to start the server.<br>
When server is started one can see the the message that 'Project listening on port 3000' which means localhost:3000 will give you project experience.
# FEATURES
Homepage of project will ask you 2 inputs one is url and another is notes.<br>
While Shortening any URL first time one can provide URL to be shorten in first input box and notes if any in second input box and hit seach url will give URL, SHORTEN URL , and notes which are also stored in server data for further use and after clicking shorten url you can visit URL or going to page as '/shortenUrl' can also redirect to URL associated with that shortenUrl.<br>
SEARCH FOR URLs:<br>
Urls, Shorten Urls and notes can be searched with helpmof any of them to search by Url or Shorten Url can hit search url on homepage after adding url or shorten url in first text box or same can be done with notes by adding it to second box.
# CODE LOGIC:
Firstly a server is created with of help of express js.<br>
Then two inputes are taken from users as url and notes for shortening url and save to json file if already not present and provide with shorten url which on result can send a get request to server which as response redirect to base url.
While searching of any shorten url one can search json database by url or shorten url itself or notes associated with url which on result provide all data associated with it along with shorten url which also on hit send get request to server which as reponse redirect to base url.
# That's all for URL_SHORTNER_ACM

