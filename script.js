
        // Function to dynamically create 16 input fields
        function createInputFields() {
            const inputContainer = document.getElementById('inputFields');
            for (let i = 0; i < 16; i++) {
                let inputField = document.createElement('input');
                inputField.type = 'number';
                inputField.id = 'num' + i;
                inputField.placeholder = 'Number ' + (i + 1);
                inputContainer.appendChild(inputField);
                inputContainer.appendChild(document.createElement('br'));
            }
        }

        // Call the function to create input fields when the page loads
        window.onload = createInputFields;

        // Function to check if a number is prime
        function isPrime(num) {
            if (num <= 1) return false;
            if (num <= 3) return true;
            if (num % 2 === 0 || num % 3 === 0) return false;
            for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
            }
            return true;
        }

        // Function to check if the first element of the array is prime
        function checkFirstElementPrime() {
            let numbers = [];
            for (let i = 0; i < 16; i++) {
                let num = document.getElementById('num' + i).value;
                numbers.push(parseInt(num));
            }

            let firstElement = numbers[0];
            let resultText = "The first element " + firstElement + " is " + (isPrime(firstElement) ? "a prime number." : "not a prime number.");

            document.getElementById('result').innerText = resultText;
        }
// Function to find the most frequent number in the array
        function findMostFrequentNumber() {
            let numbers = [];
            for (let i = 0; i < 16; i++) {
                let num = document.getElementById('num' + i).value;
                numbers.push(parseInt(num));
            }

            let frequency = {};
            let maxFrequency = 0;
            let mostFrequentNumber;

            // Calculate the frequency of each number in the array
            for (let i = 0; i < numbers.length; i++) {
                let num = numbers[i];
                frequency[num] = (frequency[num] || 0) + 1;

                // Update the most frequent number and its frequency
                if (frequency[num] > maxFrequency) {
                    maxFrequency = frequency[num];
                    mostFrequentNumber = num;
                }
            }

            let resultText;
            if (maxFrequency > 1) {
                resultText = "The most frequent number is " + mostFrequentNumber + " with a frequency of " + maxFrequency + ".";
            } else {
                resultText = "All numbers are unique.";
            }

            document.getElementById('result').innerText = resultText;
        }

        // Function to check if each number in the array is odd or even
        function checkOddOrEven() {
            let numbers = [];
            for (let i = 0; i < 16; i++) {
                let num = document.getElementById('num' + i).value;
                numbers.push(parseInt(num));
            }

            let resultText = "";

            // Iterate through the array and check if each number is odd or even
            for (let i = 0; i < numbers.length; i++) {
                let num = numbers[i];
                if (num % 2 === 0) {
                    resultText += "Number " + num + " is even.<br>";
                } else {
                    resultText += "Number " + num + " is odd.<br>";
                }
            }

            document.getElementById('result').innerHTML = resultText;
        }

        // Function to calculate the sum of squares of the numbers in the array
        function calculateSumOfSquares() {
            let numbers = [];
            let sumOfSquares = 0;

            for (let i = 0; i < 16; i++) {
                let num = document.getElementById('num' + i).value;
                let parsedNum = parseInt(num);
                numbers.push(parsedNum);

                // Add the square of the current number to the sum
                sumOfSquares += parsedNum * parsedNum;
            }

            let resultText = "The sum of squares of the entered numbers is: " + sumOfSquares;
            document.getElementById('result').innerText = resultText;
        }