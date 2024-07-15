<?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                // Retrieve form data
                $name = htmlspecialchars($_POST['name']);
                $email = htmlspecialchars($_POST['email']);
                $message = htmlspecialchars($_POST['message']);
                
                // Your email address
                $to = "jrbspdk@gmail.com";
                
                // Subject
                $subject = "New Contact Form Submission";
                
                // Email content
                $email_content = "Name: $name\n";
                $email_content .= "Email: $email\n\n";
                $email_content .= "Message:\n$message\n";
                
                // Email headers
                $headers = "From: $email";
                
                // Send email
                if (mail($to, $subject, $email_content, $headers)) {
                    echo "Thank you! Your message has been sent.";
                } else {
                    echo "Oops! Something went wrong, please try again.";
                }
            } else {
                echo "There was a problem with your submission, please try again.";
            }
        ?>