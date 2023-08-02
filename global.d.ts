// global.d.ts

declare global {
    interface Window {
      ethereum?: any;
    }
  }
  
  // Your file has to have at least one 'export' or 'import' to be considered a 'module'
  // and to have access to the 'declare global' syntax.
  export {}
  