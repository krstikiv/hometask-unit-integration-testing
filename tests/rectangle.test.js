import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should properly output correct perimeter', () => {
    const checkPerimeter = getRectanglePerimeter(10, 10);
    expect(checkPerimeter).toBe(40);
});

test('should properly output correct area', () => {
    const checkArea = getRectangleArea(10, 5);
    expect(checkArea).toBe(50);
});

test('should properly output correct perimeter and area', () => {
    const checkRectangleInfo = getRectangleInfo(10, 10);
    expect(checkRectangleInfo).toEqual(console.log(`The perimeter of a rectangle is 40 and the area is 100`));
});