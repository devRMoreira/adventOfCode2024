//299
const fs = require('fs')
const input = fs.readFileSync('day2Input.txt', 'utf8')

console.log(part1())

function part1() {

	const lines = input.split("\n").map((line) => line.split(" ").map(Number))
	let res = 0

	for(let line in lines)
		res += checkLine(lines[line])

	return res
}

function checkLine(line) {

	let flag = null

	if(flag == null) {
		if(line[0] > line[1])
			flag = 1
		else if(line[0] < line[1])
			flag = 0
		else
			return 0
	}

	for(let i = 0; i < line.length - 1; i++)
	{
		if(flag === 1) {
			if(!checkDec(line[i], line[i+1]))
				return 0
		}
		else {
			if(!checkInc(line[i], line[i+1]))
				return 0
		}
	}

	return 1
}

function checkInc(curr,next) {

	if(curr >= next)
		return 0
	if(next - curr < 1)
		return 0
	if(next - curr > 3)
		return 0

	return 1
}

function checkDec(curr,next) {

	if(curr <= next)
		return 0
	if(curr - next < 1)
		return 0
	if(curr - next > 3)
		return 0

	return 1
}
