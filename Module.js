var Module=(function(){ //Private
    var a=10;

    function deneme()
    {
        return console.log(5);
    }
    return{ //Public
        deneme
    }
})();

Module.deneme();

