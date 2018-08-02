const cutLog = require('./memoized-log-cutting')

test('inital case is always zero', () => {
  p = [0]
  expect(cutLog(p, 0)).toEqual([0, []])
})

test('length of 1 will always be index 1', () => {
  p = [0, 5]
  expect(cutLog(p, 1)).toEqual([5, [1]])
})

test('it\'s possible to have a solution with waste', () => {
  p = [0, 5, 4]
  expect(cutLog(p, 2)).toEqual([10, [1, 1]])
})

test('will use sum of lesser indexes if they are greater than index n', () => {
  p = [0, 5, 6, 10]
  expect(cutLog(p, 3)).toEqual([15, [1, 1, 1]])
})

// The p list is organized by price to foot by index, so the 
//   1-index element contains the price for 1 ft, 2 is for 2 ft, 
//   3 is 3 ft, etc...
// Note that the 0th element has a cost of $0


describe("Example Log", function(){
  //         0    1    2    3    4    5    6    7... and so on
  var p = [  0,   1,   5,   8,   9,  10,  17,  17,  20,  24, // 0X's
            30,  32,  35,  39,  43,  43,  45,  49,  50,  54, // 1X's
            57,  60,  65,  68,  70,  74,  80,  81,  84,  85, // 2X's
            87,  91,  95,  99, 101, 104, 107, 112, 115, 116, // 3X's
           119] // 40th element
  it("The optimal price for n = 1 should be $1", function(){
    expect(cutLog(p, 1)).toEqual([1, [1]]);
  });
  it("The optimal price for n = 5 should be $13", function(){
    expect(cutLog(p, 5)).toEqual([13, [2, 3]]);
  });
  it("The optimal price for n = 8 should be $22", function(){
    expect(cutLog(p, 8)).toEqual([22, [2, 6]]);
  });
  it("The optimal price for n = 10 should be $30", function(){
    expect(cutLog(p, 10)).toEqual([30, [10]]);
  });
  it("The optimal price for n = 22 should be $65", function(){
    expect(cutLog(p, 22)).toEqual([65, [2, 6, 14]]);
  });
  it("The optimal price for n = 35 should be $105", function(){
    expect(cutLog(p, 35)).toEqual([105, [3, 6, 26]]);
  });
});

