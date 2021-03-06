const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync("src/api/json/db.json", "UTF-8"));

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";
const expiresIn = "1h";

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, {expiresIn});
}

function isAuthenticated({email, password}) {
    return (
        userdb.users.findIndex((user) => user.email === email && user.password === password) !== -1
    );
}

server.post("/api/auth/register", (req, res) => {
    const {name, birthday, email, password} = req.body;
    if(isAuthenticated({email, password})){
        const status = 401;
        const message = "Email & Password already exist";
        res.status(status).json({status, message});
        return;
    }

    fs.readFile("src/api/json/db.json", (err, data) => {
        if(err) {
            const status = 401;
            const message = err;
            res.status(status).json({status, message});
            return;
        }

        data = JSON.parse(data.toString());
        let last_item_id =  data.users.length === 0 ? 0 : data.users[data.users.length - 1].id

        data.users.push({name: name, birthday: birthday, email: email, password: password, id: last_item_id + 1});

        let writeData = fs.writeFile("src/api/json/db.json", 
        JSON.stringify(data),
        (err, result) => {
            if(err) {
                const status = 401;
                const message = err;
                res.status(status).json({status, message});
                return;
            }
        }
        )
    });

    const access_token = createToken({email, password});
    res.status(200).json({access_token});
})

server.post("/api/auth/login", (req, res) => {
    const {email, password} = req.body;

    if(!isAuthenticated({email, password})){
        const status = 401;
        const message = "Incorrect email or Password";
        res.status(status).json({status, message});
        return;
    }

    const access_token = createToken({email, password});
    res.status(200).json({access_token});
})

server.listen(5000, () => {
    console.log("JSON server is running");
})