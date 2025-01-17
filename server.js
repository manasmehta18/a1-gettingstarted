const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    case '/Images/bg.jpg':
      sendFile( response, 'Images/bg.jpg' )
      break
    case '/Images/Manas.jpg':
      sendFile( response, 'Images/Manas.jpg' )
      break
    case '/Images/wpi.png':
      sendFile( response, 'Images/wpi.png' )
      break
    case '/Images/2020.jpg':
      sendFile( response, 'Images/2020.jpg' )
      break
    case '/Scripts/NavBar.js':
      sendFile( response, 'Scripts/NavBar.js' )
      break
    case '/Scripts/typewriter.js':
      sendFile( response, 'Scripts/typewriter.js' )
      break
    case '/Scripts/jquery.js':
      sendFile( response, 'Scripts/jquery.js' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    file = content
    response.end( content, 'utf-8' )
  })
}

