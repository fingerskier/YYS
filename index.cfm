<!--- 
<cfajaxproxy cfc="service/jobs" jsclassname="JobsServiceProxy" />
--->

<!doctype html>
<html ng-app="YYS">
	<head>
		<link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="lib/bootstrap/css/bootstrap-responsive.min.css">
		<link rel="stylesheet" type="text/css" href="css/darkstrap.css">
		<link rel="stylesheet" type="text/css" href="css/application.css">

		<script src="lib/jquery/jquery.js"></script>
		<script src="lib/jquery/jquery-ui.js"></script>
		<script src="lib/bootstrap/js/bootstrap.js"></script>
		<script src="lib/angular/angular.js"></script>
		<script src="lib/angular/angular-bootstrap.js"></script>
		<script src="lib/angular/angular-bootstrap-prettify.js"></script>
		<script src="lib/angular/angular-loader.js"></script>
		<script src="lib/angular/angular-resource.js"></script>

		<script src="js/application.js"></script>
		<script src="js/services.js"></script>
		<script src="js/controllers.js"></script>
		<script src="js/filters.js"></script>
		<script src="js/directives.js"></script>
	</head>

	<body ng-controller="MainCtrl">
		<a href="/">
			<h1>YYS</h1>
		</a>
		<br>
		<hr>
		<table>
			<tr ng-repeat="row in data">
				<td ng-repeat="col in row">{{col}}</td>
			</tr>
		</table>
 		<hr>
	</body>
</html>