function route($routeProvider) {
	// 
	$routeProvider
		.when("https://alinazubbb.github.io/blog/", {
			templateUrl: "templates/posts.html",
			controller: "MainCtrl"
		})
		.when("https://alinazubbb.github.io/blog/post/:postId", {
			templateUrl: "templates/post.html",
			controller: "PostCtrl"
		});
	// 
}
