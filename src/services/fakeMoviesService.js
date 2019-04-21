export const movies = [
    {
        _id: 1,
        title: "terminator",
        genre: { _id: 'a', name: "action"},
        numberInStock: 1,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: 2,
        title: "airplane",
        genre: { _id: 'a', name: "action"},
        numberInStock: 1,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: 3,
        title: "harry potter",
        genre: { _id: 'a', name: "action"},
        numberInStock: 2,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: 4,
        title: "pulp fiction",
        genre: { _id: 'a', name: "action"},
        numberInStock: 3,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: 5,
        title: "terminator",
        genre: { _id: 'a', name: "action"},
        numberInStock: 5,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: 6,
        title: "die hard",
        genre: { _id: 'a', name: "action"},
        numberInStock: 8,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: 7,
        title: "mamma mia",
        genre: { _id: 'b', name: "comedy"},
        numberInStock: 13,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: 8,
        title: "terminator",
        genre: { _id: 'a', name: "action"},
        numberInStock: 21,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: 9,
        title: "the avengers",
        genre: { _id: 'a', name: "action"},
        numberInStock: 34,
        dailyRentalRate: 2.5,
        liked: false
    }
]

export function getMovies() {
    return movies.filter(g => g);
}