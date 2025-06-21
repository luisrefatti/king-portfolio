 const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

 const form = document.getElementById('contactForm');
 const status = document.getElementById('status');

 form.addEventListener('submit', function (e) {
     e.preventDefault();
     const data = new FormData(form);

     fetch(form.action, {
         method: 'POST',
         body: data
     }).then(response => {
         status.className = "success"
         status.innerText = "Mensagem enviada com sucesso! ✅";
         form.reset();
     }).catch(error => {
         status.className = "error"
         status.innerText = "Erro ao enviar. Tente novamente mais tarde. ❌";
     });
 });
