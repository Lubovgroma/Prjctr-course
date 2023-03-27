'use strict'
//---------------task 3------------------

const movies = [
{
movieName: 'The Thing',
releaseYear: 1982,
directedBy: 'Carpenter',
runningTimeInMinutes: 109,
},
{
movieName: 'Aliens',
releaseYear: 1986,
directedBy: 'Cameron',
runningTimeInMinutes: 137,
},
{
movieName: 'Men in Black',
releaseYear: 1997,
directedBy: 'Sonnenfeld',
runningTimeInMinutes: 98,
},
{
movieName: 'Predator',
releaseYear: 1987,
directedBy: 'McTiernan',
runningTimeInMinutes: 107,
},
];

console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

function byProperty(property, direction) {
    const positiveValue = 1;
    const negativeValue = -1;
    const equalValue = 0;
    if(property === 'releaseYear')
    {
        if(direction === '>')
        {
            return (x,y) => {
                return x.releaseYear - y.releaseYear;
            }
        }
    }
    if(property === 'runningTimeInMinutes')
    {
        if(direction === '<')
        {
            return (x,y) => {
                return y.runningTimeInMinutes - x.runningTimeInMinutes;
            }
        }
    }
    if(property === 'movieName')
    {
        if(direction === '>')
        {
            return (x,y) => {
                let a = x.movieName.toLowerCase(),
                    b = y.movieName.toLowerCase();
                if (a < b) {
                    return negativeValue;
                }
                if (a > b) {
                    return positiveValue;
                }
                return equalValue;
            }
            
        }
    }
}
