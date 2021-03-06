
//查询URL字符串参数
function getQueryStringArgs() {

    //取得查询字符串并去除开头的问号
    var qs = (location.search.length > 0 ? location.search.subString(1) : ''),

        //保存数据的对象
        args = {},

        //取得每一项
        items = qs.length ? qs.split('&') : '',
        item = null,
        name = null,
        value = null,

        //for循环使用的
        i = 0,
        len = items.length;
    for (i = 0; i < len; i++) {
        item = items[i].split('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);

        if (name.length) {
            args[name] = value;
        }
    }
    return args;
}
