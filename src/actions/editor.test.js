import {
  ADD_BOX,
  addBox,
  REMOVE_BOX,
  removeBox,
  CHECKED_BOX,
  checkedBox,
  HUE_CHANGE,
  hueChanged,
  SATURATION_CHANGE,
  saturationChanged,
  LIGHTNESS_CHANGE,
  lightnessChanged,
  RENDER_ONE_PALETTE,
  renderOnePalette
} from './editor';

describe('addBox', () => {
  it('Should return the action', () => {
    const action = addBox();
    expect(action.type).toEqual(ADD_BOX);
  });
});

describe('removeBox', () => {
  it('Should return the action', () => {
    const colorOptions = 'colorOptions';
    const action = removeBox(colorOptions);
    expect(action.type).toEqual(REMOVE_BOX);
    expect(action.colorOptions).toEqual(colorOptions);
  });
});

describe('checkedBox', () => {
  it('Should return the action', () => {
    const colorOptions = 'colorOptions';
    const action = checkedBox(colorOptions);
    expect(action.type).toEqual(CHECKED_BOX);
    expect(action.colorOptions).toEqual(colorOptions);
  });
});

describe('hueChanged', () => {
  it('Should return the action', () => {
    const data = {
      hueValue: 'hueValue',
      colorIndex: 'colorIndex'
    }
    const action = hueChanged(data);
    expect(action.type).toEqual(HUE_CHANGE);
    expect(action.hueValue).toEqual(data.hueValue);
    expect(action.colorIndex).toEqual(data.colorIndex);
  });
});

describe('saturationChanged', () => {
  it('Should return the action', () => {
    const data = {
      saturationValue: 'saturationValue',
      colorIndex: 'colorIndex'
    }
    const action = saturationChanged(data);
    expect(action.type).toEqual(SATURATION_CHANGE);
    expect(action.saturationValue).toEqual(data.saturationValue);
    expect(action.colorIndex).toEqual(data.colorIndex);
  });
});

describe('lightnessChanged', () => {
  it('Should return the action', () => {
    const data = {
      lightnessValue: 'lightnessValue',
      colorIndex: 'colorIndex'
    }
    const action = lightnessChanged(data);
    expect(action.type).toEqual(LIGHTNESS_CHANGE);
    expect(action.lightnessValue).toEqual(data.lightnessValue);
    expect(action.colorIndex).toEqual(data.colorIndex);
  });
});

describe('renderOnePalette', () => {
  it('Should return the action', () => {
    const data = {
      fetchedpalette: 'fetchedpalette'
    }
    const action = renderOnePalette(data);
    expect(action.type).toEqual(RENDER_ONE_PALETTE);
    expect(action.fetchedpalette).toEqual(data);
  })
})