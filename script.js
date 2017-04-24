var script = document.createElement( "script" ) ;
script.type = "text/javascript" ;
script.async="async" ;
script.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_CHTML" ;
script.appendChild( document.createTextNode('window.setInterval( function() { MathJax.Hub.Queue(["Typeset",MathJax.Hub]); }, 5000 ) ;') ) ;


document.head.appendChild(script) ;

