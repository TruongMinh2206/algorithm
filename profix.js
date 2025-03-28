const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Hàm xác định độ ưu tiên của toán tử
function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
}

// Chuyển biểu thức trung tố sang hậu tố (Postfix)
function infixToPostfix(expression) {
    let stack = [];
    let output = [];
    let tokens = expression.match(/\d+|[\+\-\*\/\(\)]/g);

    for (let token of tokens) {
        if (!isNaN(token)) {
            output.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop();
        } else {
            while (stack.length && precedence(stack[stack.length - 1]) >= precedence(token)) {
                output.push(stack.pop());
            }
            stack.push(token);
        }
    }

    while (stack.length) {
        output.push(stack.pop());
    }

    return output.join(" ");
}

// Tính giá trị từ biểu thức hậu tố (Postfix)
function evaluatePostfix(postfixExpr) {
    let stack = [];
    let tokens = postfixExpr.split(" ");

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            let result;
            switch (token) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/': result = a / b; break;
            }
            stack.push(result);
        }
    }

    return stack.pop();
}

// Nhận input từ người dùng
rl.question("Nhập biểu thức (ví dụ: 1 + 2 * (3 + 4)): ", function(expression) {
    let postfix = infixToPostfix(expression);
    let result = evaluatePostfix(postfix);
    console.log(`Kết quả: ${result}`);
    rl.close();
});
