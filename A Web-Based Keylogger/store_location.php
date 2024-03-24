<?php
// Check if latitude and longitude are received
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['latitude']) && isset($_POST['longitude'])) {
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];

    // File path to save the location data
    $file_path = 'location_data.txt';

    // Prepare data to write to the file
    $data_to_write = "Latitude: $latitude, Longitude: $longitude\n";

    // Write data to the file (append mode)
    file_put_contents($file_path, $data_to_write, FILE_APPEND);

    // Response to indicate success
    echo 'Location data saved to file successfully.';
} else {
    // If data is missing, return an error message
    echo 'Error: Missing latitude or longitude.';
}
?>