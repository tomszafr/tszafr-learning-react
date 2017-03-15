export const LOAD_TEXT = 'LOAD_TEXT'

 export function loadText(textContent) {
   return { type: LOAD_TEXT, textContent}
 }
