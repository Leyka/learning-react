/**
 * Action creator: Add the value from the Input to the current counter
 * @returns {{type: string}}
 */
export const addToCounter = () => ({
  type: 'ADD'
});

/**
 * Action creator: Subtract the value from the Input to the current counter
 * @returns {{type: string, payload: *}}
 */
export const subtractToCounter = () => ({
  type: 'SUBTRACT'
});

/**
 * Action creator: store the inputted value to the global state (Controlled input)
 * @param value
 * @returns {{type: string, payload: *}}
 */
export const saveInputValue = value => ({
  type: 'INPUT_CHANGE',
  payload: value
});

