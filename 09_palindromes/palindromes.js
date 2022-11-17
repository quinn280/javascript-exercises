const palindromes = function (str) {
    let start = 0;
    let end = str.length - 1;

    str = str.toLowerCase();

    while (start < end) 
    {
        let startChar = str.charAt(start);
        let endChar = str.charAt(end);

        if (!startChar.match(/^[0-9a-z]+$/))
        {
            start++;
            continue;
        }

        if (!endChar.match(/^[0-9a-z]+$/))
        {
            end--;
            continue;
        }

        if (startChar != endChar)
            return false;

        start++;
        end--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
