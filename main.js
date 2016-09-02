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
