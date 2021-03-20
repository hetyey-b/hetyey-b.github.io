const barnsley_f1 = [0,0,0,0.16,0,0]
const barnsley_f2 = [0.85,0.04,-0.04,0.85,0,1.6]
const barnsley_f3 = [0.2,-0.26,0.23,0.22,0,1.6]
const barnsley_f4 = [-0.15,0.28,0.26,0.24,0,0.44]
const barnsley_p1 = 0.01
const barnsley_p2 = 0.85
const barnsley_p3 = 0.07
const barnsley_p4 = 0.07
const barnsley_shiftUp = 0

const cyclosorus_f1 = [0,0,0,0.25,0,-0.4]
const cyclosorus_f2 = [0.95, 0.005, -0.005, 0.93, -0.002, 0.5]
const cyclosorus_f3 = [0.035, -0.2, 0.16, 0.04, -0.09, 0.02]
const cyclosorus_f4 = [-0.04, 0.2, 0.16, 0.04, 0.083, 0.12]
const cyclosorus_p1 = 0.02
const cyclosorus_p2 = 0.84
const cyclosorus_p3 = 0.07
const cyclosorus_p4 = 0.07
const cyclosorus_shiftUp = 100

const culcita_f1 = [0,0,0,0.25,0,-0.14]
const culcita_f2 = [0.85,0.02,-0.02,0.83,0,1]
const culcita_f3 = [0.09,-0.28,0.3,0.11,0,0.6]
const culcita_f4 = [-0.09,0.28,0.3,0.09,0,0.7]
const culcita_p1 = 0.02
const culcita_p2 = 0.84
const culcita_p3 = 0.07
const culcita_p4 = 0.07
const culcita_shiftUp = 100

const fishbone_f1 = [0,0,0,0.25,0,-0.4]
const fishbone_f2 = [0.95,0.002,-0.002,0.93,-0.002,0.5]
const fishbone_f3 = [0.035,-0.11,0.27,0.01,-0.05,0.005]
const fishbone_f4 = [-0.04,0.11,0.27,0.01,0.047,0.06]
const fishbone_p1 = 0.02
const fishbone_p2 = 0.84
const fishbone_p3 = 0.07
const fishbone_p4 = 0.07
const fishbone_shiftUp = 100

const CANVAS_BACKGROUND_COLOR = "white"
const CANVAS_FERN_COLOR = "darkgreen"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const barnsleyButton = document.querySelector("#barnsley")
const cyclosorusButton = document.querySelector("#cyclosorus")
const culcitaButton = document.querySelector("#culcita")
const fishboneButton = document.querySelector("#fishbone")
const dropdownButton = document.querySelector(".dropdownButton")

const generateButton = document.querySelector("#generate")
const autoUpdateCheckbox = document.querySelector("#autoUpdate")

const stepYInput = document.querySelector("#stepY")
const iterationCountInput = document.querySelector("#iterationCount")

const f1_a = document.querySelector("#f1_a")
const f1_b = document.querySelector("#f1_b")
const f1_c = document.querySelector("#f1_c")
const f1_d = document.querySelector("#f1_d")
const f1_e = document.querySelector("#f1_e")
const f1_f = document.querySelector("#f1_f")
const f1_p = document.querySelector("#f1_p")

const f2_a = document.querySelector("#f2_a")
const f2_b = document.querySelector("#f2_b")
const f2_c = document.querySelector("#f2_c")
const f2_d = document.querySelector("#f2_d")
const f2_e = document.querySelector("#f2_e")
const f2_f = document.querySelector("#f2_f")
const f2_p = document.querySelector("#f2_p")

const f3_a = document.querySelector("#f3_a")
const f3_b = document.querySelector("#f3_b")
const f3_c = document.querySelector("#f3_c")
const f3_d = document.querySelector("#f3_d")
const f3_e = document.querySelector("#f3_e")
const f3_f = document.querySelector("#f3_f")
const f3_p = document.querySelector("#f3_p")

const f4_a = document.querySelector("#f4_a")
const f4_b = document.querySelector("#f4_b")
const f4_c = document.querySelector("#f4_c")
const f4_d = document.querySelector("#f4_d")
const f4_e = document.querySelector("#f4_e")
const f4_f = document.querySelector("#f4_f")
const f4_p = document.querySelector("#f4_p")

//User influenced variables
let shiftUp = 0;
let iterationCount = 100000

let chances = [0.01,0.85,0.07,0.07]

let f1 = [0,0,0,0,0.16,0]
let f2 = [0.85,0.04,0,-0.04,0.85,1.6]
let f3 = [0.2,-0.26,0,0.23,0.22,1.6]
let f4 = [-0.15,0.28,0,0.26,0.24,0.44]

handleBarnsleyFernButtonClick()
barnsley()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function barnsley() {
    let w = canvas.width
    let h = canvas.height
    let x=0.,y=0.,xw=0.,yw=0.,r

    ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
    ctx.fillRect(0, 0, w, h);    

    const treshold1 = (chances[0]) * 100
    const treshold2 = (chances[0] + chances[1]) * 100
    const treshold3 = (chances[0] + chances[1] + chances[2]) * 100
    const maxR = (chances[0] + chances[1] + chances[2] + chances[3]) * 100

    console.log("------------------------")
    console.log("barnsley()")
    console.log("treshold1: " + treshold1)
    console.log("treshold1: " + treshold2)
    console.log("treshold1: " + treshold3)
    console.log("maxR: " + maxR)
    console.log("f1: " + f1)
    console.log("f2: " + f2)
    console.log("f3: " + f3)
    console.log("f4: " + f4)
    console.log("------------------------")

    let i = 0;
    for (i = 0; i < iterationCount; i++) {
        r = getRandomInt(maxR);
        /*
            Explanation
            =====================7
            f(x,y) =    [a,b]   [x] +   [e]
                        [c,d]   [y] +   [f]
            For easier copying from tables, e.g. wikipedia,
            we store the values in the array as: a,b,e,c,d,f
        */
        if (r <= treshold1) {
            xw = f1[0] * x + f1[1] * y + f1[4]
            yw = f1[2] * x + f1[3] * y + f1[5]
        } else if (r <= treshold2) {
            xw = f2[0] * x + f2[1] * y + f2[4]
            yw = f2[2] * x + f2[3] * y + f2[5]
        } else if (r <= treshold3) {
            xw = f3[0] * x + f3[1] * y + f3[4]
            yw = f3[2] * x + f3[3] * y + f3[5]
        } else {
            xw = f4[0] * x + f4[1] * y + f4[4]
            yw = f4[2] * x + f4[3] * y + f4[5]
        }
        x = xw;
        y = yw;
        ctx.fillStyle = CANVAS_FERN_COLOR;
        ctx.fillRect(x * 50 + (h/2), -y * 50 + w -shiftUp, 1, 1);
    }
    console.log("loop over with i: " + i)
}

function readValues() {
    shiftUp = parseFloat(stepYInput.value)
    iterationCount = parseInt(iterationCountInput.value)

    f1 = [f1_a.value,f1_b.value,f1_c.value,f1_d.value,f1_e.value,f1_f.value]
    f1 = f1.map(parseFloat)
    chances[0] = parseFloat(f1_p.value)

    f2 = [f2_a.value,f2_b.value,f2_c.value,f2_d.value,f2_e.value,f2_f.value]
    f2 = f2.map(parseFloat)
    chances[1] = parseFloat(f2_p.value)
    
    f3 = [f3_a.value,f3_b.value,f3_c.value,f3_d.value,f3_e.value,f3_f.value]
    f3 = f3.map(parseFloat)
    chances[2] = parseFloat(f3_p.value)
    
    f4 = [f4_a.value,f4_b.value,f4_c.value,f4_d.value,f4_e.value,f4_f.value]
    f4 = f4.map(parseFloat)
    chances[3] = parseFloat(f4_p.value)

    
}

function handleFernParams(f1Arr, f2Arr, f3Arr, f4Arr, p1, p2, p3, p4, _shiftUp) {
    shiftUp = _shiftUp

    stepYInput.value = shiftUp
    iterationCountInput.value = iterationCount

    f1_a.value = f1Arr[0]
    f1_b.value = f1Arr[1]
    f1_c.value = f1Arr[2]
    f1_d.value = f1Arr[3]
    f1_e.value = f1Arr[4] 
    f1_f.value = f1Arr[5]
    f1_p.value = p1

    f2_a.value = f2Arr[0]
    f2_b.value = f2Arr[1]
    f2_c.value = f2Arr[2]
    f2_d.value = f2Arr[3]
    f2_e.value = f2Arr[4] 
    f2_f.value = f2Arr[5]
    f2_p.value = p2

    f3_a.value = f3Arr[0]
    f3_b.value = f3Arr[1]
    f3_c.value = f3Arr[2]
    f3_d.value = f3Arr[3]
    f3_e.value = f3Arr[4] 
    f3_f.value = f3Arr[5]
    f3_p.value = p3

    f4_a.value = f4Arr[0]
    f4_b.value = f4Arr[1]
    f4_c.value = f4Arr[2]
    f4_d.value = f4Arr[3]
    f4_e.value = f4Arr[4] 
    f4_f.value = f4Arr[5]
    f4_p.value = p4

    readValues()
}

function handleBarnsleyFernButtonClick() {
    handleFernParams(barnsley_f1, barnsley_f2, barnsley_f3, barnsley_f4, barnsley_p1, barnsley_p2, barnsley_p3, barnsley_p4, barnsley_shiftUp)
    if(autoUpdateCheckbox.checked) {
        barnsley()
    }
}
function handleCyclosorusFernButtonClick() {
    handleFernParams(cyclosorus_f1,cyclosorus_f2,cyclosorus_f3,cyclosorus_f4,cyclosorus_p1,cyclosorus_p2,cyclosorus_p3,cyclosorus_p4, cyclosorus_shiftUp)
    if(autoUpdateCheckbox.checked) {
        barnsley()
    }
}
function handleCulcitaFernButtonClick() {
    handleFernParams(culcita_f1,culcita_f2,culcita_f3,culcita_f4,culcita_p1,culcita_p2,culcita_p3,culcita_p4, culcita_shiftUp)
    if(autoUpdateCheckbox.checked) {
        barnsley()
    }
}
function handleFishboneFernButtonClick() {
    handleFernParams(fishbone_f1,fishbone_f2,fishbone_f3,fishbone_f4,fishbone_p1,fishbone_p2,fishbone_p3,fishbone_p4, fishbone_shiftUp)
    if(autoUpdateCheckbox.checked) {
        barnsley()
    }
}


/* Handle the fern parameters on each value change */
function handleFernParamInput() {
    readValues()
    if(autoUpdateCheckbox.checked) {
        barnsley()
    }
}

let allFernParams = document.querySelectorAll(".fernParam")
Array.prototype.slice.call(allFernParams).map(function(element) {
    element.addEventListener("input",handleFernParamInput)
}) 
stepYInput.addEventListener("input",handleFernParamInput)
iterationCountInput.addEventListener("input",handleFernParamInput)



barnsleyButton.addEventListener("click", handleBarnsleyFernButtonClick)
cyclosorusButton.addEventListener("click", handleCyclosorusFernButtonClick)
culcitaButton.addEventListener("click", handleCulcitaFernButtonClick)
fishboneButton.addEventListener("click",handleFishboneFernButtonClick)

generateButton.addEventListener("click",barnsley)