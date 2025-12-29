import http from 'http';

const usersMock = ['foo', 'bar', 'baz'];

const server = http.createServer((req, res) => {
    const {method, url} = req;

    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write(`<body>
            <h1>Hello World!</h1>
            <form method="POST" action="/create-user"><input name="username" placeholder="Enter username:"><button type="submit">Save</button></form>
            </body>`)
    } else if (url === '/users') {
        res.write(`<body><ul>${usersMock.map(user => `<li>${user}</li>`).join('')}</ul></body>`)
    } else if (url === '/create-user' && method === 'POST') {
            const payload = [];

            req.on('data', (chunk) => {payload.push(chunk)});
            return req.on('end', () => {
                const parsedPayload = Buffer.concat(payload).toString().split('=')[1];
                console.log(`New user created with username: ${parsedPayload}`);

                res.writeHead(302, {'Location': '/'});
                res.end();
            })
    } else {
        res.write(`<body><h1>404 Page not found<h1></body>`)
    }
    res.end();
});

server.listen(3000);