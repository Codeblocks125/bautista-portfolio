(function(){
  var links=[].slice.call(document.querySelectorAll('.links a'));
  if(!('IntersectionObserver' in window)) return;
  var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.hash==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
  links.forEach(function(a){var s=document.querySelector(a.hash);if(s)spy.observe(s)});
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  document.documentElement.classList.add('js');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;io.unobserve(el);el.classList.add('in');setTimeout(function(){el.classList.remove('reveal','in');el.style.transitionDelay=''},1000)}})},{threshold:.12});
  [].slice.call(document.querySelectorAll('section h2,.site,.tl li,.skills>div,.about-grid>*,.plan')).forEach(function(el,i){el.classList.add('reveal');el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
})();
