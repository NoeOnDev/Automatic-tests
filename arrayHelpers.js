export function getUniqueValues(arr) {
    return [...new Set(arr)]; 
  }
  
export function filterByLength(arr, length) {
  return arr.filter(el => el.length >= length); 
}