#使用方法
>shake(規則字串);

#規則
u: 大寫英文字母

l: 小寫英文字母

d: 阿拉伯數字

>如無規則字串則回傳一個大寫英文字母、兩個小寫英文字母、三個阿拉伯數字同 shake('u1l2d3')

#範例
回傳三個隨機大寫英文字母

>shake('u3');

回傳一個隨機小寫英文字母
>shake('l1');

回傳四個隨機阿拉伯數字
>shake('d4');

回傳兩個隨機小寫英文字母、一個阿拉伯數字
>shake('l2d1');

#材料包
大寫英文字母

>upperPackage = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

小寫英文字母

>lowerPackage = "abcdefghijklmnopqrstuvwxyz";

阿拉伯數字

>digitalPackage = "0123456789";
