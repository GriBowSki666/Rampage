document.addEventListener('DOMContentLoaded', () => {
    document.getElementByld('appointmentForm').addEventListener('submit', e => {
        e.preventDefault();
        alert('Ваша заявка успешно отправленна');
    });
});