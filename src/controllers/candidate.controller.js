import candidateService from "../services/candidate.service.js";

const createCandidate = async (req, res) => {

    try {
        const candidate = await candidateService.create(req.body);

        if (!candidate) {
            return res.status(400).json({ message: "Error creating candidate" });
        }

        return res.status(201).json({
            message: "Candidate created successfully!",
            candidate: {
                id: candidate._id,
                name: req.body.name,
                cpf: req.body.cpf,
                skills: req.body.skills
            }
        });
    } catch(error) {
        return res.status(500).json({
            message: "Internal server error!",
            error: error.message
        });
    }

};

const findCandidatesBySkills = async (req, res) => {

    try {
        const candidate = await candidateService.findBySkills(req.skillsFilter);

        if (candidate.length === 0) {
            return res.status(404).json({ message: "Candidate not found!" });
        } else {
            return res.status(200).json({
                message: "Candidate found successfully!",
                candidate
            });
        }
    } catch(error) {
        return res.status(500).json({
            message: "Internal server error!",
            error: error.message
        });
    }
    
    
};

const teste = async (req, res) => {
    return res.status(201).json({ 
        vamos: true
    });
};

export default { createCandidate, findCandidatesBySkills, teste };