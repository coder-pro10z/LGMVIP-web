let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));
console.log(buttons);

buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'AC':
                display.innerText="";
                break;
            case "=":
                try{
                    display.innerText=eval(display.innerText);
                    }
                catch(err){
                    display.innerText="ERROR!";
                }   
                break;

            default:
                if(display.innerText=="ERROR!")
                {display.innerText="";}
                display.innerText+=e.target.innerText;
        }
    });
});