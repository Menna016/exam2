export class Detalis {
    constructor() {
        document.getElementById('close-btn').addEventListener('click', () => {
            document.getElementById('detalis').classList.add('d-none');
            document.getElementById('meals').classList.remove('d-none');

        })

       //! this.getDetails();
    };


   //! async getDetails() {
      //!  const options = {
         //!   method: 'GET',
       //! };
          //!  const api = await fetch(`https://themealdb.p.rapidapi.com/lookup.php?i=52772`, options);
           ///! const response = await api.json();
           //! console.log(response);
       
 //!   }

}