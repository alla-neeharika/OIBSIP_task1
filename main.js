function value1(val)    
{    
document.getElementById("o").value=val;    
}    
function value2(val)    
{document.getElementById("o").value+=val;    
}    
function evalu()    
{    
try    
    {    
     value1(eval(document.getElementById("o").value))    
    }    
    catch(e)    
    {    
     value1('Error') }    
}  