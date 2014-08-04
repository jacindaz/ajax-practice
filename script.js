function loadAJAX() {
    var request;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        // this line supports AJAX in older browsers
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open('GET', 'data.json');
    request.onreadystatechange = function() {
        if ((request.readyState===4) && (request.status===200)) {
            var items = JSON.parse(request.responseText);
            console.log(items);
            var output = '<ol>';

            for (var key in items) {
                output += '<li>' + items[key].reknown + '</li>';
                console.log("Key: " + key);
            }
            output += '</ol>';
            document.getElementById('update').innerHTML = output;
        }
    }
    request.send();
}
