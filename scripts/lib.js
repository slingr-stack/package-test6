exports.setMessage = function (msg) {
    return config.set("message",msg);
}

exports.getMessage = function () {
    return config.get("message");
}

exports.otherMessage = function () {
    return "8";
}

exports.other = function () {
    this.test();
}

exports.test = function () {
    var b = "msg"
    log(b)
    log(a)
    return "error test";
}

exports.test5 = function() {
    function ejemplo() {
        var x = 5;
    }

    try {
        log(x); // ReferenceError: x no está definido, ya que está fuera del alcance de la función
    } catch (error) {
        log(error);
    }
}

exports.test4 = function() {
    var resultado = 10 / 0; // Infinity
    log(resultado);
}

exports.AA = function() {
    log("Función AA");
    BB();
}

function BB() {
    log("Función BB");
    test4();
    test5();
}

exports.serviceTest = function (){
    var val = config.get("message");
    var response = svc.http.get({
        url: "https://postman-echo.com/get",
        params: {
            queryVal: val
        },
        headers: {
            key: "123"
        },
        forceDownload: false,
        downloadSync: false,
        fileName: "",
        fullResponse: false,
        connectionTimeout: "5000",
        readTimeout: "60000",
        defaultCallback: false
    });
    return JSON.stringify(response);
}

exports.serviceTest2 = function (){
    var val = config.get("message");
    var response = dependencies.http.get({
        url: "https://postman-echo.com/get",
        params: {
            queryVal: val
        },
        headers: {
            key: "123"
        },
        forceDownload: false,
        downloadSync: false,
        fileName: "",
        fullResponse: false,
        connectionTimeout: "5000",
        readTimeout: "60000",
        defaultCallback: false
    });
    return JSON.stringify(response);
}