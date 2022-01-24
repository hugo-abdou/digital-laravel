export function muscular_strong(gender, age, val) {
    if (age <= 25) {
        console.log(gender);
        if (gender == "Male") {
            return val > 28 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 20 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 35) {
        if (gender == "Male") {
            return val > 21 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 19 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 45) {
        if (gender == "Male") {
            return val > 16 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 14 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 55) {
        if (gender == "Male") {
            return val > 12 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 10 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 65) {
        if (gender == "Male") {
            return val > 10 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 10 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
}
export function endurance_strong(gender, age, val) {
    if (age <= 25) {
        if (gender == "Male") {
            return val > 44 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 39 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 35) {
        if (gender == "Male") {
            return val > 40 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 30 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 45) {
        if (gender == "Male") {
            return val > 35 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 25 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 55) {
        if (gender == "Male") {
            return val > 30 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 21 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 65) {
        if (gender == "Male") {
            return val > 24 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 12 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
}
export function flexibility_strong(gender, age, val) {
    if (age <= 25) {
        if (gender == "Male") {
            return val > 19.5 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 21.5 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 35) {
        if (gender == "Male") {
            return val > 18.5 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 20.5 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 45) {
        if (gender == "Male") {
            return val > 17.5 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 20 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 55) {
        if (gender == "Male") {
            return val > 16.5 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 19 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 65) {
        if (gender == "Male") {
            return val > 15.5 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 17.5 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
}
export function aerobic_strong(gender, age, val) {
    if (age <= 25) {
        if (gender == "Male") {
            return val > 11 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 13 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 35) {
        if (gender == "Male") {
            return val > 11.5 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 13.5 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 45) {
        if (gender == "Male") {
            return val > 12 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 14 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 55) {
        if (gender == "Male") {
            return val > 13 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 16 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
    if (age <= 65) {
        if (gender == "Male") {
            return val > 14 ? " (Strong)" : " (Weak)";
        }
        if (gender == "Female") {
            return val > 17.5 ? " (Strong)" : " (Weak)";
        }
        return " (Weak)";
    }
}
