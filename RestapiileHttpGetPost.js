document.querySelector("#getone").addEventListener("click", getone);
document.querySelector("#getall").addEventListener("click", getall);
document.querySelector("#post").addEventListener("click", post);
function getall()
{
    var url="https://jsonplaceholder.typicode.com/posts";

    var xhr= new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload=function(){
        if(this.status==200)
        {
            var post= JSON.parse(this.responseText);
        
            html="";

            post.forEach(element => {

                html+=`<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">${element.body}</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>`

            });
            
            document.querySelector(".result").innerHTML=html;
            
                
        
        
        
        }
    }

    xhr.send();
}

function getone()
{
    var value= document.querySelector("#value").value;
    var url="https://jsonplaceholder.typicode.com/posts/"+value;

    var xhr= new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload=function(){
        if(this.status==200)
        {
            var post= JSON.parse(this.responseText);
        
            html="";
            
            html+=`<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                    </div>
                </div>`
                
            
            
            document.querySelector(".result").innerHTML=html;
            
                
        
        
        
        }
    }

    xhr.send();
}

function post()
{
    var data={
        userId: 1,
        title: "title",
        body: "body"
    }
    
    var json=JSON.stringify(data);
    
    var url="https://jsonplaceholder.typicode.com/posts";

    var xhr= new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.onload= function()
    {
        if(xhr.status===201 && xhr.readyState===4)
    {
        console.log(xhr.responseText);
    }
    }
    
    xhr.send(json);
}