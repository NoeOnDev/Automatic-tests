import { getUniqueValues, filterByLength } from '../arrayHelpers.js';

describe('getUniqueValues()', () => {

    it('debería remover duplicados de un array', () => {  
      const testArray = [1, 1, 2, 2, 3];  
      const uniqueArray = getUniqueValues(testArray);
  
      expect(uniqueArray).toEqual([1, 2, 3])    
    });
  
  });
  
  
  describe('filterByLength()', () => {
  
    const cities = ['Lima', 'Quito', 'Caracas'];
  
    it('debería filtrar correctamente por longitud', () => {
      
        const filtered = filterByLength(cities, 3); 

        expect(filtered).toEqual(['Lima', 'Quito', 'Caracas'])
    });  
  
  });