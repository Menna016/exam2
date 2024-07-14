import { Detalis } from "./detalis.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor() {
        console.log("helo");
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.changeActiveLink(link);
                const category = link.dataset.category;

            });
        });
        this.detalis = document.getElementById('detalis');
        this.elmeals = document.getElementById('meals');
        this.ui = new Ui();
        this.getmeals('search');
    }


    changeActiveLink(link) {
        document.querySelector('.list-unstyled .active').classList.remove('active');
        link.classList.add('active');
    }


    async getmeals(cat) {

        const options = {
            method: 'GET',
        };

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`, options);
        const response = await api.json();
        console.log(response);

        if (response.meals) {
            this.ui.displayMeals(response.meals);
        } else if (response.categories) {
            this.ui.displayMeals(response.categories);
        } else if (response.areas) {
            this.ui.displayMeals(response.areas);
        } else if (response.ingredients) {
            this.ui.displayMeals(response.ingredients);
        } else {
            return [];
        }

        document.querySelectorAll('.box').forEach(box => {
            box.addEventListener('click', () => {
                console.log('menna');
                this.detalis.classList.remove('d-none');
                this.elmeals.classList.add('d-none');
                new Detalis();
            })
        })

       

    } catch(error) {
        console.error("Error fetching meals:", error);
        return [];

    }
}


