$ (document).ready(function (){
    $('#login').click(function(){
        let email = $("#email").val();
        let senha = $("#senha").val();

        console.log (validarLogin (email, senha));

        if(validarLogin(email, senha)){
            alert("Preenchido corretamente")
        }else{
            alert("Preencher todos os campos")
           }
    })


    function validarLogin (e, s){
        if(e == "" || s ==""){
            return false;
        }else{
            return true;
        }
    }
});




