// 5.1 reverses

function reversesForEach(arr) {
    let arrReverses = [];
    arr.forEach((el) => {
      arrReverses.unshift(el);
    });
    console.log(arrReverses);
  }
  
  function reversesReduce(arr) {
    let arrReverses = [];
    return arr.reduce((prev, curr) => {
      console.log("đây là prev :" + prev);
      console.log("đây là curr :" + curr);
      return [curr, ...prev];
    }, []);
  }
  //   let arr = [1, 2, 3, 4, 5];
  //   console.log(reversesReduce(arr));
  
  // 5.2 chunk
  
  function chunk(arr, k) {
    let arrChunk = [];
    for (let i = 0; i < arr.length; i++) {
      arrChunk.push(arr.slice(i, i + k));
    }
  }
  
  // let arr = [1, 2, 3, 4, 5];
  // let k = 2;
  // console.log(chunk(arr));
  
  //  5.3 uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.
  // Ví dụ [1, 2, 3, 2, 4] 👉 [1, 2, 3, 4]
  
  function uniq(arr) {
    let newarr = new Set(arr);
    let uniq = Array.from(newarr);
    return uniq;
  }
  
  let arr = [1, 2, 3, 2, 4];
  uniq(arr);
  //5.4 uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
  // [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'y': 2, 'x': 1 }]
  
  function uniqObjects(arr) {
    const seen = new Set();
  
    return arr.filter((item) => {
      const sortedItem = Object.keys(item)
        .sort()
        .reduce((obj, key) => {
          obj[key] = item[key];
          console.log(obj);
          return obj;
        }, {});
  
      const jsonItem = JSON.stringify(sortedItem);
  
      if (seen.has(jsonItem)) {
        return false;
      }
  
      seen.add(jsonItem);
      return true;
    });
  }
  
  const arrObj = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { y: 2, x: 1 },
  ];
  
  const result = uniqObjects(arrObj);
  console.log(result);
  
  // 5.5 Group by: Cho đầu vào là 1 collection ( array of object ),
  // Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định.
  
  function groupBy(collection, key) {
    return collection.reduce((result, item) => {
      const keyValue = item[key];
      // console.log(item[key]);
      if (!result[keyValue]) {
        result[keyValue] = [];
        // console.log(result[keyValue]);
      }
      result[keyValue].push(item);
      return result;
    }, {});
  }
  
  const collection = [
    { a: 1, b: 2 },
    { a: 1, b: 3 },
    { a: 2, b: 2 },
  ];
  console.log(groupBy(collection, "a"));
  
  // 5.6 TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.
  // VD:
  // “    hello     world    “ 👉 “hello world"
  // “   I    am    good      “ 👉 “I am good”
  
  function TrimAll(str) {
    let arrStr = str.trim(); // loại bỏ khỏng trống 2 đầu.
    let newArr = arrStr.split(" ");
    let filterWord = newArr.filter((word) => word.length > 0);
    return filterWord.join(" ");
  }
  
  let str = "    hello     world    ";
  TrimAll(str);
  
  // 5.7 MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
  // Ví dụ
  // keys = [‘b', ‘a', ‘c']
  // collections = [{a: 1, b: 1, c: 2, d: 4, e: 5}, {a: 2, b:1, c: 5, d: 4, e: 5}, {d: 4, e: 5, a: 22, b:11, c: 51, }]
  // 👉 [{b: 1, a: 1, c: 2}, {b: 1, a: 2, c: 5}, {b: 11, a: 22, c: 51}]
  
  function mapKey(keys, objects) {
  
    return objects.map((obj) => {
      const sortedObj = {};
      keys.forEach((key) => {
        if (obj.hasOwnProperty(key)) {

          sortedObj[key] = obj[key]; 
        }
      });
      return sortedObj; 
    });
  }
  keys = ["b", "a", "c"];
  objects = [
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 },
  ];
  console.log(mapKey(keys, objects));
  
  // 5.8 Switch Order: Viết function để thay đổi thứ tự order của các object.
  function switchOrder(id, neword) {
    let arr = [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ];
    let targetIdx = arr.findIndex((el) => el.id === id);
  
    if (targetIdx === -1) {
      return arr;
    }
  
    let targetObj = arr[targetIdx];
  
    arr.splice(targetIdx, 1);
  
    arr.splice(neword, 0, { ...targetObj, order: neword });
  
    return arr.map((obj, index) => ({ ...obj, order: index }));
  }
  console.log(switchOrder(9, 1));
  
  // 5.9 SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
  // Ví dụ:
  // Arr = [{a: 2, b: 10}, {a: 12, c: 11}, {a: 8, b: 14, d: 20}, {a: ‘8’}]
  // 👉 {a: 30, b: 24, c: 11, d: 20}
  // Đầu vào là một mảng các object và các phần tử trong object không cố định.
  
  function sumAll(arr) {
    return arr.reduce((accumulator, curr) => {
      Object.keys(curr).forEach((key) => {
        let value = Number(curr[key]);
        if (accumulator[key]) {
          accumulator[key] += value;
          console.log(key + ": " + accumulator[key]);
        } else { 
          accumulator[key] = value;
          console.log(key + ": " + accumulator[key]);
        }
      });
      return accumulator;
    }, {});
  }
  
  // let arr = [
  //   { a: 2, b: 10 },
  //   { a: 12, c: 11 },
  //   { a: 8, b: 14, d: 20 },
  //   { a: "8" },
  // ];
  
  // console.log(sumAll(arr));