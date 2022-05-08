var url = require('url');
var fs = require('fs');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);


app.use(express.static(__dirname));

const port = 9000;
server.listen(port, () => console.log(`running @${port}`));


  app.use('/',function handleRequest(request, response) {
    function renderHTML(path, response) {
        console.log(__dirname + " " + path)
        fs.readFile(path, null, function(error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found!');
            } else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data);
            }
            response.end();
        });
    }

      var path = url.parse(request.url).pathname;
      console.log("path: ",path);
      switch (path) {
          case '/':
              renderHTML('index.html', response);
              break;
              case '/sign-in':
              renderHTML('sign-in.html', response);
              break;
              case '/about':
                renderHTML('about.html', response);
                break;
                case '/faq':
                    renderHTML('faq.html', response);
                    break;
              case '/sign-up':
              renderHTML('sign-up.html', response);
              break;
          case '/dashboard':
              renderHTML('dashboard.html', response);
              break;
          case '/plan':
              renderHTML('signed-up-plan.html', response);
              break;
              case '/invest':
                renderHTML('signed-up-invest.html', response);
                break;
          default:
            renderHTML('index.html', response);
      }
  })

