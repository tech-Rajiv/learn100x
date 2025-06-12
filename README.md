# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



function isEqual(a, b) {
  if (a === b) return true; 

  if (typeof a !== typeof b || a === null || b === null) return false;


  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    const bUsed = new Array(b.length).fill(false);
    for (let i = 0; i < a.length; i++) {
      let found = false;
      for (let j = 0; j < b.length; j++) {
        if (!bUsed[j] && isEqual(a[i], b[j])) {
          bUsed[j] = true;
          found = true;
          break;
        }
      }
      if (!found) return false;
    }
    return true;
  }


  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!(key in b)) return false;
      if (!isEqual(a[key], b[key])) return false;
    }
    return true;
  }


  return false;
}