const txtSwitch = require('./index.js');

test('txtSwitch', () => {
    console.log(jest.fn().mock.calls)
    
    expect(txtSwitch('abc')).not.toBeUndefined();
    
})