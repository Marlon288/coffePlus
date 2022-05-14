require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();

const userRoutes = require("./server/routes/users");
const reviewsRoutes = require("./server/routes/reviews");
const categoriesRoutes = require("./server/routes/categories");
const cafesRoutes = require("./server/routes/cafes");

app.use(express.json());
//const handle = app.getRequestHandler();

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html')))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
    next();
  });
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.use('/assets', express.static(path.join(__dirname, '../public')))

app.use("/users", userRoutes);
app.use("/reviews", reviewsRoutes);
app.use("/cafes", cafesRoutes);
app.use("/categories", categoriesRoutes);


/*app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});*/



const PORT = process.env.PORT || 3000;
app.listen(PORT, ( ) => console.log(`Server started on port ${PORT}!`))

/*
app
    .prepare()
    .then(() =>{
        const server = express();

        server.use(express.static('public'));
        

        server.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
            next();
        });
        server.get("*", (req, res) =>{
            return handle(req, res);
        });

        server.use("/users", userRoutes);
        server.use("/reviews", reviewsRoutes);
        server.use("/cafes", cafesRoutes);
        server.use("/categories", categoriesRoutes);
        server.use(express.json());
        
        server.listen(PORT, err => {
            if(err) throw errl
            console.log('< Ready on 3000');
        })
    })
        .catch(ex => {
            console.error(ex.stack);
         process.exit(1);
        
    });*/