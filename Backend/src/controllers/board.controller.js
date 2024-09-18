import { Board } from '../models/board.model.js';


const SavingBoardName =async (req,res) =>{
    const user = req.user
    const {boardName} = req.body

    if (!boardName) {
        return res.status(400).json({ error: 'Board name is required.' });
      }
    

    try {
        const newBoard = new Board({
            BoardName:boardName
        })

        const saveBoard = await newBoard.save()

        return res.status(201).json({ message: 'Board saved successfully' },{saveBoard});
    } catch (error) {
        console.error("board name is not suitable ",error)
        return res
      .status(500)
      .json({ message: "something in boardname went wrong " });
    }

}




export {SavingBoardName
}
