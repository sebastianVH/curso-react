import {
  capitalize,
  useEventCallback_default,
  useForkRef
} from "./chunk-TGFAZAUV.js";

// node_modules/@mui/material/utils/capitalize.js
var capitalize_default = capitalize;

// node_modules/@mui/material/utils/memoTheme.js
var arg = {
  theme: void 0
};
function memoTheme(styleFn) {
  let lastValue;
  let lastTheme;
  return (props) => {
    let value = lastValue;
    if (value === void 0 || props.theme !== lastTheme) {
      arg.theme = props.theme;
      value = styleFn(arg);
      lastValue = value;
      lastTheme = props.theme;
    }
    return value;
  };
}

// node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback_default2 = useEventCallback_default;

// node_modules/@mui/material/utils/useForkRef.js
var useForkRef_default = useForkRef;

export {
  capitalize_default,
  memoTheme,
  useEventCallback_default2 as useEventCallback_default,
  useForkRef_default
};
//# sourceMappingURL=chunk-65A7IXNK.js.map
