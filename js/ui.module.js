export class Ui {
    constructor() {

    }

    displayMeals(data) {
        let mealsBox = ``;
        for (let i = 0; i < data.length; i++) {
            mealsBox += `
        <div class="box col-lg-3 col-md-4 col-sm-6">
                <div class="inner position-relative ">
                    <img src="${data[i].strMealThumb}" class="w-100 rounded-2" alt="">

                    <div class="text position-absolute d-flex align-items-center px-2 bottom-0 start-0 end-0 text-center rounded-2 ">
                        <h3>${data[i].strMeal}</h3>
                    </div>
                </div>
            </div>
            `
        }
        document.getElementById('row').innerHTML = mealsBox;
    }


}