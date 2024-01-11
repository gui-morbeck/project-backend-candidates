import candidateRepository from "../repositories/candidate.repository.js";  

const create = (body) => candidateRepository.create(body);

const findBySkills = async (skillsFilter) => {
    try {
        const candidates = await candidateRepository.findBySkills(skillsFilter);
        return candidates;
    } catch(error) {
        console.log(error);
    }
};

export default { create, findBySkills };