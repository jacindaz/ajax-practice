var request;

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    // this line supports AJAX in older browsers
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open('GET', 'data.txt');
request.onreadystatechange = function() {
    if ((request.readyState===4) && (request.status===200)) {
        // this grabs the <ul> lists
        // then takes only the index[1] list (so the 2nd list)
        // and then finds the index[2] (or 3rd) <li> element of that list
        var modify =
            document.getElementsByTagName('li')

        for (var i = 0; i < modify.length; i++) {
            modify[i].innerHTML =
                request.responseText;
        }
    }
}
request.send();
