let array = [];

function generateArray() {
    array = [];
    const container = document.getElementById("array-container");
    container.innerHTML = "";
    for(let i=0; i<10; i++){
        let value = Math.floor(Math.random() * 100) + 1;
        array.push(value);
        let bar = document.createElement("div");
        bar.className = "bar";
        bar.style.height = `${value * 2}px`;
        container.appendChild(bar);
    }
}

async function bubbleSort(){
    const bars = document.getElementsByClassName("bar");
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-i-1; j++){
            bars[j].style.backgroundColor = "red";
            bars[j+1].style.backgroundColor = "red";

            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                bars[j].style.height = `${array[j]*2}px`;
                bars[j+1].style.height = `${array[j+1]*2}px`;
            }

            await new Promise(resolve => setTimeout(resolve, 300));
            bars[j].style.backgroundColor = "teal";
            bars[j+1].style.backgroundColor = "teal";
        }
    }
}