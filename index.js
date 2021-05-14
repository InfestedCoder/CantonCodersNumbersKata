export const answer = (input) => {
    const dict = {1:"one",2:"two",3:"three",11:"eleven"};
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
