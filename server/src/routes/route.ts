import Express = require("express");
const router = Express.Router()

//cad parts
interface CADpart{
    id : number;
    name: string;
    category: 'pipe'|'valve'|'flange'|'Elbow';
    material:string;
    diameter:number;//mm
}

// In-memory part storage
const parts : CADpart[] = [{id: 1, name: "Pipe A", category: "pipe", material: "Steel", diameter: 50 },];

const allowedCategories: Set<string> = new Set(['pipe', 'valve', 'flange', 'Elbow']);

//rest API
router.route("/")

.get((req , res)=>{

    return res.status(200).json(parts);
})

.post((req , res)=>{
    const { id, name, category, material, diameter } = req.body;
    
    if( typeof id !== 'number' ||
        typeof name !=='string'||
        !allowedCategories.has(category)||
        !material || typeof diameter !== 'number')
        {
        return res.status(400).json({ error: "Invalid input data" });
    }
    // Check for duplicate ID
    else if (parts.find(part =>part.id ===id)){
        return res.status(409).json({error:'Part with this ID already exists'})
    }

    const newparts : CADpart = {id, name, category, material, diameter};
    parts.push(newparts);
    res.status(201).json(newparts);
});


// DELETE part by id
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const part = parts.find(part => part.id === id);

    // Find the index of the part in the array
    const partindex = parts.findIndex(part => part.id === id);
    const lastindex = parts.length - 1;

    // Check if part or index not found
    if (part === undefined || partindex === -1) {
        return res.status(404).json({ error: "Part not found" });
    }

    // Swap with last and pop for efficient removal
    [parts[partindex], parts[lastindex]] = [parts[lastindex], parts[partindex]];
    parts.pop();
    return res.status(200).json({ message: "Part Deleted Successfully" });
});


module.exports = router;