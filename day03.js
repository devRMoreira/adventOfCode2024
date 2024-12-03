const fs = require('fs')
const input = fs.readFileSync('day03Input.txt', 'utf8')

function part1() {
	let res = 0
	const regex = /mul\((\d{1,3}),(\d{1,3})\)/g
	const found = input.matchAll(regex)

	for (const mul of found) {

        const a = parseInt(mul[1], 10)
        const b = parseInt(mul[2], 10)
        res += a * b
    }
	return res
}

console.log(part1())

function part2() {
    const regex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g
    const matches = input.matchAll(regex)
    let doMul = true
    let res = 0

    for (const match of matches) {

        const [instruction, x, y] = match

        if (instruction === "do()") {
            doMul = true

        } else if (instruction === "don't()") {
            doMul = false

        } else if (doMul === true && x && y) {
            res += parseInt(x, 10) * parseInt(y, 10)

        }
    }
    return res
}

console.log(part2())
