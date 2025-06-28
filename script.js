document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('appointmentForm').addEventListener('submit', e => {
        e.preventDefault();
        alert('Ваша заявка успешно отправлена');
    });
});