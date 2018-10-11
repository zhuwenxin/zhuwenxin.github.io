function merge(left, right) {
  var tmp = [];

  while (left.length && right.length) {
    if (left[0] < right[0])
      tmp.push(left.shift());
    else
      tmp.push(right.shift());
  }

  return tmp.concat(left, right);
}

function mergeSort(a) {
  //如果数组长度小于1，那么就不用进行排序了，直接返回数组：
  if (a.length === 1) 
    return a;

  var mid = ~~(a.length / 2)
    , left = a.slice(0, mid)
    , right = a.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
