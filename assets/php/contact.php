<?php
// Basic form validation
$errors = [];
$response = [];

// Check if form fields are set and validate them
if(empty($_POST['name'])) {
    $errors[] = 'Name is required';
}
if(empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email is required';
}
if(empty($_POST['message'])) {
    $errors[] = 'Message is required';
}


if(count($errors) > 0) {
    // Return errors if validation fails
    $response['status'] = 'error';
    $response['errors'] = $errors;
} else {
    // Form inputs
    $name = htmlspecialchars(strip_tags($_POST['name']));
    $email = htmlspecialchars(strip_tags($_POST['email']));
    $message = htmlspecialchars(strip_tags($_POST['message']));

    // Email settings
    $to = "your-email@example.com"; // Replace with your email address [tasif@tasif-hossan.blog]
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send the email
    if(mail($to, $subject, $body, $headers)) {
        $response['status'] = 'success';
        $response['message'] = 'Email sent successfully';
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Failed to send email';
    }
}

// Return response as JSON
echo json_encode($response);
?>
