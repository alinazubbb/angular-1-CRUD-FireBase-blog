function MainCtrl($scope, $filter, $firebaseArray, BlogService) {
	// 
	$scope.newPostTitle = '';
	$scope.newPostDescription = '';
	
	$scope.posts = BlogService.posts;
	$scope.addPostFormShow = BlogService.addPostFormShow;
	// 
	$scope.addPost = addPost;
	$scope.editPost = editPost;
	// 
	function addPost(newPostTitle, newPostDescription) {
		BlogService.addPost(newPostTitle, newPostDescription);
		$scope.newPostTitle = '';
		$scope.newPostDescription = '';
		$scope.addPostFormShow = false;
	}
	// 
	function editPost(post) {
		BlogService.editPost(post);
		$scope.showEditPost = false;
	}
	// 
}