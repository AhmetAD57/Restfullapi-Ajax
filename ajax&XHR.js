var xhr= new XMLHttpRequest(); //Asenkron bir şekilde server bir işle uyraşırken herşeyi durdurmadan işlem yapmasını sağlar

xhr.onreadystatechange= function()
{
    if(xhr.readyState===4 && xhr.status===200 ) //rakamlar durum ları belirtir
    {
        console.log(xhr.responseText);
    }
    else if( xhr.status===404)
    {
        console.log("Kaynak bulunamadı");
    }
}

xhr.onprogress= function()
{
    console.log("İşlem devam ediyor");
}
    

xhr.open("GET", "msg.txt", true)// Asekron olup olmayacağını belirtir server ı engellemez

xhr.send();

console.log("Hello1")


// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// 200: "OK"
// 403: "Forbidden"
// 404: "Page not found"
