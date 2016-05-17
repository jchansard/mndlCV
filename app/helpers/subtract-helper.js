import Ember from 'ember';

export function subtractHelper(params) {
  return params.reduce((previousValue, currentValue) => previousValue - currentValue);
}

export default Ember.Helper.helper(subtractHelper);
