export default function objectToQueryParams(obj) {
    const queryParams = [];
    
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        
        // Skip null and undefined values
        if (value === null || value === undefined) {
          continue;
        }
        
        queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
    
    return queryParams.join('&');
  }