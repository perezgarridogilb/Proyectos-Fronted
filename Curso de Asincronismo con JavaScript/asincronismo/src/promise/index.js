const somethingWillHappen = () => { 
    return new Promise((resolve, reject) => { 
        if (true) { 
            resolve('Si!'); 
        } else { 
            reject('Whooops!'); 
        }
    })
}

somethingWillHappen()
.then(response => console.log(response)) 
.catch(err => console.error(err)); 

const somethingWillHappen1 = () => { 
    return new Promise((resolve, reject) => { 
        if (true) { 
            setTimeout(() => { 
                resolve('True');
            }, 2000) 
        } else { 
            reject('Whooops!'); 
        }
    }); 
} 

somethingWillHappen1()
.then(response => console.log(response)) 
.catch(err => console.error(err)); 

Promise.all([somethingWillHappen(), somethingWillHappen1()])
/* También se pueden utilizar llaves al iniciar las Arroy functions */
.then(response => console.log('Array of results', response)) 
.catch(err => console.error(err)); 
