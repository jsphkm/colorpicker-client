import {
  RENDER_PALETTES,
  renderPalettes
} from './palettes';

describe('renderPalettes', () => {
  it('Should return the action', () => {
    const data = 'data'
    const action = renderPalettes(data);
    expect(action.type).toEqual(RENDER_PALETTES);
    expect(action.palettes).toEqual(data);
  })
})