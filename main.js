 //   1、找出元素 item 在给定数组 arr 中的位置
function indexOf(arr, item){
   var index = -1 
      for (var i in arr) {      
      if (arr[ i ] === item) {          
          index = i}  
      }  return index
};
 //    2、计算给定数组 arr 中所有元素的总和
function sum(arr) {
       return arr.reduce(function(prev, curr, idx, arr){       
           return prev + curr;
     });
}
 //     3、移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组 
function remove(arr, item) {
    return arr.filter(function(x) { return x !== item; });
}
 //     4、移除数组 arr 中的所有值与 item 相等的元素，直接在arr 数组上进行操作，并将结果返回
function removeWithoutCopy(arr, item) {
    for(var i in arr){
        while(arr[i]===item){
            arr.splice(i,1);
        }
    }
    return arr;
}
 //     5、在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组 
function append(arr, item) {
     var a = arr.slice(0);
     a.push(item);
     return a;
}
//6、删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
function truncate(arr) {
  return arr.slice(0,arr.length-1);
}
//7、在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组 
function prepend(arr, item) {
    return [item].concat(arr);   
}
//8、删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组 
function curtail(arr) {
  return arr.slice(1);
}
//9、合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组 
function concat(arr1, arr2) {
return arr1.concat(arr2)
}
//10、在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
function insert(arr, item, index) {
 var result = arr.slice(0);
    result.splice(index,0,item);
    return result;
}
//11、统计数组 arr 中值等于 item 的元素出现的次数 
function count(arr, item) {
     var count = 0;
     arr.forEach(function(e){
         e === item ? count++ : 0;
     });
     return count;
 }
//12、找出数组 arr 中重复出现过的元素
function duplicates(arr) {
    return arr.sort().filter(function(v,i,arr){
        return v!==arr[i-1]&&v===arr[i+1];
    });
}
//13、为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
function square(arr) {
    return arr.map(function(item,index,array){
        return item*item;
    })
}

//14、在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
    var posArr = [];
    for(var i in arr){
        if(target===arr[i]){
            posArr.push(i);
        }
    }  return posArr;
}
//15、实现一个打点计时器， 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1         2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作 3、第一个数需要立即输出
function count(start, end) {
  //立即输出第一个值
  console.log(start++);
     var timer = setInterval(function(){
         if(start <= end){
             console.log(start++);
         }else{
             clearInterval(timer);
         }
     },100);
     return {
         cancel : function(){
             clearInterval(timer);
         }
     };
 }
//16、将数组 arr 中的元素作为调用函数 fn 的参数
function argsAsArray(fn, arr) {
  return fn.apply(this, arr);
 }
//17、将函数 fn 的执行上下文改为 obj 对象
function speak(fn, obj) {
  return fn.apply(obj, obj);
}
//18、实现函数 functionFunction，调用之后满足如下条件：
//1、返回值为一个函数 f
//2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
//3、所有函数的参数数量为 1，且均为 String 类型 
function functionFunction(str) {
  var f = function(s){
         return str+", "+s;
     }
     return f;
 }

//19、实现函数 makeClosures，调用之后满足如下条件：（闭包）
//1、返回一个函数数组 result，长度与 arr 相同
//2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同 
function makeClosures(arr, fn) {
  var result = [];
     arr.forEach(function(e){
         result.push(function(num){
             return function(){
                 return fn(num);
             };
         }(e));
     });
     return result;
 }
//20、已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
//1、返回一个函数 result，该函数接受一个参数
//2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致 
function partial(fn, str1, str2) {
  var result = function(str3){
         return fn.call(this, str1, str2, str3);
     }
     return result;
 }
//21、函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题参数全部为 Number 类型，不需考虑参数转换
function useArguments() {
    var arr=Array.prototype.slice.call(arguments)//把arguments类数组转化为数组
    return eval(arr.join("+"));//求和
}
