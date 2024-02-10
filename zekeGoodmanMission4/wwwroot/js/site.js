// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function calculateTotal() {
    var hoursInput = $('#hours');
    var hourlyRateInput = $('#hourlyRate');
    var totalInput = $('#total');
    var hoursError = $('#hoursError');

    // Reset error message
    hoursError.text('');

    // Get input values
    var hours = parseFloat(hoursInput.val());
    var hourlyRate = parseFloat(hourlyRateInput.val());

    // Validate hours input
    if (isNaN(hours) || hours <= 0) {
        hoursError.text('Please enter a positive number for hours.');
        return;
    }

    // Calculate total
    var total = hours * hourlyRate;

    // Update total input
    totalInput.val(total.toFixed(2) + "$");
}
