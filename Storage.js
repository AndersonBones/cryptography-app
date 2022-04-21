const firebaseConfig = {
    apiKey: "AIzaSyBRjx87_dJEmBvZSf4IMfNaqb06VdspBXY",
    authDomain: "criptography-964c2.firebaseapp.com",
    projectId: "criptography-964c2",
    storageBucket: "criptography-964c2.appspot.com",
    messagingSenderId: "3508189574",
    appId: "1:3508189574:web:48d976b7dba745f6a35407",
    measurementId: "G-1WSYL9KJ8T"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



function Save_encrypted_data(encrypted_data){
    db.collection('cryptography information').add(encrypted_data).then((docRef)=>{
        // data posted successfully
        Encrypt_result_section();
        
      })
      .catch((error)=>{
        console.log(error)
      
      })
}

function Upload_encrypt_data(){
  db.collection("cryptography information").get().then((querySnapshot) => {
    Decrypt_section();
    querySnapshot.forEach((doc) => {

      Encrypted_text(doc);
    });
  });
}

function Encrypted_text(doc){
  let span = document.createElement('span');
  let encrypted_text = doc.data().encrypted_text;
  span.innerText = encrypted_text;
  encrypt_list.appendChild(span);

  span.addEventListener('click',()=>{
    Decrypt_text_section();
    encrypted_text_selected.innerText = encrypted_text;

    Get_encrypt_data(doc.id);
  })
  
}