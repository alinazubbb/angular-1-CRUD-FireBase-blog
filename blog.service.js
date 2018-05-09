function BlogService($filter, $firebaseArray,$firebaseObject) {
	// 
	var db = firebase.database();
	// 
	var service = {
		posts: $firebaseArray(db.ref().child("/posts/")),
		getPost: getPost,
		addPost: addPost,
		editPost: editPost,
		addComment: addComment,
		editComment: editComment,
		removeComment: removeComment,
		addPostFormShow: false,
		showEditComment: false,
	};
	// 
	function getPost(postId) {
		var post = $firebaseObject(db.ref().child("/posts/"+postId));
		return post;
	}
	// 
	function addPost(newPostTitle, newPostDescription) {
		var newPostKey = db.ref().child("/posts/").push().key;
		db.ref('/posts/' + newPostKey).set({
			id: (this.posts.length + 1),
			key: newPostKey,
			title: newPostTitle,
			description: newPostDescription,
			date: $filter('date')(new Date(), 'dd/MM/yyyy - HH:mm:ss'),
		});
	}
	// 
	function editPost(post) {
		db.ref('/posts/' + post.key).set({
			id: post.id,
			key: post.key,
			title: post.title,
			description: post.description,
			date: post.date,
			comments: post.comments ? post.comments : {},
		});
	}
	// 
	function addComment(post) {
		console.log(post);
		var newCommentKey = db.ref().child('/posts/' + post.key + '/comments/').push().key;
		db.ref('/posts/' + post.key + '/comments/' + newCommentKey).set({
			key: newCommentKey,
			commentUser: post.commentUser,
			commentText: post.commentText,
		});
	}
	// 
	function editComment(post, item) {
		db.ref('/posts/' + post.key + '/comments/' + item.key).set({
			key: item.key,
			commentUser: item.commentUser,
			commentText: item.commentText,
		});
	}
	// 
	function removeComment(post, comment, item) {
		db.ref().child('/posts/' + post.key + '/comments/' + item.key).remove();
	}
	// 
	return service;
	// 
}