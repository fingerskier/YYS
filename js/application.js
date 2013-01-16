var YYS = angular.module('YYS', ['ngResource', 'ui'], function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/account', {
		controller: AccountCtrl,
		templateUrl: '/account.cfm'
	});
});

YYS.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
})
.run(function($log, $rootScope) {
	$log.info('YYS started');
	$rootScope.hello = function() {
		$log.info('hello');
		// use via $scope.hello() anywhere...
	}
});

function blankRoom() {
	return [
		['X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X']
	];
}

function ch() {
	return {
		ae: '&AElig;',		//	Æ
		amp: '&amp;',		//	&
		bar: '&brvbar;',	//	¦
		cdil: '&ccedil;',	//	Ç
		cent: '&cent;',		//	¢
		club: '&clubs;',	//	♣
		copy: '&copy;',		//	©
		cute: '&Yacute;',	//	Ý
		deg: '&deg;',		//	º
		diam: '&diams;',	//	♦
		div: '&divide;',	//	÷
		dot: '&middot;',	//	·
		gt: '&gt;',			//	>
		hart: '&hearts;',	//	♥
		iex: '&iexcl;',		//	¡
		iqst: '&iquest;',	//	¿
		lb: '&pound;',		//	£
		ldub: '&laquo;',	//	«
		lt: '&lt;',			//	>
		mega: '&Omega;',	//	Ω
		mic: '&micro;',		//	µ
		not: '&not;',		//	¬
		oe: '&OElig;',		//	Œ
		para: '&para;',		//	¶
		piv: '&piv;',		//	ϖ
		pm: '&plusmn;',		//	±
		qst: '?',
		rdub: '&raquo;',	//	»
		reg: '&reg;',		//	®
		sect: '&sect;',		//	§
		sig: '&Sigma;',		//	Σ
		sizl: '&szlig;',	//	ß
		spac: '&nbsp;',
		splt: '&curren;',	//	¤
		ther: '&there4;',	//	∴
		yen: '&yen;',		//	¥
		eth: '&ETH;',		//	Ð
		th: '&THORN;',		//	Þ
		ring: '&aring;',	//	å
		slsh: '&Oslash;',	//	Ø
		spad: '&spades;'	//	♠
	};
}

function healthChar(x) {
	if (x > 85)
		return '1';
	else if (x > 66)
		return '&frac34;';
	else if (x > 33)
		return '&frac12;';
	else if (x > 13)
		return '&frac14';
}