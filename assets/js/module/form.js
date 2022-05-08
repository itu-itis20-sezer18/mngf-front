class Form {
  constructor() {}

  form2Obj(FormElementArray) {
    let data = {};
    FormElementArray.forEach((item) => {
      data[item.name] = item.value;
    });
    return data;
  }
}

export default Form;
