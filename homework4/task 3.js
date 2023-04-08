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

function byProperty(property, direction) {
    const negativeValue = -1;
    const positiveValue = 1;
    return (x,y) => {
        const checkProperty = () => {
            if (x[property] < y[property]){
                return negativeValue;
            } 
            else {
                return positiveValue; 
            }
        }
        if (direction === '>'){        
            return checkProperty();// ascending
        }else {
            return checkProperty()*(-1);//descending
        }

    }
}

console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*