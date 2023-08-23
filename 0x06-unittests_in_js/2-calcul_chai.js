function calculateNumber(type, a, b) {
    const round_a = Math.round(a);
    const round_b = Math.round(b);
    if (type == "SUM") return round_a + round_b;
    if (type == "SUBTRACT") return round_a - round_b;
    if (type == "DIVIDE") {
        if (round_b == 0) return 'Error';
        return round_a / round_b;
    }
}

module.exports = calculateNumber;
