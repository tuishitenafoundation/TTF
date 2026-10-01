(function(){
  var header=document.querySelector('header');
  function onScroll(){ if(header) header.classList.toggle('scrolled', window.scrollY>12); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  if(!('IntersectionObserver' in window)) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var sel='.quick-card,.prog-card,.region-card,.partner-card,.value-card,.news-card,.pay-card,.vm-cell,.founder-card,.gallery-item,.job-item,.doc-item,.map-card,.phase,.serve-tag,.contact-col';
  var els=[].slice.call(document.querySelectorAll(sel));
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var el=e.target; el.classList.add('in'); io.unobserve(el);
      setTimeout(function(){ el.classList.remove('js-reveal','in'); el.style.removeProperty('--d'); }, 1100);
    });
  },{threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){
    var sib=el.parentElement?[].indexOf.call(el.parentElement.children,el):0;
    el.style.setProperty('--d',(Math.min(sib,5)*0.08)+'s');
    el.classList.add('js-reveal'); io.observe(el);
  });
})();

/* scroll reveal */
(function(){
  var sel='.quick-card,.value-card,.prog-card,.partner-card,.region-card,.vm-cell,.section-banner,.leader-card,.phase,.pay-card';
  document.querySelectorAll(sel).forEach(function(e){e.classList.add('reveal');});
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
  els.forEach(function(e){io.observe(e);});
})();
