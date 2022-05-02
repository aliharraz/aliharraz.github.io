const img_profil = document.querySelector('#img_profil');
const file_img = document.querySelector('#input_img_profil');



file_img.addEventListener('change' , function(){
   const choosdFile = this.files[0];
   console.log(choosdFile);
   if(choosdFile){
       const reader = new FileReader();

       reader.addEventListener('load' , function(){
        img_profil.setAttribute('src' , reader.result);
       })

       reader.readAsDataURL(choosdFile);
       
   }
})