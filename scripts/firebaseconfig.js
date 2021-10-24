(function (window) {
	"use strict";

	var App = window.App || {};

	const FirebaseConfig = {
		apiKey: "AIzaSyCybcUzr-gCS720bG3_B0rR9Y9N1RUM4jY",
		authDomain: "coffee-run-f4100.firebaseapp.com",
		projectId: "coffee-run-f4100",
		storageBucket: "coffee-run-f4100.appspot.com",
		messagingSenderId: "84160567828",
		appId: "1:84160567828:web:5341d9f09a0dbda153e501",
		measurementId: "G-RNYZHX2TZ3",
	};

	App.FirebaseConfig = FirebaseConfig;
	firebase.initializeApp(App.FirebaseConfig);

	window.App = App;
})(window);
