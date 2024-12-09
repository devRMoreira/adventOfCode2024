const fs = require('fs')
const input = fs.readFileSync('day06Input.txt', 'utf8')
// ^
//1-up 2-right 3-down 4-left

console.log(part02())

function part02() {
	const map = input.split("\n").map((e) => e.split(""))
	const curr = findPos(map)
	const moves = {up : 0, right : 0, down : 0, left : 0}
	const newMoves = moves
	let res = 0
	curr.dir = checkDir(map, curr.y, curr.x)


	while (res != 1)
	{
		for(i = 0; i < map.length; i++)
		{
			for(j = 0; j < map[i].length; j++)
			{
				const newMap = map
				newMap[i][j] = "#"
				res = makeMove(moves, newMoves, map, curr)
			}

		}

	}

	return findPath(map)
}

function findPos(map) {

	const toFind = (e) => e != "#" && e != "."
	for(i = 0; i < map.length; i++)
	{
		const res = map[i].findIndex(toFind)

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

function findPath(map){

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

function checkDir(map,y,x) {

	if(map[y][x] === '^')
		return 1
	if(map[y][x] === '>')
		return 2
	if(map[y][x] === 'v')
		return 3
	if(map[y][x] === '<')
		return 4
}

function makeMove(moves, newMoves, map, curr) {

	if(curr.dir === 1)
	{
		moves.up++
		return moveUp(map, curr)
	}

	else if(curr.dir === 2)
	{
		moves.right++
		return moveRight(map, curr)
	}

	else if(curr.dir === 3)
	{
		moves.down++
		return moveDown(map, curr)
	}
	else if(curr.dir === 4)
	{
		moves.left++
		return moveLeft(map, curr)
	}

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

function moveUp(map, curr) {

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

function moveRight(map, curr) {

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

function moveDown(map, curr) {

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

function moveLeft(map, curr) {

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


