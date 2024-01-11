const validData = async (req, res, next) => {
    const { name, cpf, skills } = req.body;
    if (!name || !cpf || !skills) {
        return res.status(400).json({ message: "Submit all fields for registration" });
    }

    const skillsLowerCase = req.body.skills.map(skill => skill.toLowerCase());
    req.body.skills = skillsLowerCase;

    next();
};

const validCpf = async (req, res, next) => {
    const cpf = req.body.cpf.toString();
    next();
};

const validQueryFilter = async (req, res, next) => {
    
    let queryFilter = req.query.skills;
    
    if (queryFilter.lenght === "") {
        return res.status(400).json({ message: "Submit at least one skill for search" });
    }

    queryFilter = queryFilter.toLowerCase();
    queryFilter = queryFilter.split(',');

    req.skillsFilter = queryFilter;

    next();
};

export default { validData, validCpf, validQueryFilter };