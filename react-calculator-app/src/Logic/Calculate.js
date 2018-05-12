import React from 'react';

export const calculate = (state, buttonName) => {
    if (buttonName === 'C') {
      return {
        displayValue: '',
        total: '',
        nextValue: ''
      };
    };
}
