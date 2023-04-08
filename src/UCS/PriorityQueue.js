export class PriorityQueue {
    constructor() {
        this.list = []
    }

    isEmpty() {
        return this.list.length == 0
    }

    enqueue(elmt) {
        if (this.isEmpty()) {
            this.list.push(elmt)
        }
        else {
            let i = 0
            const length = this.list.length
            for (i; i < length; i++) {
                if (this.list[i].distFromStart > elmt.distFromStart) {
                    break
                }
            }
            this.list.splice(i, 0, elmt)
        }
    }

    dequeue() {
        return this.list.shift()
    }

    printAllInfo() {
        if (this.isEmpty()) {
            console.log("kosong...")
        }
        else {
            console.log("Queue elements: ")
            this.list.forEach(elmt => elmt.printInfo())
        }
    }
}

export class TreeNode {
    constructor(parent, name, location, distFromStart) {
        this.parent = parent
        this.name = name
        this.location = location
        this.distFromStart = distFromStart
    }

    printInfo() {
        console.log(this.name, this.location, this.priority)
    }
}

// // TESTING PRIORITY QUEUE AND TREE NODE

// // Node construction
// const node1 = new TreeNode(null, "a", {x: 4.4, y: 5.5}, 10)
// const node2 = new TreeNode(node1, "b", {x: 6.1, y: 9.7}, 2)
// const node3 = new TreeNode(node1, "c", {x: 6.1, y: 9.7}, 7)
// const node4 = new TreeNode(node2, "d", {x: 6.1, y: 9.7}, 1)

// // Queue operations
// console.log("========== QUEUE OPERATION TEST ==========")
// const prioqueue = new PriorityQueue()
// prioqueue.printAllInfo()
// prioqueue.enqueue(node1)
// prioqueue.enqueue(node2)
// prioqueue.enqueue(node3)
// prioqueue.enqueue(node4)
// prioqueue.printAllInfo()
// prioqueue.dequeue()
// prioqueue.dequeue()
// prioqueue.printAllInfo()
// prioqueue.dequeue()
// prioqueue.dequeue()
// prioqueue.printAllInfo()
// console.log("\n\n")

// // Node chaining test (see if node works as linked list)
// console.log("========== NODE CHAINING TEST ==========")
// const node5 = new TreeNode(node4, "e", null, 4)
// const node6 = new TreeNode(node5, "f", null, 9)
// const node7 = new TreeNode(node6, "g", null, 6)
// let testNode = node7
// while (testNode != null) {
//     testNode.printInfo() // expect: g, f, e, d, b, a
//     testNode = testNode.parent
// }
// console.log("\n\n")
