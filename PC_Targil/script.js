class Computer {
  computerCPU;
  graphicCard;
  memoryRAM;
  computerMemory;
  monitorBrand;
  computerBrand;

  constructor(computerCPUInput, graphicCardInput, memoryRAMInput, computerMemoryInput, monitorBrandInput, computerBrandInput) {
    this.computerCPU = computerCPUInput;
    this.graphicCard = graphicCardInput;
    this.memoryRAM = memoryRAMInput;
    this.computerMemory = computerMemoryInput;
    this.monitorBrand = monitorBrandInput;
    this.computerBrand = computerBrandInput;

  }
}
class Render {
  computer;

  constructor(computerInput) {
    this.computer = computerInput;

  }
  printComputer() {
    let makeDiv = document.createElement('div');
    let makeText = document.createTextNode(`${this.computer.computerBrand} ${this.computer.computerMemory} ${this.computer.graphicCard} ${this.computer.monitorBrand} ${this.computer.computerCPU}`);
    makeDiv.appendChild(makeText);
    document.body.append(makeDiv);

  }
}


let computers = [
  new Computer('intel', 'GeForce', '16GB', 512, 'LG', 'Asus'),
  new Computer('intel', 'GeForce', '16GB', 512, 'Asus', 'HP'),
  new Computer('AMD', 'Radeon', '8GB', 512, 'Asus', 'Lenovo'),

];
computers.forEach((computer) => {
  let newDiv = document.createElement('div');
  let newButton = document.createElement('button');
  newDiv.appendChild(newButton);
  document.body.append(newDiv);
  newButton.innerHTML = computer.computerBrand;
  
  newButton.addEventListener('click', () => {
    let a = new Render(computer);
    a.printComputer();
  });


});