const button_click=document.getElementById('btn-action');
const button_reset=document.getElementById('btn-reload');
const deskripsi_text=document.getElementById('txt-keterangan');
const result_text=document.getElementById('txt-result');


button_click.addEventListener('click',()=>{
    deskripsi_text.innerHTML="Keberuntungan Anda Hari ini:"
    let number=1;
    const randomNumber=Date.now();
    while(number<=10){
        if(randomNumber%2===0){
            result_text.innerHTML="Hebat";
        }else if(randomNumber%3===0){
            result_text.innerHTML="Boleh Juga";
        }
        else if(randomNumber%4===0){
            result_text.innerHTML="Boleh Lah Ya";
        }
        else if(randomNumber%5===0){
            result_text.innerHTML="Cukup Laaah..";
        }else{
            result_text.innerHTML="Mengerikan";
        }
        number+=1;
    }
    
});

button_reset.addEventListener('click',()=>{
    location.reload();
});
