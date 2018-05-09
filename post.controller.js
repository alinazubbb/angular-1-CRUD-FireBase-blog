function PostCtrl($scope, $filter, $routeParams, BlogService) {
	// 
	$scope.commentUser = '';
	$scope.commentText = '';
	$scope.post = BlogService.getPost($routeParams.postId);
	$scope.showEditComment = BlogService.showEditComment;
	// 
	$scope.addComment = addComment;
	$scope.editComment = editComment;
	$scope.removeComment = removeComment;
	// 
	function addComment(post) {
		BlogService.addComment(post);
		post.commentUser = '';
		post.commentText = '';
	}
	// 
	function editComment(post, item) {
		BlogService.editComment(post, item);
	}
	// 
	function removeComment(post, comment, item) {
		BlogService.removeComment(post, comment, item);
	}
	// 
}