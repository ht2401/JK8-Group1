const body = document.querySelector('body')
const tiles = body.querySelectorAll('.tile')

// TODO: starter setup
function init() {
    popUpNewTile2();
    popUpNewTile2();
    body.addEventListener('keydown', onKeyDown)
    // tiles.forEach(tile => {
    //     tile.classList.add('move')
    // })
}

// TODO: handle event 
function onKeyDown(e) {
    const direction = e.key 
    // TODO: find a way to activate the function based on direction
    switch (direction) {
        case 'w':
        case 'ArrowUp':
            tiles.forEach(tile => {
                handleAction(tile, direction)
            })
            break
        case 's':
        case 'ArrowDown':
            for (let i = tiles.length - 1; i >= 0; i--) {
                handleAction(tiles[i], direction)
            }
            break
        case 'a':
        case 'ArrowLeft':
            tiles.forEach(tile => {
                handleAction(tile, direction)
            })
            break
        case 'd':
        case 'ArrowRight':
            for (let i = tiles.length - 1; i >= 0; i--) {
                handleAction(tiles[i], direction)
            }
            break
    }

    // popup new tile2
    popUpNewTile2()
}

// TODO: handle action of each tile when keydown
function handleAction(tile, direction) {
    if (tile.textContent) {
        const clone = detectClone(0, parseInt(tile.id.slice(1)), tile, direction)
        if (clone) {
            // merge them and update the value
            merge(tile, clone, direction)
        } else {
            // move to end point
            move(tile, direction)
        }
    }
}

// TODO: detect if 2 tiles in a row/col have the same value
//       return the nearest similar tile in the direction
function detectClone(clone_id, id, tile, direction) {
    switch (direction) {
        case 'w':
        case 'ArrowUp':
            clone_id = (id <= 4 ? id : id - 4)
            break
        case 's':
        case 'ArrowDown':
            clone_id = (id >= 13 ? id : id + 4)
            break
        case 'a':
        case 'ArrowLeft':
            clone_id = (id % 4 === 1 ? id : id - 1)
            break
        case 'd':
        case 'ArrowRight':
            clone_id = (id % 4 === 0 ? id : id + 1)
            break
    }
    if (clone_id !== id) {
        const clone = body.querySelector(`#t${clone_id}`)
        const value = clone.textContent
        if (value === tile.textContent) {
            return clone
        } else if (value && tile.textContent) {
            return null
        } else {
            return detectClone(clone_id, clone_id, tile, direction)
        }
    }
    return null
}

// TODO: merge tile and clone (by change the value)
function merge(tile, clone, direction) {
    // merge tile and its clone in specific direction
    tile.textContent = ''
    // css modification
    tile.className = 'tile'
    toGreaterValue(clone)
    move(clone, direction)
    // !CASE: when 4 tiles merged to 2 tiles with similar value
    if (detectClone(0, parseInt(clone.id.slice(1)), clone, direction)) {
        move(clone, direction)
    }
}

// TODO: update value of a tile
function toGreaterValue(tile) {
    if (tile.textContent) {
        const new_value = parseInt(tile.textContent) * 2
        const old_value = tile.textContent
        console.log(new_value);
        tile.textContent = new_value
        tile.classList.add(`tile${new_value}`)
        tile.classList.remove(`tile${old_value}`)
    }
}

// TODO: move tile to the end edge it can go
function move(tile, direction) {
    const end_tile = detectEnd(0, parseInt(tile.id.slice(1)), direction, null)
    if (end_tile) {
        end_tile.textContent = tile.textContent
        end_tile.classList.add(`tile${tile.textContent}`)
        tile.textContent = ''
        tile.className = 'tile'
    }
}

// TODO: detect the end to move
//       return the end empty tile in the direction
function detectEnd(end_id, id, direction, pre_tile) {
    switch (direction) {
        case 'w':
        case 'ArrowUp':
            end_id = (id <= 4 ? id : id - 4)
            break
        case 's':
        case 'ArrowDown':
            end_id = (id >= 13 ? id : id + 4)
            break
        case 'a':
        case 'ArrowLeft':
            end_id = (id % 4 === 1 ? id : id - 1)
            break
        case 'd':
        case 'ArrowRight':
            end_id = (id % 4 === 0 ? id : id + 1)
            break
    }
    if (end_id !== id) {
        const end_tile = body.querySelector(`#t${end_id}`)
        const value = end_tile.textContent
        if (!value) {
            return detectEnd(end_id, end_id, direction, end_tile)
        } else {
            return pre_tile
        }
    } else {
        return pre_tile
    }
}

// TODO: popup new tile2
function popUpNewTile2() {
    let empty_tiles = []
    tiles.forEach(tile => {
        if (!tile.textContent) empty_tiles.push(tile)
    })
    let random_index = Math.floor(Math.random() * (empty_tiles.length))
    empty_tiles[random_index].textContent = '2'
    empty_tiles[random_index].classList.add('tile2')
    empty_tiles[random_index].classList.add('popup')
    empty_tiles[random_index].addEventListener('transitionend', (e) => {
        empty_tiles[random_index].classList.remove('popup')
    })
}

init()