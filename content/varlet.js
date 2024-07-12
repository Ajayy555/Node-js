let tm=new Date();
for(var i=0;i<3;i++)
    {console.log("var start "+tm.toLocaleTimeString);
     setTimeout(()=>{
            console.log('var'+i+"time "+ tm.toLocaleTimeString());
        },5000)
        console.log("var end "+tm.toLocaleTimeString());

    }
for(let i=0;i<3;i++)
    {       console.log("let start "+tm.toLocaleTimeString());

        setTimeout(()=>{
            console.log('let'+i+"time "+ tm.toLocaleTimeString());        },2000)
            console.log("let end "+tm.toLocaleTimeString());

    }

