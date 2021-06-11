export const answer = (input) => {
    const dict = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };

    if(input===0)
        return "zero"

    let result = "";

    if (input >= 30) {
        result += "thirty ";
        input -= 30;
    }
    else if (input >= 20) {
        result += "twenty ";
        input = input - 20;
    }

    if(input in dict)
        result += dict[input];

    return result;
}
