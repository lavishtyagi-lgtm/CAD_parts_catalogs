import Express = require("express");
const userRouter = require('./routes/route')
const app = Express();
const Port:number = 8000;

//middle ware to parse json body
app.use(Express.urlencoded({extended : false}));
app.use(Express.json());

// Mount router on /api/parts
app.use('/api/parts',userRouter);

// Simple homepage route
app.get('/', (req, res) => {
  return res.send(`
    <html>
      <head></head>
      <body>
        <h1>Welcome to The Home Page Of CAD Parts Catalog</h1>
        <h2>Redirect to this following link: http://localhost:${Port}/api/parts</h2>
      </body>
    </html>
  `);
});

// Start server
app.listen(Port,()=> console.log(`server started at http://localhost:${Port} Port `));