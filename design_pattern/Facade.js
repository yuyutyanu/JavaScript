var myevent = {
    // ...
    stop : function (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    // ...
};
