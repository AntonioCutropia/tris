window.addEventListener("DOMContentLoaded",e => {
    console.log("Ciao Beddu");
    let buttons = document.querySelectorAll(".cell-img");
    buttons.forEach(button => {
    button.addEventListener("click",e => {
        let cell=e.target;
        let cellId=cell.id;
        console.log(`You clicked on: ${cellId}`);
    });
    });

});