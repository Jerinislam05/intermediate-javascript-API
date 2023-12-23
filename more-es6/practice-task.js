// task-1: console log the secondary school location of sophia
let data = {
    Sofia: {
        id: 33,
        study: [
            {
                primary: [
                    {school_name: "ABC school"},
                    {location: 'london'}
                ]
            },
            {
                secondary: [
                    {school_name: "ABC secondary school"},
                    {location: "Bangladesh"}
                ]
            },
        ]
    }
}
console.log(data.Sofia.study[1].secondary[1]);
// answer --> { location: 'Bangladesh' }


// task-2: show output 'london' and 'herry'
let student = {
    2222: {
        name: 'jack',
        section: 'c',
        class: 'xi',
        address: {
            'building': 12,
            'street': 'st. jonson',
            'city': 'london',
            'country': 'UK'
        }
    },

    3333: {
        name: 'herry',
        section: 'd',
        class: 'x',
    }
}

console.log(student[2222].address.city);
console.log(student[3333].name);
// answer-->london,herry

// task-3: show 'habluder adda' and show output 'beginner'
let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: 'habluder adda',
                categories: 'xyz',
                price: '20$'
            },
            bookCategory: 'basic',
        },
        {
            bookId: 2,
            bookDetails: {
                name: 'gobluder adda',
                categories: 'abc',
                prices: '40$',
            },
            bookCategory: 'beginner',
        }
    ]
}
console.log(data2.data[0].bookDetails.name);
// answer: habluder adda
console.log(data2.data[1].bookCategory);
// answer: beginner