const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const output = document.getElementById("output");
const outputContainer = document.getElementById("output-container")

const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
];

 
const convertToRoman = () => {
  let num = parseInt(inputNumber.value);
    if(!num) {
     outputContainer.classList.remove('hidden');
      outputContainer.classList.add('error');
      output.textContent = 'Please enter a valid number';
      return;
    }
    if(num < 1) {
          outputContainer.classList.remove('hidden');
      outputContainer.classList.add('error');
      output.textContent = "Please enter a number greater than or equal to 1"; 
      return;
    }
    
    if (num > 3999) {
         outputContainer.classList.remove('hidden');
      outputContainer.classList.add('error');
      output.textContent = "Please enter a number less than or equal to 3999";
      return;
    }
    let result = '';
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }

    outputContainer.classList.remove('hidden');
    outputContainer.classList.remove('error');
    outputContainer.classList.add('success')
    output.textContent = result;
};

convertBtn.addEventListener("click", convertToRoman);

inputNumber.addEventListener("input", (e) => {
  outputContainer.classList.add('hidden');
} )