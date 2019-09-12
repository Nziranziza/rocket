import fs from 'fs';
import path from 'path';
import AnswerField from '../answerField';

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
document.documentElement.innerHTML = html.toString();
jest
  .dontMock('fs');

const answer = new AnswerField();
describe('Test AnswerField Class', () => {
  it('should initial the class', () => {
    expect(answer.isSubmitted).toBeFalsy();
    expect(answer.answerField).toBeDefined();
  });

  it('should get value', () => {
    expect(answer.value).toEqual(NaN);
  });

  it('should clear the field', () => {
    answer.clear();
    expect(answer.value).toEqual(NaN);
    expect(answer.isSubmitted).toEqual(false);
  });

  it('should set focus', () => {
    const spy = jest.spyOn(answer.answerField, 'focus');
    answer.focus();
    expect(spy).toHaveBeenCalled();
  });
});
