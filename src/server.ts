import app from "./config/app";

const PORT = 3000;

app.express.listen(PORT, (err) => {
    console.log('Express server listening on port ' + PORT);
});