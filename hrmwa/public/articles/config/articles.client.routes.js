angular.module('articles').config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
		when('/articles', {
			templateUrl: 'public/articles/views/list-articles.client.view.html'
		}).
		when('/articles/create', {
			templateUrl: 'public/articles/views/create-article.client.view.html'
		}).
		when('/articles/:articleId', {
			templateUrl: 'public/articles/views/view-article.client.view.html'
		}).
		when('/articles/:articleId/edit', {
			templateUrl: 'public/articles/views/edit-article.client.view.html'
		});
	}
]);