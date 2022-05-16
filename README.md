# CoffeePlus
Not sure if the cafe around the corner has lactose-free milk or uses fairtrade coffee? This app will help you find cafes on desired criteria.

### Content
- index.html - Product website with information
- login.html - Login to your existing account here
- signUP.html - Sign up for a new account here
- cafes.html - Put in a location and select your criteria. Once you selected a location from Cafes in the area( 0.1 difference in latitude and longitude, roughly 11km) will show. The database only has a few Cafes, they are all near Cologne, Germany.


### 1

My web application is split up into two main sites. The first site (index.html) is meant to give the user a description of the application and is more of a portfolio for that app.
There is the possibility for the user to get in touch with me, but that part does not work, because it is not set up to send an automatic email with the contents to me, due to me not owning an email server. From the small information site, the user can navigate easily to the application on the "app" tab. There he is first prompted to enter his login credentials. If they have credentials, you can enter them and move to the actual application; If you don't have them, you can click on Sign Up at the bottom of the form and get redirected to the register page. There you can easily make an account after providing the necessary information and clicking on "Sign up". After registering the user is able to move onto the application with their newly created credentials. Now he is presented with a minimalistic appearance of a basic search bar and an option to show filter criteria. After the user  has selected the location he wants to search for cafes, search results pop up based on the criteria given by the user. Those are also updated whenever the user changes the filter parameters(either category or different location). Since I do not have data of actual cafes everywhere, I had to improvise and make data up myself. All cafes are in my home city of Cologne, Germany. That means if you want search results, you need to input Cologne, Germany as the location. I plan on populating the database with actual content, but for now the samples have to do.
For the future, I also want to add a map with location pointers like on the airBnB website to have it better visulized for the user. The search results are put into responsive generated cards with their respective categories and a star rating. The user is now able to hover over the stars and click on their evaluation of stars for that cafe. If they have already given a review, the old one is updated. All parts of the application are responsive and can be displayed on every device size.

### 2
Indicate any bugs or issues you have with your project
As far as I am concerned, the project does not have major bugs or issues. In the past, I have used React for the application and to display a map. After trying to connect everything to the backend and exposing a lot of hard to solve problems, I decided to scrap that part and make a new sleek frontend. Another issue lies in the reviewing proccess, the stars do not update right away. Meaning there needs to be another search query for the reviews to display the proper average number of stars.

### 3
Technologies used:

Frontend
- HTML
- CSS(Bootstrap)
- JavaScript(JQuery, Tippy, Google Places API for autocomplete)

Backend
- MySQL(Database)
- NodeJS
- Nodemon
- Express
- MySQL2(Library)
- dotenv

Other
- Github
- Atom
- VS Code
- MySQL Workbench

### 4
The ER-Diagramm is in the root folder of the repository.

### 5
How to install/use the application:
Create .env file with the respective values for following variables:
                MYSQL_USERNAME = "YOURUSERNAME"
                MYSQL_PSWD = "YOURPASSWORD"
                MYSQL_HOST = "localhost"
                MYSQL_DB = "NAMEOFTHEIMPORTEDDATABASE"
Furthermore, download and upload the sql files in the Database folder for a correct working application.
Run "npm install" in the command prompt in the projects directory to download all the dependencies.
To start a server run "npm run dev".

### 6

The screenshots are found in the Screenshots folder. Their names are very descriptive and describe what they are showing.
