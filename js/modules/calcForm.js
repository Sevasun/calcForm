function CalcForm(options) {
    let defaults = {
        inputsSelector: '[data-calc]',
        multiplyInputSelector: '[data-multiply]',
        targetBlock: '.sidebar-block'
    };

    let {inputsSelector, multiplyInputSelector, targetBlock} = {...defaults, ...options};

    let inputs = document.querySelectorAll(inputsSelector);
    let inputsArray = [...inputs];
    let inputsRadio = inputsArray.filter((elem) => elem.getAttribute('type') === 'radio');
    let inputsCheckbox = inputsArray.filter((elem) => elem.getAttribute('type') === 'checkbox');
    let totalValueField = document.querySelectorAll('.total-value');
    let totalValue = 0;
    let multiply = document.querySelector(multiplyInputSelector);
    let multiplyValue = +multiply.value || 1;

    let store = {};

    // let group = [];

    cleanRows();

    // inputsRadio.forEach((el) => {
        
    //     let name = el.getAttribute('name');
    //     if(!~group.indexOf(name)) {
    //         group.push(name);
    //     };
    //     if(group.length) {

    //     }
        
    // });

    // console.log(group);

    createId();
    
    inputs.forEach((el) => {
        let name = el.getAttribute('name');
        if(el.getAttribute('type') === 'radio') {
            store.radio = {};
            if(el.checked) {
                let id = el.getAttribute('data-calc-id');
                store.radio[name] = id;
            }
        } else {
            if(el.checked && !store[name]) {
                let id = el.getAttribute('data-calc-id');
                store[name] = id;
            }
        };
        el.addEventListener('change', function() {
            // multiplyValue = +multiply.value || 1;
            // totalValue = 0;
            // cleanRows();
            // receiveDataFromChecked(inputs);
            // updateTotalValue(totalValue);
        });
    });

    console.log(store);

    

    receiveDataFromChecked(inputs);

    updateTotalValue(totalValue);

    function createId() {
        inputs.forEach((elem, i) => {
            elem.setAttribute('data-calc-id', i);
        })
    }

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
            let id = elem.getAttribute('data-calc-id');
            totalValue += value;
            createRow(title, value, id);
            return totalValue;
        });
    };

    function createRow(name, val, id) {
        let holder = document.querySelector(targetBlock);
        let row = document.createElement('div');
        let titleBlock = document.createElement('div');
        let valueBlock = document.createElement('div');
        row.classList.add('sidebar-row');
        row.setAttribute('data-calc-row-id', id);
        titleBlock.classList.add('title');
        valueBlock.classList.add('value');
        titleBlock.innerHTML = name;
        valueBlock.innerHTML = val;
        row.appendChild(titleBlock);
        row.appendChild(valueBlock);
        holder.appendChild(row);
    };

    function deleteRow(id) {
        targetBlock.removeChild(document.querySelector(`[data-calc-row-id]=${id}`));
    }

    function cleanRows() {
        let holder = document.querySelector(targetBlock);
        holder.innerHTML = '';
    };
}

export default CalcForm;