import sortHeroes from '../src/index';

test('should sort heroes by health in descending order', () => {
    const input = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    const result = sortHeroes(input);

    expect(result).toEqual(expected);
});