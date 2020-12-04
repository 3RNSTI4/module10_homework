let X = 512;
switch (typeof X) {
    case ('number'):
        console.log('X - number');
        break;
    case ('string'):
        console.log('X - string');
        break;
    case ('boolean'):
        console.log('X - boolean');
        break;
    default:
        console.log('X - undefined')
}