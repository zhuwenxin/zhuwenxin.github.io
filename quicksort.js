function quickSort(arr, start, end) {
 2     if (start > end) {
 3         return;
 4     }
 5     let i = start,
 6         j = end,
 7         pivot = arr[start]; //存放基准数
 8     while (i !== j) {
 9         // 从右边开始，找第一个小于基准的位置
10         while (arr[j] >= pivot && i < j) {
11             j--;
12         }
13         // 从左边开始，找第一个大于基准的位置
14         while (arr[i] <= pivot && i < j) {
15             i++
16         }
17         // 交换两个数
18         if (i < j) {
19             let tmp = arr[i];
20             arr[i] = arr[j];
21             arr[j] = tmp;
22         }
23     }
24     // 最后把基准数归位
25     arr[start] = arr[i];
26     arr[i] = pivot;
27     // 递归处理左边
28     quickSort(arr, start, i - 1);
29     // 递归处理右边
30     quickSort(arr, i + 1, end);
31 }
32 var arr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
33 quickSort(arr, 0, arr.length - 1);
34 console.log(arr);