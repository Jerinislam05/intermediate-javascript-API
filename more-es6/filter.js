// filter mane kichu jinish neya ekta array theke, mane j sorto ta ami dibo seta fulfill korbe jesob elements segulo e nibe
// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
const numbers = [1, 3, 2, 5, 3, 7, 11];
const players = [51, 83, 72, 65, 73, 97, 61];
// const selected = players.filter(p => p > 70);
// const selected2 = players.filter(p => p > 80);
// const selected3 = players.filter(p => p > 50);
const selected4 = players.filter(p => p % 2 === 0);
console.log(selected4);

const friends = ['tom', 'John', 'mikel', 'james', 'oliver', 'joshna']
const oddFeiends = friends.filter(f => f.length > 4);
console.log(oddFeiends);
