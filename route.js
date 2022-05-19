var url = require('url');
var fs = require('fs');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');




// app.use(express.static(__dirname));

const port = 9000;
server.listen(port, () => console.log(`running @${port}`));

app.get('/', function (req, res)
{
    res.render('index.html');
});

app.get('/sign-in', function (req, res)
{
    res.render('sign-in.html');
});

app.get('/sign-up', function (req, res)
{
    res.render('sign-up.html');
});

app.get('/dashboard', function (req, res)
{
    res.render('dashboard.html');
});

app.get('/plan', function (req, res)
{
    res.render('signed-up-plan.html');
});

app.get('/invest', function (req, res)
{
    res.render('signed-up-invest.html');
});

app.get('/reset', function (req, res)
{
    res.render('reset-pwd.html');
});

app.get('/forgot-password', function (req, res)
{
    res.render('forgot-pwd.html');
});

app.get('/about', function (req, res)
{
    res.render('about.html');
});
app.get('/faq', function (req, res)
{
    res.render('faq.html');
});
//   app.use('/',function handleRequest(request, response) {
//     function gup( name, url ) {
//         if (!url) url = location.href;
//         name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
//         var regexS = "[\\?&]"+name+"=([^&#]*)";
//         var regex = new RegExp( regexS );
//         var results = regex.exec( url );
//         return results == null ? null : results[1];
//     }
//     function renderHTML(path, response,params="") {
//         console.log(__dirname + " " + path)
//         fs.readFile(path, null, function(error, data) {
//             if (error) {
//                 response.writeHead(404);
//                 response.write('File not found!');
//             } else {
//                 response.writeHead(200, {'Content-Type': 'text/html'});
//                 response.write(data);
//             }
//             response.end();
//         });
//     }

//       var path = url.parse(request.url).pathname;
//       plan = gup('plan',request.url)
//       console.log("path: ",path);
//       if(path == "/invest"){
//         renderHTML('signed-up-invest.html?plan='+plan, response);
//         return;
//       }
    //   switch (path) {
    //       case '/':
    //           renderHTML('index.html', response);
    //           break;
    //           case '/sign-in':
    //           renderHTML('sign-in.html', response);
    //           break;
    //           case '/about':
    //             renderHTML('about.html', response);
    //             break;
    //             case '/faq':
    //                 renderHTML('faq.html', response);
    //                 break;
    //           case '/sign-up':
    //           renderHTML('sign-up.html', response);
    //           break;
    //       case '/dashboard':
    //           renderHTML('dashboard.html', response);
    //           break;
    //       case '/plan':
    //           renderHTML('signed-up-plan.html', response);
    //           break;
    //       default:
    //         renderHTML('index.html', response);
    //   }
//   })

