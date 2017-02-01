import {Component} from '@angular/core';

@Component({
    selector: 'shopping-list-application',
    templateUrl: `app/app.html`
})
export class ShoppingListApplicationComponent {
    nbDishes=0;
    dishes: string;
    textStyle: string;
    msg:string;
    constructor() {
        
    }

    public countDishes() {
        this.nbDishes=this.calculateDishesForString(this.dishes);
        
         if(this.nbDishes==0){
            this.textStyle = "text-danger";
        }else{
            this.textStyle = "text-success";
        }
        this.msg=this.sayMessage(this.nbDishes);
        console.log("countDishes"+this.msg);
    }

    public calculateDishesForString(chaine: string){
        if (chaine==null || chaine.length==0) {
        return 0;
        } else {
        return chaine.split(",").length;
        }
    }

    public sayMessage(nbDishes:number){
        if (nbDishes==0) {
            return "Please enter data first";
        }
        if (nbDishes <= 3) {
            return "Enjoy!";
        } else {
            return "Too much!";
        }
    }

}