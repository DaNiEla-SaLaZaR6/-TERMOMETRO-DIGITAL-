const boton=document.getElementById('boton')
const valor=document.getElementById('valor')
const temp=document.getElementsByClassName('temp')
const resultado=document.getElementsByClassName('resultado')
const mercurio=document.querySelector('.termometro_mercurio')


boton.addEventListener('click',()=>{

          if(isNaN(valor.value) || valor.value==''){
                    alert('oye no es un numero')
          }
          else{
                    celsius=(valor.value-32)*5/9
                    farenheit=(valor.value*9/5)+32
             
                    if(temp[0].checked){
                              resultado[0].innerHTML=(`${celsius.toFixed(2)}`)
                              relleno=celsius*100/100
                    }else if(temp[1].checked){
                              resultado[0].innerHTML=(`${farenheit.toFixed(2)}`)
                              relleno=farenheit*100/100
                    }else{
                              alert('no se selecciono una medida')
                    }
                   
                    if(relleno<0){
                        mercurio.style.height=`0%`
                           

                    }else if(relleno>100){
                        mercurio.style.height=`100%`
                             
                    }else{
                        mercurio.style.height=`${relleno}%` 
                    }
          
}})