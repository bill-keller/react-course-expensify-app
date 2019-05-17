import * as firebase from 'firebase';  
  
  // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCTN4HZDgFUgN23FF2gr_Z0E4WH8TSnhPA",
    authDomain: "expensify-8964c.firebaseapp.com",
    databaseURL: "https://expensify-8964c.firebaseio.com",
    projectId: "expensify-8964c",
    storageBucket: "expensify-8964c.appspot.com",
    messagingSenderId: "281700581801",
    appId: "1:281700581801:web:6edc6c039f108fdc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // database.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  //   });

 // database.ref().on('value', (snapshot) => {
  //   console.log(snapshot.val());
  // });

    // database.ref('expenses')
    //   .once('value')
    //   .then((snapshot) => {
    //     const expenses = [];
  
    //     snapshot.forEach((childSnapshot) => {
    //       expenses.push({
    //         id: childSnapshot.key,
    //         ...childSnapshot.val()
    //       });
    //     });
    //     console.log(expenses);
    //   });

  // database.ref('expenses').push({
  //   description: 'gas bill',
  //   note: ' ',
  //   amount: 3000,
  //   createdAt: 984723987
  // })
  // database.ref('expenses').push({
  //   description: 'phone bill',
  //   note: ' ',
  //   amount: 4000,
  //   createdAt: 489237287
  // })
  // database.ref('expenses').push({
  //   description: 'coffee',
  //   note: 'with Bob',
  //   amount: 150,
  //   createdAt: 92407823907
  // })

  // database.ref('notes/-Lf6Tu0_aS5EIQurNtD6').update({
  //   title: 'To Do'
  // })

  // database.ref('notes').push({
  //   title: 'course topics',
  //   body: 'java, js, ts'
  // })


  // database.ref('location/city')
  //   .once('value')
  //   .then((snapshot) => {
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log('error fetching data: ', e);
  //   })

  // database.ref().set({
  //   name: 'Andrew Mead',
  //   age: 26,
  //   stressLevel: 6,
  //   job: {
  //     title: 'developer',
  //     company: 'google'
  //   },
  //   location: {
  //     city: 'philly',
  //     country: 'usa'
  //   }
  // }).then(() => {
  //   console.log('data is saved!');
  // }).catch((e) => {
  //   console.log('this failed ', e);
  // })

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'amazon',
  //   'location/city': 'seattle'
  // })

  // database.ref().remove();

