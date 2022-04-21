let clipboard = document.querySelectorAll('.clipboard-btn');

for(var btn of clipboard){
    btn.addEventListener('click',ClipBoard);
}

function charCode(char){
    return char.charCodeAt();
}
function dec2bin(dec){
    let zero = '';
    for(var i=0; i<8-(dec >>> 0).toString(2).length; i++){
        zero +='0';

    }
    return zero+(dec >>> 0).toString(2);
}


function Get_binary_code(text, key){
    let Text_binary = {binary:[]};
    let Key_binary = {binary:[]};

    for(var char of text){
        let codeAt = charCode(char);
        let binaryCode = dec2bin(codeAt);
        
        Text_binary.binary.push(binaryCode);
    }

    for(var char_key of key){
        let codeAt = charCode(char_key);
        let binaryCode_key = dec2bin(codeAt);

        Key_binary.binary.push(binaryCode_key);
    }
    
    Set_binary_code(Text_binary.binary, Key_binary.binary);
}

function Set_binary_code(text_bin, key_bin){
    let x = 0;

    while(key_bin.length < text_bin.length){
        key_bin.push(key_bin[x]);
        x+=1;
    }

    Xor_algorithm(text_bin, key_bin);
}


function Xor_algorithm(text, key){
    let result_str = '';
    let encrypt_text = [];

    for(var i=0; i<text.length; i++){
        for(var c=0; c<text[i].length; c++){
            if(text[i][c] == key[i][c]){
                result_str+='0';
            }

            if(text[i][c] != key[i][c]){
                result_str+='1';
            }
        }
        encrypt_text.push(result_str)
        result_str = '';
        
        
    }

    Generate_Encrypted_text(encrypt_text);
}


function Generate_Encrypted_text(array){
    let decrypted_text = '';

    for(var i=0; i<array.length; i++){
        let codeAt = parseInt(array[i], 2);
        let char_encrypted = String.fromCharCode(codeAt);
        
        encrypted_text+=char_encrypted;
        decrypted_text+=char_encrypted;
    }

    

    if(ENCRYPT == true){
        Show_encrypted_tex(encrypted_text)
    }

    if(DECRYPT == true){
        Decrypt_validate(decrypted_text);
        
    }
    
}

function Show_encrypted_tex(encrypted_text){
    let encrypt_result_el = document.querySelector("#encrypt_result-text");

    encrypt_result_el.innerText = encrypted_text;
}


function ClipBoard(){
    const textarea = document.createElement('textarea');
	const text = this.parentElement.children[0].innerText;
	

	textarea.value = text;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();

	alert('Text copied to clipboard');
}