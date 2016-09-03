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
