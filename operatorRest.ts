let display = function(message:string, ...colors:any[]){
    for(let i in arguments)
    {
        console.log(arguments[i]);
    }
}

display('sdfds');
display('sdfsdf','asdad');
display('asdasd',1,2,3,4,5,'test');