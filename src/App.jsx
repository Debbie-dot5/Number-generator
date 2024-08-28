import './App.css';

// create an interface for the app and add styling to it 
// when it is even, green
    // A number divided by 2 that results to zero
// when it is odd, yellow
        // A number divided by 2 that results to one

// when prime numbers, red
        // A number that can divide one and itself




const App = () => {
          
const numbersArray =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,29, 30 ,31]

       
        const checkPrime = (primeNum) => {
                if (primeNum <= 1) return false;
                if (primeNum === 2) return true; 
                if (primeNum % 2 === 0) return false; 
            
              
                for (let i = 3; i * i <= primeNum; i += 2) {
                  if (primeNum % i === 0) return false;
                }
            
                return true; 
              };
       
            
       

  return (
  
   <div>
        
        <div className='header'>
        <h1>30 days of react</h1>
        <p>Number generator</p>
        </div>

        <div className='main-container'>   
        {numbersArray.map((number, index) => {  
                
          const tryStyle = {
          backgroundColor: 
          number % 2 === 0 ? 'rgb(33,191,115)' : 
          checkPrime(number) ? 'rgb(253,94,83)' :
           'rgb(253,219,58)',
        }        
         return (
                <div key={index} className='box' style={tryStyle}>  {number}</div>
         )
        })}
        </div> 

   </div> 
  )
}

export default App
