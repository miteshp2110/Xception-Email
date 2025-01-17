const notificationMail = (notificationTitle,notificationBody,companyName,recipientName) =>{
    return (
        `
    <head>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #4CAF50;
            padding: 20px;
            color: #ffffff;
            text-align: center;
            font-size: 24px;
        }
        .header span {
            font-weight: bold;
        }
        .content {
            padding: 30px;
            color: #333333;
            line-height: 1.6;
        }
        .content h2 {
            color: #4CAF50;
            font-size: 22px;
            margin-bottom: 20px;
        }
        .content p {
            margin-bottom: 10px;
        }
        .cta-button {
            display: inline-block;
            background-color: #4CAF50;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #666666;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header Section -->
        <div class="header">
            <span>${companyName}</span> - Notification
        </div>

        <!-- Main Content -->
        <div class="content">
            <h2>${notificationTitle}</h2>
            <p>Dear ${recipientName},</p>
            <p>We wanted to inform you about the following update:</p>
            <p><strong>${notificationBody}</strong></p>
            
        </div>

        <!-- Footer Section -->
        <div class="footer">
            &copy; 2024 ${companyName}. All Rights Reserved. 
            <br>
        </div>
    </div>
</body>
        `
    )
}

module.exports = notificationMail