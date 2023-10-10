const ArrayKit = {
    wrap: (index, value, length) => {
        if (index + value > length - 1) {
            return -1 + value;
        } else if (index + value < 0) {
            return length + value;
        } else {
            return index + value;
        }
    },
    wrappedSlice: (arr, start, end) => {
        let resultArray = [];


        for (let i = start; i <= end; i++) {
            resultArray.push(arr[(start + i) % arr.length]);
        }

        return resultArray;


    }
};

export default ArrayKit;