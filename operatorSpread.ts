let colors = function(message: string, ...colors:string[]){
    console.log(message);

    for(let i in colors)
    {
        console.log(colors[i]);
    }
}

const arr= ['ek','do','teeen','caar'];

colors('hello', ...arr);