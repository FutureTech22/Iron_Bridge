(function() {
    'use strict';

    angular
        .module('portfolio', [])


        $(function() {
        	$(".type").typed({
        		strings: [
        			"Digital Marketing",
        			"Social-Media Marketing",
        			"Brand Awareness"
        		],
        		typeSpeed: 70,
        		backDelay: 200,
        		loop: true
        	})
        })

})();



