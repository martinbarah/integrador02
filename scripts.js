function calcular()
{
     
    var descuento80=40;
    var descuento50=100;
    var descuento30=140;

  
    var e=document.getElementById('tipo');
    var value=e.options[e.selectedIndex].value;
    var f=parseInt(document.getElementById('cant').value);
    


    if(e.value=='1')
    {
        document.getElementById('resultado').value=("Total a Pagar: $: " + descuento80*f ); 
    }
    else
    {
        
        if (e.value=='2')
        {
            document.getElementById('resultado').value=("Total a Pagar: $: " + descuento50*f);
        
        }
        else
        {
            document.getElementById('resultado').value=("Total a Pagar: $: " + descuento30*f); 
        }
    }

 
}

