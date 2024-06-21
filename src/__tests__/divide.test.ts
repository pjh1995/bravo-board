import { divideArray } from '../app/tictactoc/Board'

test('divideArray', () => {
    expect(divideArray([1, 2, 3, 4, 5, 6], 3)).toBe([[1, 2, 3], [4, 5, 6]])
})