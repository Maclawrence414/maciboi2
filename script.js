const menu=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.getElementById('contact-form').addEventListener('submit',e=>{e.preventDefault();document.getElementById('form-status').textContent='Thanks! Your message has been received.';e.target.reset();});
