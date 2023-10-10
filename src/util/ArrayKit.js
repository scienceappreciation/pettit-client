const ArrayKit = {
    wrap: (index, value, length) => {
        if (index + value > length - 1) {
            return -1 + value;
        } else if (index + value < 0) {
            return length + value;
        } else {
            return index + value;
        }
    }
};

export default ArrayKit;