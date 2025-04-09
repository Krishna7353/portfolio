<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Set your email here
    $to = "krishnarathod7353@gmail.com";
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Error sending message.'); window.location.href = 'index.html';</script>";
    }
}
?>