import Entity from '../entity';

const entity = new Entity();

describe('Entity class test', () => {
  it('should initiate entity class', () => {
    expect(entity.load).toBeDefined();
    expect(entity.update).toBeDefined();
    expect(entity.draw).toBeDefined();
  });
});
