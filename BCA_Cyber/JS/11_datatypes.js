function checkDataType(){
    let a = 10;
    console.log(typeof a);//number

    let b = 10.5;
    console.log(typeof b);//number

    let c = 100000;
    console.log(typeof c);//number

    let d = "Hello";
    console.log(typeof d);//string

    let e = "H"
    console.log(typeof e);//string

    let f = "This is a string";
    console.log(typeof f);//string

    let g = true;
    console.log(typeof g);//boolean

    let h;
    console.log(typeof h);//undefined

    let i = null;
    console.log(typeof i);

    let j = [1, 2, 3];
    console.log(typeof j);//object

    let k = {}
    console.log(typeof k);//object
}

checkDataType();    