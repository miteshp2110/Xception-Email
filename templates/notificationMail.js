const notificationMail = (projectName,exceptionName,exceptionCause,exceptionStack,llmResponse) =>{
    return (
        `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exception Alert</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #d42121;
            padding: 20px;
            color: #ffffff;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            color: #333333;
        }
        .content h2 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #000000;
        }
        .content p {
            margin: 5px 0;
        }
        .footer {
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #777777;
        }
        .footer a {
            color: #4caf50;
            text-decoration: none;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>Exception Alert</h1>
    </div>
    <div class="content">
        
        <p><strong>Project Name:</strong> <span id="projectName">${projectName}</span></p>
        <p><strong>Exception Name:</strong> <span id="exceptionName">${exceptionName}</span></p>
        <p><strong>Cause:</strong> <span id="exceptionCause">${exceptionCause}</span></p>
        <p><strong>Stack Trace:</strong></p>
        <pre id="exceptionStack">${exceptionStack}</pre>
        <p><strong>Probable Solution:</strong> <span id="probableSolution">${llmResponse}</span></p>
    </div>
    <div class="footer">
        <p>For more information, visit <a href="https://www.example.com/help" target="_blank">our help page</a>.</p>
    </div>
</div>
</body>
        `
    )
}

module.exports = notificationMail