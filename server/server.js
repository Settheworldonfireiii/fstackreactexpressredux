import falcorRouter from 'falcor-router';
import routes from './routes.js';
import falcor from 'falcor';
import falcorExpress from 'falcor-express';
import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

 

const app = express();
app.server = http.createServer(app);
// CORS - 3rd party middleware
app.use(cors());
// This is required by falcor-express middleware
//to work correctly with falcor-browser
app.use(bodyParser.json({extended: false}));


app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
return new falcorRouter(routes);
}));
app.use(express.static('dist'));
app.get('/', (req, res) => {
Article.find( (err, articlesDocs) => {
const ourArticles = articlesDocs.map((articleItem) => {return `<h2>${articleItem.articleTitle}</h2>
${articleItem.articleContent}`;
}).join('<br/>');
res.send(`<h1>Publishing App Initial Application!</h1>
${ourArticles}`);
});
});


app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);
export default app;