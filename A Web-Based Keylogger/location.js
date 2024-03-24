
$(document).ready(function() {
    $('#getLocationBtn').click(function() {
        // Check if geolocation is supported
        if (navigator.geolocation) {
            // Get user's current location
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                // Display the location on the webpage
                $('#locationResult').text('Latitude: ' + latitude + ', Longitude: ' + longitude);

                // Send location data to server via AJAX POST request
                $.ajax({
                    type: 'POST',
                    url: 'store_location.php',
                    data: { latitude: latitude, longitude: longitude },
                    success: function(response) {
                        console.log('Location data sent successfully.');
                        alert("Location Updated")
                    },
                    error: function(xhr, status, error) {
                        console.error('Error sending location data:', error);
                    }
                });
            });
        } else {
            $('#locationResult').text('Geolocation is not supported by this browser.');
        }
    });
});