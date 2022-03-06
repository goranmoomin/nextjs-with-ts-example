export function spacing(multiplier: number = 1) {
  return 8 * multiplier;
}

// In devtools execute:
//
// Object.fromEntries(
//   Object.entries(
//     [...document.styleSheets]
//       .filter((styleSheet) => styleSheet.href == null)
//       .map((styleSheet) => [...styleSheet.cssRules])
//       .flat()
//       .map((cssRule) =>
//         cssRule.cssText.split("{")[1].split("}")[0].trim().split(";")
//       )
//       .flat()
//       .filter((text) => text !== "")
//       .map((text) => text.split(":").map((text) => text.trim()))
//       .filter(([key]) => key.startsWith("--"))
//       .reduce(
//         (result, [key, value]) => ({
//           ...result,
//           [key]: [...(result[key] || []), value],
//         }),
//         {}
//       )
//   ).map(([key, values]) => [key, [...new Set(values)]])
// );

export let typography = {
  fontFamily: `sohne-var, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  fontSize: {
    normal: 15,
    medium: 18,
    big: 38,
    giant: 94,
  },
  fontWeight: {
    light: 200, // --fontWeightLight
    normal: 300, // --fontWeightNormal
    semiBold: 400, // --fontWeightSemibold
    bold: 500, // --fontWeightBold
  },
  lineHeight: 1.6,
} as const;

export let icon = {
  iconSize: {
    small: 16,
    medium: 32,
  },
} as const;
