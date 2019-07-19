let kits = {};
// 封装一个固定格式的时间
kits.formateDate = function () {
    let date = new Date();
    let y = date.getFullYear();
    let M = date.getMonth() + 1;
    let d = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    M < 10 ? M = '0' + M : M;
    d < 10 ? d = '0' + d : d;
    h < 10 ? h = '0' + h : h;
    m < 10 ? m = '0' + m : m;
    s < 10 ? s = '0' + s : s;
    return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
}
// 封装一个获得[n,m]之间的随机整数
kits.ranDomInt = function(n,m){
    return Math.floor(Math.random() * (m - n +1) + n);
}
/*
    封装一个生成唯一id的方法
*/
kits.primaryKey = function(){
    let now = Date.now();//获取当前毫秒数
    // 为了防止在1毫秒之内生成的id有多个，再次加上一个大范围的随机数
    let r = kits.ranDomInt(100000,999999);
    // 把得到的两个结果拼接起来
    return now + '' + r;


// 新增一个获取本地数据的方法

kits.getLocalArr = function(){
    let jsonStr = localStorage.getItem(key);
    let arr;
    if(jsonStr === null){
        arr = [];
    }else{
        arr = JSON.parse(jsonStr);
    }
    return arr;
}
