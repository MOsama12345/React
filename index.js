// // // // function A(x,y){
// // // //     const Pr = new Promise((resolve,reject)=>{
// // // //         if(x===y) resolve(true);
// // // //         else{
// // // //             const err = new Error("They are not equal")
// // // //             reject(err)
// // // //         }
// // // //     })
// // // //     return Pr
// // // // }
// // // // function B(z){
// // // //    const Pr = new Promise((resolve,reject)=>{
// // // //     if(z) resolve("They are equal")
// // // //     else{
// // // // reject(false)}
// // // //    })
// // // //    return Pr
// // // // }
// // // // function C(){
// // // //     return new Promise((resolve,reject)=>{
// // // //         resolve("Good Scnz")
// // // //     })
// // // // }
// // // // let a=prompt("Enter a");
// // // // let b=prompt("Enter b");
// // // // A(a,b).then((x)=> console.log(B(x)))
// // // // .then(()=> console.log(C()))
// // // // .catch((err)=>console.log(err.message))

// // // const P1 = new Promise((res,rej)=>{
// // //     setTimeout(()=>res("P1 resolved"),4000)
// // // })
// // // // const P3 = new Promise((res,rej)=>{
// // // //     setTimeout(()=>rej("P3 resolved"),2000)
// // // // })
// // // // const P2 = new Promise((res,rej)=>{
// // // //     setTimeout(()=>rej("P2 resolved"),3000)
// // // // })
// // // async function a(){
// // //     const val = await P1
// // //     console.log(P1)
// // // }
// // // a().then((res)=>{
// // // console.log(res)}
// // // )
// // // console.log("ALI")

// // async function A(){
// // const a = await fetch('https://dummyjson.com/users')
// // const b = await a.json()
// // console.log(b)
// // }
// // A()
// // API for get requests
// let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos");
//     fetchRes.then(res =>
//         res.json()).then(d => {
//             console.log(d)
//         })
const A = async() => {
    const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todosjson = await todos.json();
    console.log(todosjson)
}
A()