var config = document.createElement( "script" ) ;
config.type = "text/x-mathjax-config" ;
config.appendChild( document.createTextNode( "MathJax.Hub.Config({tex2jax: {inlineMath: [ ['$','$'], ['\\\\(', '\\\\)'] ] }});" ) ) ;

document.head.appendChild(config) ;

var script = document.createElement( "script" ) ;
script.type = "text/javascript" ;
script.async="async" ;
script.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS_SVG" ;

script.appendChild( document.createTextNode('window.setInterval( function() { MathJax.Hub.Queue(["Typeset",MathJax.Hub]); }, 1000 ) ;') ) ;

document.head.appendChild(script) ;

