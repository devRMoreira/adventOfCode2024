const fs = require('fs')
const input = fs.readFileSync('day06Input.txt', 'utf8')
const map = input.split("\n").map((e) => e.split(""))
// ^
//1-up 2-right 3-down 4-left

console.log(part1())

function part1() {

	const curr = findPos()
	console.log(curr)
	curr.dir = checkDir(curr.y, curr.x)
	let res = 0
	while (res != 1)
		res = makeMove(curr)

	return findPath()
}

function findPos() {

	const toFind = (e) => e != "#" && e != "."
	for(i = 0; i < map.length; i++)
	{
		const res = map[i].findIndex(toFind)
		console.log(res)
		if (res != -1)
		{
			return {
				x : res,
				y : i
			}
		}
	}

	return 0
}

function findPath(){

	let res = 0

	for(i = 0; i < map.length; i++)
	{
		for(j = 0; j < map[i].length; j++)
		{
			if(map[i][j] == "X")
				res++
		}
	}

	return res
}

function checkDir(y,x) {

	if(map[y][x] === '^')
		return 1
	if(map[y][x] === '>')
		return 2
	if(map[y][x] === 'v')
		return 3
	if(map[y][x] === '<')
		return 4
}

function makeMove(curr) {

	if(curr.dir === 1)
		return moveUp(curr)

	else if(curr.dir === 2)
		return moveRight(curr)

	else if(curr.dir === 3)
		return moveDown(curr)

	else if(curr.dir === 4)
		return moveLeft(curr)

}

function makeTurn(curr)
{
	if(curr.dir === 1)
		curr.dir = 2
	else if(curr.dir === 2)
		curr.dir = 3
	else if(curr.dir === 3)
		curr.dir = 4
	else if(curr.dir === 4)
		curr.dir = 1
}

function moveUp(curr) {

	while(map[curr.y - 1][curr.x] != "#")
	{

		map[curr.y][curr.x] = "X"
		curr.y -= 1

		if(curr.y == 0)
		{
			map[curr.y][curr.x] = "X"
			return 1
		}
	}


	curr = makeTurn(curr)
	return 0
}

function moveRight(curr) {

	while(map[curr.y][curr.x + 1] != "#")
	{

		map[curr.y][curr.x] = "X"
		curr.x += 1

		if(curr.x == map[curr.y].length - 1)
		{
			map[curr.y][curr.x] = "X"
			return 1
		}
	}

	curr = makeTurn(curr)
	return 0
}

function moveDown(curr) {

	while(map[curr.y + 1][curr.x] != "#")
	{
		map[curr.y][curr.x] = "X"
		curr.y += 1


		if(curr.y == map.length - 1)
			{
				map[curr.y][curr.x] = "X"
				return 1
			}
	}

	curr = makeTurn(curr)
	return 0
}

function moveLeft(curr) {

	while(map[curr.y][curr.x - 1] != "#")
	{
		map[curr.y][curr.x] = "X"
		curr.x -= 1

		if(curr.x == 0)
		{
			map[curr.y][curr.x] = "X"
			return 1
		}
	}

	curr = makeTurn(curr)
	return 0
}


