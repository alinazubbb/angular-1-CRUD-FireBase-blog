function route($routeProvider) {
	// 
	$routeProvider
		.when("/", {
			templateUrl: "templates/posts.html",
			controller: "MainCtrl"
		})
		.when("/post/:postId", {
			templateUrl: "templates/post.html",
			controller: "PostCtrl"
		}).otherwise({
			redirectTo: '/'
		});
	// 
}