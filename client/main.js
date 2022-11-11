const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const addCompliment = document.getElementById('addCompForm')
const addFortune = document.getElementById('addFortune')
const newFriend = document.getElementById('friendButton')


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
const addComp = () => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    let newComp = document.getElementById('addComp')
    compliments.push(newComp)
    
}

const suggestNewFriend = async() => {
   let result = await axios.get('http://localhost:4000/api/friend/')
   alert(result.data)
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)
addCompliment.addEventListener('submit',addComp)
newFriend.addEventListener('click',suggestNewFriend)