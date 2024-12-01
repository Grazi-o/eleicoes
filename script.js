document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Simulação de envio de formulário
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    responseMessage.style.color = 'green';

    // Limpa o formulário
    event.target.reset();
});

function showDetails(cardId) {
    const details = document.getElementById('details-' + cardId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
