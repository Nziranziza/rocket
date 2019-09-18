import Rocket from '../rocket';

describe('Rocket test', () => {
  let rocket;
  const xPos = 4;
  const firstNumber = 5;
  const lastNumber = 6;
  const operator = '+';
  beforeEach(() => {
    rocket = new Rocket(xPos, firstNumber, lastNumber, operator);
  });
  it('should initialize Rocket class', () => {
    expect(rocket.xPosition).toEqual(xPos);
    expect(rocket.yPosition).toEqual(0);
    expect(rocket.scale).toEqual(0.2);
    expect(rocket.totalTime).toEqual(0);
    expect(rocket.state).toEqual('DESCENDING');
    expect(rocket.firstNumber).toEqual(firstNumber);
    expect(rocket.secondNumber).toEqual(lastNumber);
    expect(rocket.operator).toEqual(operator);
  });

  it('should load an Image', () => {
    expect(rocket.load()).toBeDefined();
  });

  it('should update a rocket', () => {
    rocket.update(2);
    expect(rocket.yPosition).toEqual(20);
  });

  it('should get yPos', () => {
    expect(rocket.yPos).toEqual(0);
  });
});
