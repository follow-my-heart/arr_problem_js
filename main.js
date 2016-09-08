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
