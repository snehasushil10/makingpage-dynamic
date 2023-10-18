console.log('person1 :shows ticket')
console.log('person2: shows ticket')
const preMovie = async()=>{
    const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })
    const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
    const getButter =  new Promise((resolve,reject)=>resolve('butter'))
    const getColdDrink = new Promise((resolve,reject)=>resolve(`colddrink`))
    let ticket = await promiseWifeBringingTicks;
    console.log(`wife:i have the ${ticket}`);
    console.log('husband : we shouldgo in');
    console.log('wife:i am hungry');
    let popcorn = await getPopcorn
    console.log(`husband : i got some ${popcorn}`);
    console.log('husband : we shouldgo in');
    console.log('wife:i need butter on my popocorn');
    let butter=await getButter
    console.log(`husband : i got some ${butter} on the popcorn`);
   let colddrink =await getColdDrink
   console.log(`husband : i got some ${colddrink}`);
    console.log(`husband : anything else darling`);
    console.log(`wife : lets go we are getting late`);
    console.log(`husband : thankyou for the reminder`);
    return ticket;
}
preMovie().then((m)=>console.log(`person 3: shows ${m}`))
console.log('person4: shows ticket')
console.log('person5: shows ticket')


/*console.log('person1 :shows ticket')
console.log('person2: shows ticket')
const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
})
const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log('wife:i have the tickets');
    console.log('husband : we shouldgo in');
    console.log('wife:i am hungry');
    new Promise((resolve,reject)=>resolve(`${t}popcorn`))
})
const getButter = getPopcorn.then((t)=>{
    console.log('husband : i got some popcorn');
    console.log('husband : we shouldgo in');
    console.log('wife:i need butter on my popocorn');
    console.log('husband : i got some butter');
    new Promise((resolve,reject)=>resolve(`${t}butter`))
})
const getcoldDrinks =getButter.then((t)=>{
    
    console.log('husband : i got some coldDrinks');
    console.log('husband : anything else darling');
    console.log('wife : lets go we are getting late');
    console.log('husband : thankyou for the reminder');
    new Promise((resolve,reject)=>resolve(`${t}coldDrink`))
})
console.log('person4: shows ticket')
console.log('person5: shows ticket')*/

/*async function post(){
    const createPost= await new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(user);
            resolve(user);
        }, 2000);
    });
}

async function delete(){
    const deletePost =await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (posts.length > 0) {
                    const deletedPost = posts.pop();
                    resolve(deletedPost);
                } else {
                    reject("ERROR");
                }
            }, 1000);
        });
    }

post()
delete()*/
