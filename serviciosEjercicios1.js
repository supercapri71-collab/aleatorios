valeMinu = function (codigoAscii) {
    if (codigoAscii > 96 && codigoAscii < 123) {
        /* prome = " minuscula";*/
        errormi = true;
    }
    return errormi;
}
valeMinu1 = function (codigoAscii) {
    if (codigoAscii > 64 && codigoAscii < 91) {
        /*prome = " MAYUSCUULA";*/
        errorma = true;
    }
    return errorma;
}
valeMinu2 = function (codigoAscii) {
    if (codigoAscii > 47 && codigoAscii < 58) {
        /*prome = "UN NUMERO";*/
        errornu = true;
    }
    return errornu;
}   
valeMinu3 = function (codigoAscii) {
    if (codigoAscii == 42 || codigoAscii == 95) {
        /*  prome = " signo";*/
        errorsi = true;
    }
    return errorsi;
}