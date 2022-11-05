async function fn()
{
    return "hello";
}

console.log(fn());

fn()
.then(res=> console.log(res));

var error=false;
function getcategory()
{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error)
            resolve("phone");
            else
            reject("error");
        }, 1000);  
    });
}

function getproducts(category)
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`5 products in ${category}`);
        }, 1000);  
    });
}

async function getproduct()
{
    try
    {
        let category =await getcategory();
        let result =await getproducts(category);
        
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }
}

getproduct();