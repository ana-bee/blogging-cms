var express = require('express');
var handlebars = require('express-handlebars');
var sass = require('node-sass');

// Express setup
var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

// Handlebars setup
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sass setup
// sass.render({
//     file
// });

app.listen(app.get('port'), function() {
    console.log('Blogging CMS started on http://localhost:' + app.get('port'));
});