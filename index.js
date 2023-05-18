// Code your solution here
function findMatching(drivers,name){
    const newDrivers=[]
    for(const driver of drivers){
        if (driver.toLowerCase()===name.toLowerCase()){
            newDrivers.push(driver) 
        }
    }
    return newDrivers
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
console.log(findMatching(drivers,'sam'))
function fuzzyMatch(divers,name){
    const newDrivers=[]
    for(const driver of drivers){
        if (driver.slice(0,2)===name.slice(0,2)){
            newDrivers.push(driver) 
        }
    }
    return newDrivers
}
console.log(findMatching(drivers,'Sa'))
function matchName(drivers,name){
    const newDriver=[]
    for(const driver of drivers){
        if (driver.name===name){
            newDriver.push(driver)
        }
    }
    return newDriver
}