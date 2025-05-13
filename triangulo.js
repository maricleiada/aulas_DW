function tipoTriangulo(a, b, c) {
    const ladosValidos = a > 0 && b > 0 && c > 0;
    const desigualdadeTriangular = a + b > c && a + c > b && b + c > a;
    if (!ladosValidos || !desigualdadeTriangular) {
        return "none";
    }

    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || b === c || a === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
}
