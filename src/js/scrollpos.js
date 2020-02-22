document.addEventListener('DOMContentLoaded', function() {
    (function() {

        let scroll_pos = window.pageYOffset || window.scrollY,
            out = false;
        
        const el = document.getElementsByClassName('js-top')[0];

        let down,
        	lastScrollTop = 0,
        	fixed = false,
        	ww = window.innerWidth;

        const action = function() {
	        
            scroll_pos = window.pageYOffset || window.scrollY;
            ww = window.innerWidth;

            if (scroll_pos >= 120) {
                if (fixed != true) {
    	            el.classList.add('is-fixed');
    	            fixed = true;
    	        }
            }
            
            else {
                if (fixed === true) {
    	            el.classList.remove('is-fixed');
    	            fixed = false;
	            }
            }
        };

        el ? window.addEventListener('scroll', action) : false;
        
        
    })();
}, false);