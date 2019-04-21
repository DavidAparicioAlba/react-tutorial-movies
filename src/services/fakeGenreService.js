export const genres = [
    {_id: 'a', name: "action"},
    {_id: 'b', name: "comedy"},
    {_id: 'c', name: "thriller"}
]

export function getGenres() {
    return genres.filter(g => g);
}