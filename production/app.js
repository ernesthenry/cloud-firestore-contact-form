var firebaseConfig = {
    apiKey: "AIzaSyDLffYVCMaCAWcHC-xnjy5unhE9-LLRecY",
    authDomain: "contactform-firestore.firebaseapp.com",
    databaseURL: "https://contactform-firestore.firebaseio.com",
    projectId: "contactform-firestore",
    storageBucket: "contactform-firestore.appspot.com",
    messagingSenderId: "203767039993",
    appId: "1:203767039993:web:87d01dcd52b36e718c5f28"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  // start grabbing our DOM Elements

  const submitBtn = document.querySelector('#submit');

  let userName=document.querySelector('#userFullName');
  let userEmail=document.querySelector('#userEmail');
  let userMessage=document.querySelector("#userMessage");

  const db = firestore.collection("contactData");

  submitBtn.addEventListener('click', function(){
      let userNameInput = userName.value;
      let userEmailInput = userEmail.value;
      let userMessageInput = userMessage.value;

      db.doc().set({
          name: userNameInput,
          email: userEmailInput,
          message: userMessageInput
      }).then(function(){
          console.log('Data saved');
      }).catch(function(error){
          console.log(error);
      })
  });
  