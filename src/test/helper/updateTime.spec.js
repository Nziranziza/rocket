import updateTime from '../../helper/updateTime';
import { maximumSpeedScore, minimumSpeedScore } from '../../../mocks/mockData';

describe('updateTime function test', () => {
  it('should return 150 with zero score', () => {
    document.documentElement.innerHTML = minimumSpeedScore;
    expect(updateTime()).toEqual(150);
  });

  it('should return 20 with maximum speed score', () => {
    document.documentElement.innerHTML = maximumSpeedScore;
    expect(updateTime()).toEqual(20);
  });
});
