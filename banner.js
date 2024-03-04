
//simpan ke dalam file adsx.js


var scripts = [
	"https://protocolsnappedimpure.com/23826e047dc3e6ed9c88031adbc67b97/invoke.js",
];

for (index = 0; index < scripts.length; ++index) {
    var script = document.createElement('script');
    script.src = scripts[index];
    script.type='text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            //promptForUserEntries();
        }
    };  
    document.getElementsByTagName("body")[0].appendChild(script);
}