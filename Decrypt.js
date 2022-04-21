var decrypt_text_result = document.querySelector("#decrypt_text-result");
var DECRYPT_TEXT =  '';
var decrypt_key = document.querySelector("#decrypt-key");

function Decrypted_text(encrypted){
    
    Get_binary_code(encrypted.innerText, decrypt_key.value);
}

var data = {};
function Decrypt_validate(decrypt){

    DECRYPT_TEXT = decrypt;
    decrypt_text_result.innerText = DECRYPT_TEXT;

    if(data.original_text == DECRYPT_TEXT && decrypt_key.value == data.private_key){
        Decrypt_result_section();
    }
    else{
        alert('Incorrect private key')
    }
}


function Get_encrypt_data(id){
    db.collection("cryptography information").doc(id).get().then((doc) => {
        data = doc.data();
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}