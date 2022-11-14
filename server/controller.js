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

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
       
        let randIndex = Math.floor(Math.random() * fortunes.length);
        let randFortune = fortunes[randIndex].text;
        res.status(200).send(randFortune);
    },
    addCompliment: (req, res) => {
        let {addComp} = req.body
        let newComp = addComp
        
        res.status(200).send(console.log(newComp))
        
    },
     addFortune: (req, res) => {
        let {fortune} = req.body
        fortunes.push(fortune)
        res.status(200).send('Fortune Added')
        
    },
    deleteFortune: (req, res) => {
        let {index} = req.params
        fortunes.splice(index, 1)
        res.status(200).send('Fortune Deleted!')
    },
    updateFortune: (req, res) => {
        let {index} = req.params
        let {fortune} = req.body
        fortunes.splice(index,1,fortune)
        res.status(200).send('Fortune has been updated')

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