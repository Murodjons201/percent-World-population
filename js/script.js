let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResult = document.querySelector(".form__result")

let worldPopulation = 7900000000;

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;

    function persentage0fworld1(population) {
        let percentWorldPopulation = ((population * 100) / worldPopulation).toFixed(8);

        return percentWorldPopulation;
    }

    elResult.textContent = persentage0fworld1(inputValue);
    console.log(persentage0fworld1(inputValue));
})