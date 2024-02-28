const obj = {
    one: 'one',
    two: 'two',
    three: 'three',
    arr: [1, 2, 4],
    newObj: {
      ten: 10,
      nine: 9,
    },
    callFun: function () {
      console.log(this.one);
    },
  };
  
  function cloneDeep(object) {
    let newObj = {};
    Object.keys(object).forEach((key) => {
      if (typeof object[key] === 'string' || typeof object[key] === 'number') {
        newObj = { ...newObj, [key]: object[key] };
      }
      if (Array.isArray(object[key])) {
        newObj = { ...newObj, [key]: [...object[key]] };
      }
      if (typeof object[key] === 'function') {
        newObj = { ...newObj, [key]: object[key] };
      }
      if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
        newObj = { ...newObj, [key]: cloneDeep(object[key]) };
      }
    });
  
    return { ...newObj };
  }
  const cloneedObj = cloneDeep(obj);
  console.log(cloneedObj);
  
  // console.log(cloneDeep ===  obj)
  // console.log(obj ===  obj)
  // console.log(obj ===  {...obj})
  console.log(obj.newObj === { ...obj }.newObj);
  console.log(obj.newObj === cloneedObj.newObj);
  