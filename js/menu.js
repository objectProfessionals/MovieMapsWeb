var path = location.pathname;
var current = location.href.split("/").slice(-1);
function getActive(page) {
	if (page == current) {
		return 'class="active"';
	} else if (page.replace("s.html", ".html") == current[0].split("?")[0]) {
		return 'class="active"';
	} else {
		return '';	
	}
}
document.write('<!-- Fixed navbar -->');
document.write('<nav class="navbar navbar-default navbar-fixed-top" role="navigation">');
document.write('  <div class="container">');
document.write('    <div class="navbar-header">');
document.write('      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">');
document.write('        <span class="sr-only">Toggle navigation</span>');
document.write('        <span class="icon-bar"></span>');
document.write('        <span class="icon-bar"></span>');
document.write('        <span class="icon-bar"></span>');
document.write('      </button>');
document.write('    </div>');
document.write('    <div id="navbar" class="navbar-collapse collapse">');
document.write('      <ul class="nav navbar-nav">');
document.write('        <li '+getActive('index.html')+'><a href="index.html">Home</a></li>');
document.write('        <li '+getActive('movies.html')+'><a href="movies.html">Movie Maps</a></li>');
document.write('        <li '+getActive('palettes.html')+'><a href="palettes.html">Colour Palettes</a></li>');
document.write('		<li '+getActive('cart.html')+'id="cartMenu"><a href="cart.html">Cart</a></li>');
document.write('        <li '+getActive('about.html')+'><a href="about.html">About</a></li>');
document.write('        <li '+getActive('contact.html')+'><a href="contact.html">Contact</a></li>');
document.write('      </ul>');
document.write('      <ul class="nav navbar-nav navbar-right">');
document.write('        <li><a href="cart.html"><span id="cartIcon" class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></a></li>');
document.write('      </ul>');
document.write('    </div><!--/.nav-collapse -->');
document.write('  </div>');
document.write('</nav>');
