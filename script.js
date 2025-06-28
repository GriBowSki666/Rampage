document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');
    const appointmentDateInput = document.getElementById('appointmentDate');

    const today = new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    appointmentDateInput.min = minDate;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (validateForm()) {
            alert('Ваша заявка успешно отправленна')
            form.reset();
        }
    });
})