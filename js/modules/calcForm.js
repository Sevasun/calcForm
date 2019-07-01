function CalcForm(options) {
    let defaults = {
        inputsSelector: '[data-calc]',
        multiplyInputSelector: '[data-multiply]',
        targetBlock: '.sidebar-block'
    };

    let {inputsSelector, multiplyInputSelector, targetBlock} = {...defaults, ...options};

    let inputs = document.querySelectorAll(inputsSelector);
    let totalValueField = document.querySelectorAll('.total-value');
    let totalValue = 0;
    let multiply = document.querySelector(multiplyInputSelector);
    let multiplyValue = +multiply.value || 1;

    cleanRows();
    
    inputs.forEach((el) => {
        el.addEventListener('change', function() {
            multiplyValue = +multiply.value || 1;
            totalValue = 0;
            cleanRows();
            receiveDataFromChecked(inputs);
            updateTotalValue(totalValue);
        });
    });

    receiveDataFromChecked(inputs);

    updateTotalValue(totalValue);

    function updateTotalValue(totalValue) {
        return totalValueField[0].innerHTML = `${totalValue * multiplyValue}$`;
    };

    function receiveDataFromChecked(elements) {
        let elems = Array.prototype.slice.call(elements);
        let checked = elems.filter((item) => {
            return item.checked;
        });
        
        checked.forEach((elem) => {
            let value = +elem.dataset.calcValue;
            let title = elem.dataset.calcTitle;
            totalValue += value;
            createRow(title, value);
            return totalValue;
        })
    };

    function cleanRows() {
        let holder = document.querySelector(targetBlock);
        holder.innerHTML = '';
    }

    function createRow(name, val) {
        let holder = document.querySelector(targetBlock);
        let row = document.createElement('div');
        let titleBlock = document.createElement('div');
        let valueBlock = document.createElement('div');
        row.classList.add('sidebar-row');
        titleBlock.classList.add('title');
        valueBlock.classList.add('value');
        titleBlock.innerHTML = name;
        valueBlock.innerHTML = val;
        row.appendChild(titleBlock);
        row.appendChild(valueBlock);
        holder.appendChild(row);
    }
}

export default CalcForm;