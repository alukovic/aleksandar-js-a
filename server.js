/*
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/html' });
    fs.readFile('index.html', function(error, data)
    {
        if(error)
        {
            response.writeHead(404);
            response.write('Greška 404: Stranica nije pronađena. ')
        }
        else
        {
            response.write(data);
        }

        response.end();

    }

    );

}
)

server.listen(port, function(error)

{
    if(error)
    {
        console.log('Greška', error)
    }
    else 
    {
        console.log('Server je pokrenut na portu', + port) 
    }
}

)
*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('sajt'))
app.listen(3000)