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
        var modify = document.getElementById('update');
        // innerHTML is the element inside the selected elemtn
        // which in this case, is the 'update' id
        modify.innerHTML = request.responseText;
    }
}
request.send();
