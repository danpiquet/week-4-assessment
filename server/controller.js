let fortunes = ['Sift through your past to get a better idea of the present.','Stop searching forever, happiness is just next to you.','The first man gets the oyster, the second man gets the shell.','Tonight you will be blinded by passion.','You are almost there.','You are almost there.','Benny is a really good friend',]


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
        let randFortune = fortunes[randIndex];
        res.status(200).send(randFortune);
    },
    addFortune: (req, res) => {
       let {fortune} = req.body
       fortunes.push(fortune)
       res.status(200).send('Fortune Added')
       
   },
   updateFortune: (req, res) => {
       let {index} = req.params
       let {fortune} = req.body
       fortunes.splice(index,1,fortune)
       res.status(200).send('Fortune has been updated')

   },
   deleteFortune: (req, res) => {
       let {index} = req.params
       fortunes.splice(index, 1)
       res.status(200).send('Fortune Deleted!')
   }

}