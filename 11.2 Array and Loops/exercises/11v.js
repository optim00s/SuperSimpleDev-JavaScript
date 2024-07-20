//FizzBuzz
for(let i = 1; i <= 20; i++) {
    /*
        3 və 5 bölünməni birinci 
        yazmaq lazımdır. 

        əks halda,

        if (i % 3 === 0) {
        . . . 
        i 15ə çatdıqda, ilk 3ə bölünmə 
        şərti yoxlanılır və bu da true olduğundan
        if işə düşür.
        nəticədə FizzBuzz yerinə Fizz göstərilir.
    */
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}