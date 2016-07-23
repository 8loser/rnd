function shake(rule) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var digital = "0123456789";
    var upperPattern = /u(\d+)/i;
    var lowerPattern = /l(\d+)/i;
    var digitalPattern = /d(\d+)/i;
    //預設
    var upperCount = 0;
    var lowerCount = 2;
    var digitalCount = 1;
    if (rule) {
        if (upperPattern.test(rule)) {
            var upperCount = upperPattern.exec(rule)[1];
        }
        if (lowerPattern.test(rule)) {
            var lowerCount = lowerPattern.exec(rule)[1];
        }
        if (digitalPattern.test(rule)) {
            var digitalCount = digitalPattern.exec(rule)[1];
        }
    }
    var upperString = "";
    for (var i = 0; i < upperCount; i++) {
        upperString += upper.charAt(Math.floor(Math.random() * upper.length));
    }
    var lowerString = "";
    for (var i = 0; i < lowerCount; i++) {
        lowerString += lower.charAt(Math.floor(Math.random() * lower.length));
    }
    var digitalString = "";
    for (var i = 0; i < digitalCount; i++) {
        digitalString += digital.charAt(Math.floor(Math.random() * digital.length));
    }
    var resultArray = (upperString + lowerString + digitalString).split('');
    var result = [];
    while (resultArray.length > 0) {
        i = Math.floor(Math.random() * resultArray.length);
        result.push(resultArray[i]);
        resultArray.splice(i, 1);
    }
    returl result.join('');
}
