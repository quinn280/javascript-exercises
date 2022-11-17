const fibonacci = function(num) {
        if (num < 0)
            return "OOPS";

        let f2 = 0;
        let f1 = 0;
        let f = 1;

        for (let i = 1; i < num; ++i)
        {
            f2 = f1;
            f1 = f;
            f = f1 + f2;
        }

        return f;
};

// Do not edit below this line
module.exports = fibonacci;
