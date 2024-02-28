
function flattenObject(obj) {
    let newArr = {};
    Object.keys(obj).forEach((i) => {
      if (typeof obj[i] === 'string' || typeof obj[i] === 'number') {
        newArr = { ...newArr, [i]: obj[i] };
      }
      if (typeof obj[i] === 'object') {
        newArr = { ...newArr, ...flattenObject(obj[i]) };
      }
    });
  
    return newArr;
  }
  
  console.log(
    flattenObject({
      one: 1,
      two: 2,
      three: 3,
      demo: { rep: 'io', uo: 'po', jel: { pop: 'anu' } },
    })
  );
  