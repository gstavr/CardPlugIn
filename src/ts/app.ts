import {employee} from './employee';


function addAndHandle(n1:number, n2:number, cb: (num:number) => number){
    const result = n1 + n2;
    let returnedValue = cb(result);
    console.log(returnedValue);
}

addAndHandle(10,20, (result) => {
    console.log(result);
    return 20;
});

function addCallback(callback: (text:string)=> void){
    let txt = 'This is the text';
    callback(txt);
};


addCallback((test:string)=>{
    console.log(test);

    let emp:employee = new employee('George', 30);
    console.log(emp._name);
});



