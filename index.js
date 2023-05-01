

function newImage(url, left, bottom) { 
    let pixels = document.createElement('img')
    pixels.src = url
    pixels.style.position = 'fixed'
    pixels.style.left = left + 'px'
    pixels.style.bottom = bottom + 'px'
    document.body.append(pixels)
    return pixels
};

function newItem(url, left, bottom) {
    /*let sword = document.createElement('img')
    sword.src = url
    sword.position = 'fixed'
    sword.left = left +'px'
    sword.bottom = bottom + 'px'
    document.body.append(sword)
    */
    let pixels = newImage(url, left, bottom)

    pixels.addEventListener('dblclick', function(){
    pixels.remove()
})

}
/*
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)


let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
*/


newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/pine-tree.png', 450, 200)
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)