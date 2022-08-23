var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql2');
const sendSms = require('./twilio');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// connection configurations
var dbConn = mysql.createConnection({
    host: '43.204.134.14',
    user: 'lapinozpizza',
    password: 'L4oPeMEQtXrqzvD',
    database: 'lapinozpizza'
});


// connect to database
dbConn.connect();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Welcome to Lapinoz pizza' })
});




app.post('/login', (req, res) => {
    const  phone  = req.params.phone;

    const welcomeMessage = 54875;
    return res.send(sendSms(phone,welcomeMessage));

  });

// Retrieve all Cities  
app.get('/cities', function (req, res) {
    dbConn.query('SELECT * FROM Cities', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Cities list.' });
    });
});

// Retrieve Cities with id 
app.get('/cities/:city_id', function (req, res) {
    let cities_id = req.params.city_id;
    if (!cities_id) {
        return res.status(400).send({ error: true, message: 'Please provide City_id' });
    }
    dbConn.query('SELECT * FROM Cities where city_id=?', cities_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Cities list.' });
    });
});


app.get('/citybyname/:city_name', function(req,res) {
    let city_name = req.params.city_name;
    dbConn.query('SELECT * FROM cities WHERE city_name LIKE ?',city_name+'%', function(error,results,fields){
        if (error) throw error;
        console.log(res);
        return res.send({ error: false,data: results, message: 'citybyname'});
    });
});

app.get('/outlets', function(req,res){
   
    dbConn.query('SELECT * FROM outlet', function(error,results,fields){
        if (error) throw error;
        return res.send({ error: false,data: results, message: 'Outlets'});
    });
});

app.get('/categories',function(req,res){
    dbConn.query('SELECT * FROM Category', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Category list.' });
    });
});
app.get('/products',function(req,res){
    dbConn.query('SELECT * FROM Product', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Category list.' });
    });
});
app.get('/categories/:CategoryId', function (req, res) {
    let CategoryId = req.params.CategoryId;
    if (!CategoryId) {
        return res.status(400).send({ error: true, message: 'Please provide CategoryId' });
    }
    dbConn.query('SELECT * FROM Category where CategoryId=?', CategoryId, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results[0], message: 'Category' });
    });
});
app.get('/categories/:CategoryId/count', function (req, res) {
    let CategoryId = req.params.CategoryId;
    if (!CategoryId) {
        return res.status(400).send({ error: true, message: 'Please provide CategoryId' });
    }
    dbConn.query('SELECT COUNT(ProductId) AS id_count FROM Product WHERE CategoryId=?', CategoryId, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Category count' });
    });
});

app.get('/categories/:CategoryId/Product',function(req,res){
    let CategoryId = req.params.CategoryId;
    if (!CategoryId) {
        return res.status(400).send({ error: true, message: 'Please provide CategoryId' });
    }
    dbConn.query('SELECT * FROM Product WHERE CategoryId=?',CategoryId, function(error,results,fields){
        if (error) throw error;
        return res.send({ error: false,data: results, message: 'Products'});
    });
});

app.get('Product?categories=<CategoryId>', function(err, data, res) {
    dbConn.query('SELECT * FROM Product WHERE CategoryId=?',CategoryId, function(error,results,fields){
        if (error) throw error;
        console.log(res);
        return res.send({ error: false,data: results, message: 'Products'});
    });
});

app.get('/productbyname/:ProductName', function(req,res) {
    let ProductName = req.params.ProductName;
    dbConn.query('SELECT * FROM Product WHERE ProductName LIKE ?',ProductName+'%', function(error,results,fields){
        if (error) throw error;
        console.log(res);
        return res.send({ error: false,data: results, message: 'productbyname'});
    });
});
app.post('/Checkout',function(req,res){
    let ProductId =  req.body.ProductId;
    let Amount = req.body.Amount;
    let ProductName = req.body.ProductName;
    let quantity = req.body.quantity;
    if(!ProductId && !Amount && !ProductName && !quantity) {
        return res.status(400).send({ error: true, message: 'Please provide product_id' });
    }
    dbConn.query('INSERT INTO orders SET ?',{ProductId : ProductId,Amount : Amount,ProductName : ProductName,quantity : quantity}, function(error, results, fields){ 
        if(error) throw error;
        return res.send({ error: false, data: results, meassge: 'Add to checkout'});
    });
})
app.post('/categoryadd',function (req,res) {
    let ListingSeqNo = req.body.ListingSeqNo;
    let Categoryname = req.body.Categoryname;
    
    if(!ListingSeqNo && !Categoryname) {
        return res.status(400).send({ error: true, message: 'Please provide Fileds' });
    }
    dbConn.query('INSERT INTO Category SET ?', {ListingSeqNo : ListingSeqNo,Categoryname : Categoryname}, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New Category has been added successfully.' });
    });
});
app.post('/productadd',function (req,res) {
    let Amount = req.body.Amount;
    let ProductName = req.body.ProductName;
    let ProductDescripation = req.body.ProductDescripation;
    let ProductPicture = req.body.ProductPicture;
    let CategoryId = req.body.CategoryId;
    
    if(!Amount && !ProductName && !ProductDescripation && !ProductPicture && !CategoryId) {
        return res.status(400).send({ error: true, message: 'Please provide Fileds' });
    }
    dbConn.query('INSERT INTO Product SET ?', {Amount : Amount,ProductName : ProductName,ProductDescripation: ProductDescripation,ProductPicture: ProductPicture,CategoryId: CategoryId}, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New Product has been added successfully.' });
    });
});



app.delete('/deletecategory',function(req,res){
    let CategoryId = req.body.CategoryId;

    if(!CategoryId){
        return res.status(400).send({ error: true, message: 'Please provide CategoryId' });
    }
    dbConn.query('DELETE FROM Category WHERE CategoryId = ?', [CategoryId], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Category has been deleted successfully' });
    });
});

app.delete('/deleteproduct',function(req,res){
    let ProductId = req.body.ProductId;

    if(!ProductId){
        return res.status(400).send({ error: true, message: 'Please provide ProductId' });
    }
    dbConn.query('DELETE FROM Product WHERE ProductId = ?', [ProductId], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Product has been deleted successfully' });
    });
});

app.post('/cart',function (req,res) {
    let ProductId =  req.body.ProductId;
    let Amount = req.body.Amount;
    let ProductName = req.body.ProductName;
    let quantity = req.body.quantity;
    if(!ProductId && !Amount && !ProductName) {
        return res.status(400).send({ error: true, message: 'Please provide product_id' });
    }
    dbConn.query('INSERT INTO Cart SET ?', {ProductId : ProductId,Amount : Amount,ProductName : ProductName,quantity : quantity}, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New product has been added successfully.' });
    });
});

app.get('/Cart',function(req,res){
    dbConn.query('SELECT * FROM Cart', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Cart list.' });
    });
});

app.put('/quantityPlus',function (req,res) {
    let ProductId = req.body.ProductId;
    let quantity = req.body.quantity;
    if( !ProductId || !quantity){
        return res.status(400).send({ error: true, message: 'Please provide ProductId and quantity'});
    }
    dbConn.query('UPDATE Cart SET quantity = quantity + 1 WHERE ProductId=?', [ProductId, quantity], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'quantity has been update successfully'});
    });
});

app.put('/quantityMinus',function (req,res) {
    let ProductId = req.body.ProductId;
    let quantity = req.body.quantity;
    if( !ProductId || !quantity){
        return res.status(400).send({ error: true, message: 'Please provide ProductId and quantity'});
    }
    dbConn.query('UPDATE Cart SET quantity = quantity - 1 WHERE ProductId=?', [ProductId, quantity], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'quantity has been update successfully'});
    });
});

app.put('/updatecategoty', function(req,res){
    let ListingSeqNo = req.body.ListingSeqNo;
    let Categoryname = req.body.Categoryname;
    
    if(!ListingSeqNo && !Categoryname) {
        return res.status(400).send({ error: true, message: 'Please provide Fileds' });
    }
    dbConn.query('UPDATE Category SET ListingSeqNo = ?,Categoryname=?'[ListingSeqNo,Categoryname], function(error, results,field){
        if (error) throw error;
        return res.status({ error: false, data: results, message: 'Category has been updated successfully'});
    });
});

app.delete('/quantityzero',function(req,res){
    let ProductId = req.body.ProductId;
    let quantity = req.body.quantity;
    if(quantity === 0){
        dbConn.query('DELETE FROM Cart WHERE ProductId = ?', [ProductId,quantity], function (error, results, fields) {
            if (error) throw error;
            return res.send({ error: false, data: results, message: 'Product has been deleted successfully' });
        });
    }
});


// Insert new City
app.post('/city',function (req,res) {
    let city =  req.body.city;
    if(!city) {
        return res.status(400).send({ error: true, message: 'Please provide city' });
    }
    dbConn.query('INSERT INTO Cities SET ?', {city : city}, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'New city has been created successfully.' });
    });
});
// Update City 
app.put('/city',function (req,res) {
    let cities_id = req.body.cities_id;
    let city = req.body.city;
    if( !cities_id || !city){
        return res.status(400).send({ error: true, message: 'Please provide city and city_id'});
    }
    dbConn.query('UPDATE Cities SET city = ? WHERE ', [city, cities_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'city has been update successfully'});
    });
});

// Delete city
app.delete('city', function (req, res) {
    let cities_id = req.body.cities_id;
    if (!cities_id) {
        return res.status(400).send({ error: true, message: 'Please provide city_id' });
    }
    dbConn.query('DELETE FROM Cities WHERE id = ?', [cities_id], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'city has been deleted successfully' });
    });
});

app.get('/search', function(req, res) {
    dbConn.query('SELECT ProductName FROM Product WHERE ProductName LIKE "%' + req.query.term + '%"',
    function(err, rows, fields) {
    if (err) throw err;
    var data = [];
    for (i = 0; i < rows.length; i++) {
    data.push(rows[i].ProductName);
    }
    res.end(JSON.stringify(data));
    });
});


// set port
app.listen(process.env.port || 5000, function () {
    console.log('Node app is running on port' + process.env.port);
});
module.exports = app;
