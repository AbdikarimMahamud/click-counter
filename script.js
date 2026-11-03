const result_box=document.getElementById("result-box");
const addBtn=document.querySelector(".add");
console.log
const resetBtn=document.querySelector(".reset")
const subtractBtn=document.querySelector(".subtract")

let count=0
 result_box.value=count

addBtn.addEventListener("click",()=>{
    count++
    result_box.value=count
})

resetBtn.addEventListener("click",()=>{
    count=0
     result_box.value=count
})
subtractBtn.addEventListener("click",()=>{
    count--
    if (count<0) {
         result_box.value=0
    }
    else{
     result_box.value=count}
})
