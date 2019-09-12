import assets from '../assets';

describe('Assets function test', () => {
  const url = 'dumy-url';
  it('should load image', () => {
    const img = new Image();
    expect(assets.loadImage(url)).resolves.toEqual(img);
  });

  it('should not load image', () => {
    const error = new Error(`Failed to load ${url}`);
    expect(assets.loadImage(url)).rejects.toEqual(error);
  });
});
