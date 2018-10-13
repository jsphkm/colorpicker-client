import mainReducer from './index';
import * as editor from '../actions/editor';
import * as palettes from '../actions/palettes';

describe('mainReducer', () => {
  let currentState = {};
  const initialState = {
    dashboard: {
      palettes: []
    },
    editor: {
      colorOptions: [
        {
          checked: true,
          color: {
            hue: Math.floor(Math.random() * 360),
            saturation: Math.floor(Math.random() * 100),
            lightness: Math.floor(Math.random() * 100)
          }
        }
      ]
    }
  };

  it('Should set the initial state when nothing is passed in', () => {
    const state = mainReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toHaveProperty('editor');
  });

  it('Should return the current state on an unknown action', () => {
    const state = mainReducer(initialState, {type: '__UNKNOWN'});
    expect(state).toBe(initialState);
  });

  it('Should render one palette', () => {
    const state = mainReducer(currentState, {type: editor.RENDER_ONE_PALETTE, fetchedpalette: 'fetchedpalette'});
    expect(state).toEqual({editor: {colorOptions: 'fetchedpalette'}});
  });

  it('Should render palettes', () => {
    const state = mainReducer(currentState, {type: palettes.RENDER_PALETTES, palettes: 'palettes'});
    expect(state).toEqual({dashboard: {palettes: 'palettes'}});
  });

  it('Should remove box', () => {
    const state = mainReducer(currentState, {type: editor.REMOVE_BOX, colorOptions: 'colorOptions'});
    expect(state).toEqual({editor: {colorOptions: 'colorOptions'}});
  })

  it('Should check box', () => {
    const state = mainReducer(currentState, {type: editor.CHECKED_BOX, colorOptions: 'colorOptions'});
    expect(state).toEqual({editor: {colorOptions: 'colorOptions'}});
  })
})