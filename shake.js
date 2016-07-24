/**
 * @desc 取得隨機字串
 * @param string $rule - 規則; u:大寫英文字母, l:小寫英文字母, d:阿拉伯數字
 *  example: 
        shake() - 預設隨機取出一個大寫英文字母, 兩個小寫英文字母, 三個阿拉伯數字
        shake('u3d2') - 隨機取得三個大寫英文字母, 兩個阿拉伯數字
 * @return string - 依規則取出的字元組合
 */
function shake(rule) {
    //材料包
    var upperPackage = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //大寫英文字母
    var lowerPackage = "abcdefghijklmnopqrstuvwxyz"; //小寫英文字母
    var digitalPackage = "0123456789"; //阿拉伯數字
    if (!rule) {
        //default 1 upper, 2 lower, 3 digital
        var upperCount = 1;
        var lowerCount = 2;
        var digitalCount = 3;
    }
    else {
        var upperPattern = /u(\d+)/i;
        var lowerPattern = /l(\d+)/i;
        var digitalPattern = /d(\d+)/i;
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
    var upperString = getMaterial(upperPackage, upperCount);
    var lowerString = getMaterial(lowerPackage, lowerCount);
    var digitalString = getMaterial(digitalPackage, digitalCount);
    return stirring(upperString + lowerString + digitalString);
}
/**
 * @desc 取得材料(隨機取得數個字串內的字元)
 * @param string $package - 材料包(要隨機取得的來源字串)
 * @param int $count - 數量(要取出字元個數)
 * @return string - 隨機取出的字元組合
 */
function getMaterial(package, count) {
    var material = "";
    for (var i = 0; i < count; i++) {
        material += package.charAt(Math.floor(Math.random() * package.length));
    }
    return material;
}
/**
 * @desc 攪拌字串(隨機排序字串)
 * @param string $material - 材料(要隨機排序的字串)
 * @return string - 隨機排序後的字串
 */
function stirring(material) {
    var materialArray = material.split('');
    var result = [];
    while (materialArray.length > 0) {
        i = Math.floor(Math.random() * materialArray.length);
        result.push(materialArray[i]);
        materialArray.splice(i, 1);
    }
    return result.join('');
}
