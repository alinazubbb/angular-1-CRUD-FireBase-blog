angular.module("app", ["firebase", "ngRoute"])
	.config(route)
	.service('BlogService', BlogService)
	.controller("MainCtrl", MainCtrl)
	.controller("PostCtrl", PostCtrl);