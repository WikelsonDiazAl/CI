// holaMundo.test.js
const holaMundo = require('./holamundo');

test('debería retornar "¡Hola Mundo!"', () => {
  expect(holaMundo()).toBe("¡Hola Mundo!");
});
