class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    getLength() {
        return this.count;
    }

    push(item) {
        this.items.push(item);
        this.count = this.count + 1;
    }

    pop() {
        if(this.count > 0) {
            this.count = this.count - 1;
        }

        return this.items.pop();
    }

    peek() {
        return this.items.slice(-1)[0];
    }
}

var postIndex;


function fillPre(inorder,postorder,inStrt,inEnd,stack,map){

    if(inStrt>inEnd)
        return;
    var vals = postorder[postIndex]
    var inIndex = map.get(vals);
    postIndex--;

    fillPre(inorder,postorder,inIndex+1,inEnd,stack,map);
    fillPre(inorder,postorder,inStrt,inIndex-1,stack,map);

    stack.push(vals)
}

function printPre(inorder,postorder,preorder){
    var preorder = [];
    lent = inorder.length;
    postIndex = lent-1;
    var stack = new Stack();
    var map = new Map();
    for(var i = 0;i<inorder.length;i++){
        map.set(inorder[i],i)
    }

    fillPre(inorder,postorder,0,lent-1,stack,map);

    while (stack.getLength()!=0){
        preorder.push(stack.peek());
        stack.pop();
    }

    return preorder;
}

var inorder = [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
var postorder = [4, 12, 10, 18, 24, 22, 15, 31,44, 35, 66, 90, 70, 50, 25]

var preorder = printPre(inorder,postorder);
console.log(preorder);
