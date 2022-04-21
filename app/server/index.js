const express = require("express");
const next = require("next");

const userRoutes = require("./routes/users");
const reviewsRoutes = require("./routes/reviews");
const categoriesRoutes = require("./routes/categories");
const cafesRoutes = require("./routes/cafes");

const PORT = 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({dev})
const handle = app.getRequestHandler();



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
        
    });