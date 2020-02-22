import { TweenLite, ScrollToPlugin } from "gsap/all";
const scrollPlugin = ScrollToPlugin;
//import ScrollToPlugin from 'gsap/ScrollToPlugin';
 
(function(window, document, cutme, undefined) {

    const Helpers = function() {
        return {
	        debounce: debounce,
	        detach: detach,
        	isInView: isInView,
        	scrollTo: scrollTo
        };
    };
    
    const debounce = (func, wait, immediate) => {
	    var timeout;
	    return () => {
	        const context = this, args = arguments;
	        const later = function() {
	            timeout = null;
	            if (!immediate) func.apply(context, args);
	        };
	        const callNow = immediate && !timeout;
	        clearTimeout(timeout);
	        timeout = setTimeout(later, wait);
	        if (callNow) func.apply(context, args);
	    };
	};
    
	const detach = function(node, target) {
		let parent = node.parentNode;
		let next = node.nextSibling;
	
		if (!parent) { return; }
		
		parent.removeChild(node);	// Detach node from DOM.		
		target.append(node, next);	// Append
	};
    
    const isInView = function(el) {
        let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
        
        if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow ) {
            return true;
        }
    };
    
    const scrollTo = function (target, speed, offset) {    
		TweenLite.to(window, speed, {
			scrollTo: {
				y: target - offset,
				autoKill: false
			},
			ease: Power1.easeOut
		});
	};

    cutme.Helpers = new Helpers();
    
    
    
    

}(window, document, window.cutme = window.cutme  || {}));