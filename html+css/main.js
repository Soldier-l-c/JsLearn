const fs = require("fs")
const path = require("path")
const htmltest =require("./main.vue")

const Vue = require("vue")
Vue.component("htmltest", htmltest)

new Vue({
    render: h => h(htmltest),
  }).$mount('#app');

fs.readFile(path.join(__dirname, "input"), (err, data) => {
    if (err) throw err
    var input = data.toString()
    console.log(input)
})

let arr = [1,2,3]
let struct = {
    name:"",
    age:0,
    sex:"s"
}
arr.push(22)
struct.name = "1"
delete struct.sex
console.log(struct)

console.log(struct.name === 1);

