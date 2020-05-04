<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link rel="stylesheet" href="./css/calculator.css">
    <title>Document</title>
</head>

<body>


    <div class="Calculator">
        <div class="display">
            <p id="calc">Calculator</p>
        </div>
        <div class="buttons">
            <table>
                <tr>
                    <td class="first" id="clear">CL</td>
                    <td class="first">M+</td>
                    <td class="first" id="divide"><i class="fas fa-divide"></i></td>
                    <td class="first" id="multiple">x</td>
                </tr>
                <tr>
                    <td id="seven">7</td>
                    <td id="eight">8</td>
                    <td id="nine">9</td>
                    <td id="sub">-</td>
                </tr>
                <tr>
                    <td id="four">4</td>
                    <td id="five">5</td>
                    <td id="six">6</td>
                    <td id="plus">+</td>
                </tr>
                <tr>
                    <td id="one">1</td>
                    <td id="two">2</td>
                    <td id="three">3</td>
                    <td rowspan="2" id="result">=</td>
                </tr>
                <tr>
                    <td id="zero" ; colspan="2">0</td>
                    <td id="dot">.</td>

                </tr>
            </table>
        </div>
    </div>
    <div class="footer">
        &copy; <span id="year"></span> Design & Developed By Pardeep Kumar
    </div>
    <script src="./js/App.js"></script>
</body>

</html>