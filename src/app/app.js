const alert = new Alert();
const component = new Component();

const run = (alert, component) => {
  alert.hideErrors();
  component.onClick(() => {
    const inputs = component.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      component.setResult(numA + numB);
    } else {
      component.setResult("");
      alert.handleAdditionError(inputs, parsedInputs);
    }
  });
};

run(alert, component);
