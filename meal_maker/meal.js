const menu = {
    _courses: {
        appetizers:[],
        mains:[],
        desserts:[]
    },
    get courses(){
        return{
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: [],
            price: []
        }
        this._courses[courseName].push(dish)
    },

    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName]
        const random = Math.floor(Math.random() * dishes.length)
        return dishes
    },

    generateRandomMeal: function(){
        const appetizer = this.getRandomDishFromCourse('appetizer')
        const main = this.getRandomDishFromCourse('main')
        const dessert = this.getRandomDishFromCourse('dessert')
        const totalPrice = appetizer.price + main.price + dessert.price

        return console.log(`Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. Total price is ${totalPrice}.`)
    },

    get appetizers(){

    },
    set appertizers(appetizersIn){

    },
    get mains(){

    },

    set mains(mainsIn){

    },
    get desserts(){

    },
    set deserts(desertsIn){

    }

}

menu.addDishToCourse('appetizers', 'salad1', 4.5)
menu.addDishToCourse('appetizers', 'salad2', 5)
menu.addDishToCourse('appetizers', 'salad3', 6)
menu.addDishToCourse('main', 'meal1', 10)
menu.addDishToCourse('main', 'meal2', 15)
menu.addDishToCourse('main', 'meal3', 20)
menu.addDishToCourse('desserts', 'dessert1', 12)
menu.addDishToCourse('desserts', 'dessert2', 15)
menu.addDishToCourse('desserts', 'dessert3', 18)