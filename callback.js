var Products=[
    {id:1, name:"Deneme1", price: 1000},
    {id:2, name:"Deneme2", price: 2000},
    {id:3, name:"Deneme3", price: 3000}
];


function addproduct(prd, callback)
{
    return new Promise(function(resolve, reject){ //Promise
        setTimeout(() => {
            Products.push(prd);
            let added=true;
            if(added)
            {
               resolve();
            }
            else
            {
                reject(500, prd);
            }
        
        
        });
    });
    
    // if(added)
    // {
    //     setTimeout(() => {
    //         Products.push(prd);
    //         callback(null, prd);
    //     }, 2000);
    // }
    // else
    // {
    //     callback(500, prd);
    // }
    
}

function getproducts()
{
    setTimeout(() => {
        Products.forEach(element => {
            console.log(element.name);
        });
    }, 1000);
}

// addproduct({id:4, name:"Deneme4", price: 4000}, function(err, data){
//     if(err)
//     {
//         console.log("Hata: "+err);
//     }
//     else
//     {
//         console.log(data);
//     }
// });

addproduct({id:4, name:"Deneme4", price: 4000}).then(getproducts).catch(function(err){
    console.log(err);
});
  

