"use strict";

(() => {
    const buttons = [
        {
          label: 'C',
          type: 'clear',
          value: 'clear',
          size: 'big',
          keys: ['c', 'C', 'Backspace']
        },
        {
          label: '/',
          type: 'operation',
          value: 'divide',
          size: 'small',
          keys: ['/']
        },
        {
          label: '7',
          type: 'number',
          value: '7',
          size: 'small',
          keys: ['7']
        },
        {
          label: '8',
          type: 'number',
          value: '8',
          size: 'small',
          keys: ['8']
        },{
          label: '9',
          type: 'number',
          value: '9',
          size: 'small',
          keys: ['9']
        },{
          label: '*',
          type: 'operation',
          value: 'multiply',
          size: 'small',
          keys: ['*']
        },{
          label: '4',
          type: 'number',
          value: '4',
          size: 'small',
          keys: ['4']
        },{
          label: '5',
          type: 'number',
          value: '5',
          size: 'small',
          keys: ['5']
        },{
          label: '6',
          type: 'number',
          value: '6',
          size: 'small',
          keys: ['6']
        },{
          label: '-',
          type: 'operation',
          value: 'subtract',
          size: 'small',
          keys: ['-']
        },{
          label: '1',
          type: 'number',
          value: '1',
          size: 'small',
          keys: ['1']
        },{
          label: '2',
          type: 'number',
          value: '2',
          size: 'small',
          keys: ['2']
        },{
          label: '3',
          type: 'number',
          value: '3',
          size: 'small',
          keys: ['3']
        },{
          label: '+',
          type: 'operation',
          value: 'add',
          size: 'small',
          keys: ['+']
        },{
          label: '0',
          type: 'number',
          value: '0',
          size: 'medium',
          keys: ['0']
        },{
          label: '.',
          type: 'number',
          value: '.',
          size: 'small',
          keys: ['.']
        },{
          label: '=',
          type: 'operation',
          value: 'calculate',
          size: 'small',
          keys: ['=', 'Enter']
        }
    ];

    const calculatorLogic = document.getElementById('calc-logic');
    const calculatorComponent = document.getElementById('calc-view');

    function onCalculatorViewEvent(event) {
        const operation = {
          number: event.detail.number,
          operation: event.detail.operation
        }

        calculatorLogic.setAttribute('calculation', JSON.stringify(operation));
    }

    function onCalculationResult(event) {
      calculatorComponent.setAttribute('calculatorDisplay', event.detail.result);
    }

    calculatorComponent.setAttribute('buttons', JSON.stringify(buttons));
    calculatorComponent.addEventListener('calc-event', onCalculatorViewEvent);
    calculatorLogic.addEventListener('result', onCalculationResult);
})();
