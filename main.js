var main_section = document.querySelector(".main-section");
var encrypt_section = document.querySelector(".encrypt-section");

var decrypt_section = document.querySelector('.decrypt-section');
var decrypt_text_section = document.querySelector(".decrypt_text-section");
var decrypt_result_section = document.querySelector('.decrypt_result-section');

var encrypt_list = document.querySelector('.encrypt-text-list');
var encrypt_result_section = document.querySelector('.encrypt_result-section');

var to_encrypt_main = document.querySelector('#encrypt-btn');
var to_decrypt_main = document.querySelector('#decrypt-btn');

var to_home = document.querySelectorAll(".go-home");
var encrypt_text = document.querySelector('.encrypt-section');

let original_text = document.querySelector("#original-text");
let private_key = document.querySelector("#private-key");

let encrypted_text_selected = document.querySelector('#encrypted_text-selected');
var encrypted_text = '';

var ENCRYPT = false;
var DECRYPT = false;

$(decrypt_result_section).hide()
$(decrypt_section).hide();
$(decrypt_text_section).hide();
$(encrypt_section).hide();
$(encrypt_result_section).hide();



function Encrypt_section(){
    $(main_section).fadeOut('fast',()=>{
        $(encrypt_section).fadeIn();
    })
}
to_encrypt_main.addEventListener('click',()=>{
    Encrypt_section();
    ENCRYPT = true;
})

function Encrypt_result_section(){
    $(encrypt_section).fadeOut('fast', ()=>{
        $(encrypt_result_section).fadeIn();
    })
}

encrypt_text.addEventListener('submit', (e)=>{
    e.preventDefault();

    Get_binary_code(original_text.value, private_key.value);
    Save_encrypted_data({encrypted_text: encrypted_text, original_text: original_text.value, private_key: private_key.value});
   
})

function Go_home(){
    document.location.reload(true);
}


for(var btn of to_home){
    btn.addEventListener('click',Go_home)
}


function Decrypt_section(){
    $(main_section).fadeOut('fast',()=>{
        $(decrypt_section).fadeIn();
    })   
}


to_decrypt_main.addEventListener("click",()=>{
    DECRYPT = true;
    Upload_encrypt_data();
})

function Decrypt_text_section(){
    $(decrypt_section).fadeOut('fast',()=>{
        $(decrypt_text_section).fadeIn();
    })    
}


function Decrypt_result_section(){
    $(decrypt_text_section).fadeOut('fast',()=>{
        $(decrypt_result_section).fadeIn();
    }) 
}

decrypt_text_section.addEventListener('submit', (e)=>{
    e.preventDefault();

    Decrypted_text(encrypted_text_selected);
})