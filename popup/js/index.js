document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("open").addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {}, function (msg) {
                var parser = new URL(tabs[0].url);
                var version = document.getElementById("os_versions").options[document.getElementById('os_versions').selectedIndex].value;

                var path = "";
                parser.pathname.split("/").forEach(function (s, i) {
                    if (i !== 0 && i !== 1) {
                        path += "/" + s;
                    }
                });

                var url = parser.protocol + "//" + parser.host + parser.pathname.split("-")[0] + "-" + version + path + parser.search + parser.hash;

                window.open(url, '_blank');
            });
        });
    });
});