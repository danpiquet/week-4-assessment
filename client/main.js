const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('new-fortune-btn')
const addCompliment = document.getElementById('addCompForm')
const addFort = document.getElementById('addFortune')
const newFriend = document.getElementById('friendButton')
const fortunes = [
    {
        text: 'Sift through your past to get a better idea of the present.',
        id: 1
    },
    {
        text: 'Stop searching forever, happiness is just next to you.',
        id: 2
    },
    {
        text: 'The first man gets the oyster, the second man gets the shell.',
        id: 3
    },
    {
        text: 'Tonight you will be blinded by passion.',
        id: 4
    },
    {
        text: 'You are almost there.',
        id: 5
    },
    {
        text: 'You are almost there.',
        id: 6
    },
    {
        text: 'Benny is a really good friend',
        id: 7
    }
    
]
let globalId = 8


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = async() => {
  let result =  await axios.get('http://localhost:4000/api/fortune/')
  alert(result.data)

}

const suggestNewFriend = async() => {
   let result = await axios.get('http://localhost:4000/api/friend/')
   alert(result.data)
}

const addFortune = async() => {
    let fortune = document.getElementById('add-fortune-input')
    let bodyObj = {
        text: fortune.value
    }
   let result = await axios.post(`http://localhost:4000/api/fortune/${fortuneIndex.value}`)
   alert(res.data)
   fortuneIndex.value = ''
}




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)
// addCompliment.addEventListener('submit',addComp)
newFriend.addEventListener('click',suggestNewFriend)
addFort.addEventListener('click',addFortune)
fortuneBtn.addEventListener('click',addFortune)