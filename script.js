// Menu Mobile
const mobileMenu = document.querySelector('#mobile-menu');
const menuList = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    menuList.classList.toggle('active');
    // Animação hambúrguer
    mobileMenu.classList.toggle('is-active');
});

// Scroll Suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Fecha o menu mobile se estiver aberto ao clicar
        menuList.classList.remove('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Ajuste por causa da navbar fixa
                behavior: 'smooth'
            });
        }
    });
});

// Validação de Formulário Simples
const contactForm = document.querySelector('#contactForm');
const feedback = document.querySelector('#form-feedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    
    if (name.length < 3) {
        showFeedback("Por favor, insira um nome válido.", "red");
        return;
    }

    if (!email.includes("@")) {
        showFeedback("Por favor, insira um e-mail válido.", "red");
        return;
    }

    // Simulação de envio
    showFeedback("Obrigado, " + name + "! Sua mensagem foi enviada com sucesso.", "green");
    contactForm.reset();
});

function showFeedback(message, color) {
    feedback.innerText = message;
    feedback.style.color = color;
    feedback.style.marginTop = "1rem";
    feedback.style.textAlign = "center";
}
