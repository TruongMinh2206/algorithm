// 5.1 reverses

function reverseArrayReduce(arr) {
  return arr.reduce((acc, item) => [item, ...acc], []);
}

console.log(reverseArrayReduce([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]


  
  // 5.2 chunk
  
  function chunk(array, size) {
    return array.reduce((acc, item, index) => {
        if (index % size === 0) {
            acc.push([]);
        }
        acc[acc.length - 1].push(item);
        return acc;
    }, []);
}

console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)); // [['a', 'b', 'c'], ['d']]

  
  //  5.3 uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.
  // Ví dụ [1, 2, 3, 2, 4] 👉 [1, 2, 3, 4]
  
  function uniq(array) {
    return [...new Set(array)];
}

console.log(uniq([1, 2, 3, 2, 4])); // 👉 [1, 2, 3, 4]
console.log(uniq(['a', 'b', 'a', 'c'])); // 👉 ['a', 'b', 'c']

  //5.4 uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection
  // [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'y': 2, 'x': 1 }]
  
  function uniqObjects(array) {
    let seen = new Set();
    return array.filter(obj => {             
        let key = JSON.stringify(Object.entries(obj).sort());          
        if (!seen.has(key)) {
            seen.add(key);
            return true;
        }
        return false;
    });
}
//Dùng Object.entries(obj).sort() để sắp xếp key theo thứ tự, giúp chuẩn hóa object.

//Chuyển thành chuỗi bằng JSON.stringify().

//Dùng Set để lưu lại các chuỗi duy nhất.
console.log(uniqObjects([
    { 'x': 1, 'y': 2 }, 
    { 'x': 2, 'y': 1 }, 
    { 'y': 2, 'x': 1 }
])); 
// 👉 [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]

  
  // 5.5 Group by: Cho đầu vào là 1 collection ( array of object ),
  // Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định.
  
  function groupBy(array, key) {
    return array.reduce((result, item) => {
        let groupKey = item[key]; // Lấy giá trị của key chỉ định

        if (!result[groupKey]) {
            result[groupKey] = []; // Nếu chưa có nhóm này thì tạo mảng mới
        }

        result[groupKey].push(item); // Thêm object vào nhóm tương ứng
        return result;
    }, {});
}

// Test case
const collect = [{a: 1, b: 2}, {a: 1, b: 3}, {a: 2, b: 2}];

console.log(groupBy(collect, 'a'));
// Output: {1: [{a: 1, b: 2}, {a: 1, b: 3}], 2: [{a: 2, b: 2}]}

console.log(groupBy(collect, 'b'));
// Output: {2: [{a: 1, b: 2}, {a: 2, b: 2}], 3: [{a: 1, b: 3}]}

  
  // 5.6 TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.
  // VD:
  // “    hello     world    “ 👉 “hello world"
  // “   I    am    good      “ 👉 “I am good”
  
  function trimAll(str) {
    return str.trim().replace(/\s+/g, ' ');
}

// Test case
console.log(trimAll("    hello     world    ")); // 👉 "hello world"
console.log(trimAll("   I    am    good      ")); // 👉 "I am good"

  
  // 5.7 MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
  // Ví dụ
  // keys = [‘b', ‘a', ‘c']
  // collections = [{a: 1, b: 1, c: 2, d: 4, e: 5}, {a: 2, b:1, c: 5, d: 4, e: 5}, {d: 4, e: 5, a: 22, b:11, c: 51, }]
  // 👉 [{b: 1, a: 1, c: 2}, {b: 1, a: 2, c: 5}, {b: 11, a: 22, c: 51}]
  
  function mapKey(keys, collections) {
    return collections.map(obj => {
        return keys.reduce((result, key) => {
            if (obj.hasOwnProperty(key)) {
                result[key] = obj[key]; // Thêm key vào object mới theo thứ tự keys
            }
            return result;
        }, {});
    });
}

// Test case
const keys = ['b', 'a', 'c'];
const collections = [
    { a: 1, b: 1, c: 2, d: 4, e: 5 },
    { a: 2, b: 1, c: 5, d: 4, e: 5 },
    { d: 4, e: 5, a: 22, b: 11, c: 51 }
];

console.log(mapKey(keys, collections));
/*
Output:
[
  { b: 1, a: 1, c: 2 },
  { b: 1, a: 2, c: 5 },
  { b: 11, a: 22, c: 51 }
]
*/
  
  // 5.8 Switch Order: Viết function để thay đổi thứ tự order của các object.
  function switchOrder(id, newOrder, arr) {
    // Tìm index của object có id cần đổi
    const currentIndex = arr.findIndex(obj => obj.id === id);
    if (currentIndex === -1) return arr; // Không tìm thấy id, trả về mảng không thay đổi

    // Lấy object cần đổi và xóa khỏi mảng
    const [movedItem] = arr.splice(currentIndex, 1);

    // Chèn object vào vị trí mới
    arr.splice(newOrder, 0, movedItem);

    // Cập nhật lại order cho tất cả object trong mảng
    arr.forEach((obj, index) => obj.order = index);

    return arr;
}

// Test case
let arr = [
    { id: 10, order: 0 },
    { id: 12, order: 1 },
    { id: 9, order: 2 },
    { id: 11, order: 3 }
];

console.log(switchOrder(9, 1, arr));

  
  // 5.9 SumAll: Viết function để tính tổng giá trị của các key của các phần tử con trong mảng bất kỳ:
  // Ví dụ:
  // Arr = [{a: 2, b: 10}, {a: 12, c: 11}, {a: 8, b: 14, d: 20}, {a: ‘8’}]
  // 👉 {a: 30, b: 24, c: 11, d: 20}
  // Đầu vào là một mảng các object và các phần tử trong object không cố định.
  
  function sumAll(arr) {
    return arr.reduce((acc, obj) => {
        for (let key in obj) {
            let value = parseFloat(obj[key]); // Chuyển đổi giá trị về số nếu là chuỗi số
            if (!isNaN(value)) { // Chỉ cộng nếu là số hợp lệ
                acc[key] = (acc[key] || 0) + value;
            }
        }
        return acc;
    }, {});
}

// Test case
let arrA = [
    { a: 2, b: 10 },
    { a: 12, c: 11 },
    { a: 8, b: 14, d: 20 },
    { a: '8' }
];

console.log(sumAll(arrA)); 
