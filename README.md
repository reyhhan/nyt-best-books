<h3>An web application showing The New York Times Best-Selling books</h3>

The app can be alternatively accessed on https://nyt-best-books.herokuapp.com/

<b>Follow the steps below in order to run the app locally</b>

<b>Step 1</b> : Clone this repository,<br/>
```git clone https://github.com/reyhhan/nyt-best-books.git```

<b>Step 2</b> : Navigate to nyt-best-books folder <br/>
```cd nyt-best-books```

<b>Step 3</b> : Run command <br/>
```npm install```

<b>Step 4</b> : Create a file named .env in the root of the project folder with the following content<br />
```REACT_APP_API_KEY=<insert api-key>```<br/>
Note: To obtain an api-key follow the instructions given in https://developer.nytimes.com/get-started<br/>

Once you have completed the instructions, enable 'Books API' from the created App in https://developer.nytimes.com/my-apps<br />
Copy the api key and replace ```<insert api-key>``` above with the api-key<br/>
  
<b>Step 5</b> : Install the following required dependencies<br/>
```npm install axios```
<br/>
```npm install react-bootstrap bootstrap```

<b>Step 6</b> Finally run <br/>
```npm start```

<br/>
<b>Screen shots of the application</b>

On selecting Hardcover fiction from the categories, the image below is displayed

![alt text](https://github.com/reyhhan/images/blob/main/NYT1.JPG?raw=true)
<br/>

On selecting Manga from the categories the image below is displayed

![alt text](https://github.com/reyhhan/images/blob/main/NYT3.JPG?raw=true)
<br/>

On clicking the 'View' button, the details of the selected book is displayed

![alt text](https://github.com/reyhhan/images/blob/main/NYT2.JPG?raw=true)
<br/>

On clicking the 'Buy' button, the web app proceeds to purchase from the Amazon website

![alt text](https://github.com/reyhhan/images/blob/main/NYT4.JPG?raw=true)


