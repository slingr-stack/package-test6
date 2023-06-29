exports.setMessage = function (msg) {
    return config.set("message",msg);
}

exports.getMessage = function () {
    return config.get("message");
}

exports.packageName = function () {
    return "package666";
}

exports.versionDep = function () {
    var versionResponse = "Version response: " + dependencies.versionTest.versionLib.versionValue();
    return versionResponse;
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