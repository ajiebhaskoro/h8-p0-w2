// 1. Menyusun Barisan Bintang

var rows1 = 5

for (var i = 0; i < rows1; i++){
    var star = ''
    star += '*'
    console.log(star)
}

console.log('')

// 2. Menyusun Barisan Bintang Dengan Nested Looping"

var rows2 = 5

for (var i = 0; i < rows2; i++){
    var star2 = ''
    for (var j = 0; j < rows2; j++){
        star2 += '*'
    }
    console.log(star2)
}

console.log('')

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5

for (var i = rows3; i >= 0 ; i--){
    var star3 = ''
    for (var j = i; j < rows3; j++){
        star3 += '*'
    }
    console.log(star3)
}