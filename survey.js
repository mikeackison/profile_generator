
// get the information, store in variabless
// we need to ask more than one question and store the variables
// printthe fianl string at the end with the variables using a template literal

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What should we call you?  ', (name) => {
  
  rl.question('What do you like to do?  ', (hobby) => {
    
    rl.question(`What do you listen to while you ${hobby}?  `, (music) => {
    
      rl.question('Which meal is your favourite? Breaky, Lunch, or Dinner? ', (meal) => {

        rl.question(`What's your favourite thing to eat for ${meal}?  `, (favoriteFood) => {

          rl.question('Which sport is your absolute favourite?  ', (sport) => {

            rl.question('What is your superpower? ', (superpower) => {

              console.log(`${name} loves listening to ${music} while ${hobby}, devouring ${favoriteFood} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}`);
            
              rl.close();
              
            });
          });
        });
      });
    });
  });
});
