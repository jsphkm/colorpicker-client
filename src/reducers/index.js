import * as editor from '../actions/editor';
import * as palettes from '../actions/palettes';

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

export const mainReducer = (state=initialState, action) => {

  if (action.type === editor.ADD_BOX) {
    return Object.assign({}, state, {
      editor: {
        colorOptions: [...state.editor.colorOptions, {
          checked: false,
          color: {
            hue: Math.floor(Math.random() * 360),
            saturation: Math.floor(Math.random() * 100),
            lightness: Math.floor(Math.random() * 100)
          }
        }]
      }
    });
  }

  if (action.type === editor.REMOVE_BOX) {
    return Object.assign({}, state, {
      editor: {
        colorOptions: action.colorOptions
      }
    });
  }

  if (action.type === editor.CHECKED_BOX) {
    return Object.assign({}, state, {
      editor: {
        colorOptions: action.colorOptions
      }
    });
  }

  if (action.type === editor.HUE_CHANGE) {
    const newColorValues = Object.assign({}, state.editor.colorOptions[action.colorIndex], {
      color: {
        hue: action.hueValue,
        saturation: state.editor.colorOptions[action.colorIndex].color.saturation,
        lightness: state.editor.colorOptions[action.colorIndex].color.lightness
      }
    });

    const newEditorStates = [...state.editor.colorOptions];
    newEditorStates[action.colorIndex] = newColorValues;
    return Object.assign({}, state, {
      editor: {
        colorOptions: newEditorStates
      }
    })
  }

  if (action.type === palettes.RENDER_PALETTES) {
    console.log(action);
    const newPalettesList = action.palettes;
    return Object.assign({}, state, {
      dashboard: {
        palettes: newPalettesList
      }
    })
  }

  if (action.type === editor.SATURATION_CHANGE) {
    const newColorValues = Object.assign({}, state.editor.colorOptions[action.colorIndex], {
      color: {
        hue: state.editor.colorOptions[action.colorIndex].color.hue,
        saturation: action.saturationValue,
        lightness: state.editor.colorOptions[action.colorIndex].color.lightness
      }
    });

    const newEditorStates = [...state.editor.colorOptions];
    newEditorStates[action.colorIndex] = newColorValues;
    return Object.assign({}, state, {
      editor: {
        colorOptions: newEditorStates
      }
    })
  }

  if (action.type === editor.LIGHTNESS_CHANGE) {
    const newColorValues = Object.assign({}, state.editor.colorOptions[action.colorIndex], {
      color: {
        hue: state.editor.colorOptions[action.colorIndex].color.hue,
        saturation: state.editor.colorOptions[action.colorIndex].color.saturation,
        lightness: action.lightnessValue,
      }
    });

    const newEditorStates = [...state.editor.colorOptions];
    newEditorStates[action.colorIndex] = newColorValues;
    return Object.assign({}, state, {
      editor: {
        colorOptions: newEditorStates
      }
    })
  }

  return state;
};

export default mainReducer;