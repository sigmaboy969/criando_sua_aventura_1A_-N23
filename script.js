// Script para navegação entre passos da aventura
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-proximo');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = document.querySelector('.passo.ativo');
            const nextStepId = 'passo-' + this.getAttribute('data-proximo');

            if (currentStep && document.getElementById(nextStepId)) {
                // Remove a classe ativo do passo atual
                currentStep.classList.remove('ativo');

                // Adiciona a classe ativo ao próximo passo
                const nextStep = document.getElementById(nextStepId);
                nextStep.classList.add('ativo');

                // Scroll suave para o conteúdo se necessário (opcional, para telas maiores)
                nextStep.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Efeito de feedback no botão (opcional)
                this.style.opacity = '0.7';
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 150);
            } else {
                console.warn('Passo não encontrado:', nextStepId);
            }
        });
    });
});
