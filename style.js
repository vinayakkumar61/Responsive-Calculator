
        let displayScreen = document.getElementById('display-screen');
        let calculation = '';

        function clearDisplay() {
            displayScreen.value = '';
            calculation = '';
        }

        function backspace() {
            calculation = calculation.slice(0, -1);
            displayScreen.value = calculation;
        }

        function calculate(value) {
            if (value === '=') {
                try {
                    let result = eval(calculation);
                    displayScreen.value = result;
                    calculation = result.toString();
                } catch (e) {
                    displayScreen.value = 'Error';
                    calculation = '';
                }
            } else {
                calculation += value;
                displayScreen.value = calculation;
            }
        }
  