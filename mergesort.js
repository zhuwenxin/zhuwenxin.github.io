/*
*思想:将原始数据切分成为较小的数组，直到每一个小数组只有一个位置，这个过程叫做分治。
*接着将小数组归并成为较大的数组，
*直到最后只有一个排序完毕的大数组，这个过程是归并。
*由于是分治法，所以归并排序也是递归的。
*/
function merge(left, right) {
  var tmp = [];
//合并的过程就是，每次从待合并的两个子数组中选取一个最小的元素，然后把这个元素放到合并后的数组中
  while (left.length && right.length) {
    if (left[0] < right[0])
      tmp.push(left.shift());
    else
      tmp.push(right.shift());
  }
  //当left和right中有一个为空时就和tmp连接起来
  return tmp.concat(left, right);
}

function mergeSort(a) {
  //如果数组里面只有1个元素，那么就不用进行排序了，直接返回数组：
  if (a.length === 1) 
    return a;
  //否则，就将数组从中间分成2个新的数组
  var mid = ~~(a.length / 2)
    , left = a.slice(0, mid)
    , right = a.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
