import Glide from '@glidejs/glide';
import css from '../../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss';

document.addEventListener('DOMContentLoaded',function() {

    const payments = document.getElementById('paymentsCarousel');
   
    const paymentsCarousel = function() {
            
        const glide = new Glide(payments, {
            type: 'carousel',
            animationDuration: 600,
            autoplay: false,
            hoverpause: true,
            gap: 0
        });
        
        setTimeout(function() {
            glide.mount();
        }, 100)
    };            

    payments ? paymentsCarousel() : false;

}, false)