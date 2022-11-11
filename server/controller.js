module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            'Sift through your past to get a better idea of the present.',
            'Stop searching forever, happiness is just next to you.',
            'The first man gets the oyster, the second man gets the shell.',
            'Tonight you will be blinded by passion.',
            'You are almost there.',
            'Benny is a really good friend'
        ]
        let randIndex = Math.floor(Math.random() * fortunes.length);
        let randFortune = fortunes[randIndex];
        res.status(200).send(randFortune);
    },
    addCompliment: (req, res) => {
        let {addComp} = req.body
        let newComp = addComp
        
        res.status(200).send(console.log(newComp))
        
    },
    addFortune: (req, res) => {
        let {addFortune} = req.body
        let newFortune = addFortune
        
        res.status(200).send(console.log(newFortune))
    },
    deleteFortune: (req, res) => {
        let index = fortunes.findIndex(el => el.id === +req.params.id)
        fortunes.splice(index, 1)
        res.status(200).send(fortunes)
    },
    updateFortune: (req, res) => {
        let {id} = req.params
        let index = fortunes.findIndex(fortune => +fortune.id === +id)

    },
    suggestNewFriend: (req, res) => {
        const friends = [
            'Benny',
            'Emily',
            'Ben',
            'Aimee',
            'Cody',
            'Chandler'
        ]
        let randIndex = Math.floor(Math.random() * friends.length)
        let randFriend = friends[randIndex];
        res.status(200).send(randFriend)
    }

}