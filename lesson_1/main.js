/** Toán tử gán
Toán tử         Ví dụ           Tương đương
=               x = y           x = y
+=              x += y          x = x + y
-=              x -= y          x = x - y
*=              x *= y          x = x * y
/=              x /= y          x = x / y
**=             x **= y         x = x ** y

*/

/** Toán tử số học
+   --> Cộng
-   --> Trừ
*   --> Nhân
**  --> Lỹ thừa
/   --> Chia
%   --> Chia lấy dư
++  --> Tăng 1 giá trị số
--  --> Giảm 1 giá trị số

*/

/** boolean false
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 
 */

/** Toán tử logic
 1. && --> And
 2. || --> Or
 3. ! --> Not

 */

var number = prompt('Enter number: ');

if (number % 2 == 0) {
    console.log(number + ' is even number!!!');
} else {
    console.log(number + ' is odd number!!!');
}

if (number > 0) {
    console.log(number + ' is positive number!!!');
} else {
    console.log(number + ' is negative number!!!');
}