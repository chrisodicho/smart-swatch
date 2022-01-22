import { generate } from '../generate';

const RED_PALETTE = {
  '50': '#ffe1e1',
  '100': '#ffb1b1',
  '200': '#ff7f7f',
  '300': '#ff4c4c',
  '400': '#ff1a1a',
  '500': '#e60000',
  '600': '#b40000',
  '700': '#810000',
  '800': '#500000',
  '900': '#210000',
};

describe('generate', () => {
  it('returns an object of colors from HEX', () => {
    // const colors = generate('hsl(0, 100%, 50%)')
    const colors = generate('#f00');
    expect(colors).toEqual(RED_PALETTE);
  });

  it('returns an object of colors from RGB', () => {
    const colors = generate('rgb(255, 0, 0)');
    expect(colors).toEqual(RED_PALETTE);
  });

  it('returns an object of colors from HSL', () => {
    const colors = generate('hsl(0, 100%, 50%)');
    expect(colors).toEqual(RED_PALETTE);
  });
});
