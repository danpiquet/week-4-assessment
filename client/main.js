const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const addFortBtn = document.getElementById('new-fortune-btn')
const updateFortuneButton = document.getElementById('update-fortune-button')
const deleteFortuneButton = document.getElementById('delete-fortune-button')
let fortunes = ['Sift through your past to get a better idea of the present.','Stop searching forever, happiness is just next to you.','The first man gets the oyster, the second man gets the shell.','Tonight you will be blinded by passion.','You are almost there.','You are almost there.','Benny is a really good friend']


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
  axios.get('http://localhost:4000/api/fortune/')
  .then(res => {
    const data = res.data;
    alert(data)
  })

}

const updateFortune = () => {
    let fortuneIndex = document.getElementById('update-fortune-index')
    let updatedFortuneInput = document.getElementById('update-fortune-input')

    let bodyObj = {
        fortune: updatedFortuneInput.value
    }

    axios.put(`http://localhost:4000/api/fortune/${fortuneIndex.value}`, bodyObj)
    .then(res => {
        alert(res.data)
        updatedFortuneInput.value = ''
        fortuneIndex = ''
    })
}

const deleteFortune = () => {
    let deleteFortuneInput = document.getElementById('delete-fortune-input')
    axios.delete(`http://localhost:4000/api/fortune/${deleteFortuneInput.value}`)
    .then(res => {
        alert(res.data)
        deleteFortuneInput.value = ''
    })
}

const addFortune = async() => {
    const addFortInput = document.getElementById('add-fortune-input')
    let bodyObj = {
        fortune: addFortInput.value
    }
   let result = await axios.post(`http://localhost:4000/api/fortune/`, bodyObj)
   alert(result.data)
   addFortInput.value = ''
}




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)
addFortBtn.addEventListener('click',addFortune)
updateFortuneButton.addEventListener('click',updateFortune)
deleteFortuneButton.addEventListener('click',deleteFortune)