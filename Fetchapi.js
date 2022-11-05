//Text

function getText(){
    fetch("msg.txt")
    .then(response =>{
        return response.text();
    }).then(data=>{
        console.log(data)
    }).catch(error =>{
        console.log(error)
    })
}

getText();

//json

function getJson(){
    fetch("employees.json")
    .then(response =>{
        return response.json();
    }).then(data=>{
        console.log(data)
    }).catch(error =>{
        console.log(error)
    })
}

getJson();

//External API
function getExternalapi()
{
    fetch("https://randomuser.me/api/?results=5")
    .then(data=>{
        return data.json();
    }).then(users =>{
        users.results.forEach(element => {
            console.log(element);
        });
    })
}

getExternalapi();

function postExternalapi()
{
    var url="https://jsonplaceholder.typicode.com/todos/";

    var data={
        method:"POST",
        body:JSON.stringify({
            userId: 1,
            title:"Titel",
            body: "Body"
        }),
        headers: new Headers({
            "content-type": "aplication/json"
        })
    }
    
    fetch(url, data)
    .then(res=>{
         console.log(res)
    });
}
postExternalapi();
