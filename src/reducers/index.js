import * as actions from '../actions';

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
  if (action.type === actions.ADD_BOX) {
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

  if (action.type === actions.REMOVE_BOX) {
    return Object.assign({}, state, {
      editor: {
        colorOptions: action.colorOptions
      }
    });
  }

  if (action.type === actions.CHECKED_BOX) {
    return Object.assign({}, state, {
      editor: {
        colorOptions: action.colorOptions
      }
    });
  }

  if (action.type === actions.HUE_CHANGE) {
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

  if (action.type === actions.HUE_CHANGE) {
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

  if (action.type === actions.SATURATION_CHANGE) {
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

  if (action.type === actions.LIGHTNESS_CHANGE) {
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