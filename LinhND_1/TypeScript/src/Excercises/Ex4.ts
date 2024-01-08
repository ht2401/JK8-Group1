enum colors {RED = 0, GREEN = 1, BLUE = 2};

export function printColorName(value: number) {
    switch (value) {
        case colors.RED:
            return "RED";
        case colors.BLUE:
            return "BLUE";
        case colors.GREEN:
            return "GREEN";
        default:
            return "INVALID COLOR"
    }
}