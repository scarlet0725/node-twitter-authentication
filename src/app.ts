import bodyParser from 'body-parser';
import * as express from 'express';

const PORT = process.env.PORT || 3000

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT)
}
)

export default app;