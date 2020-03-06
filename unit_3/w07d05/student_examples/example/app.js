console.log('We are now back in week 2');


class Thing {
    constructor(name){
        this.name = name
    }

    render(){
        const app = document.querySelector('#app')
        app.innerHTML = `<h1>${this.name} says hi</h1>`
    }
}

const myThing = new Thing('cartoon')

myThing.render()
