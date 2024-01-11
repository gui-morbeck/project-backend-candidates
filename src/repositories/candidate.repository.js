import Candidate from "../models/Candidate.js";

const create = (body) => Candidate.create(body);

const findBySkills = async (skillsFilter) => {
    try {
        const candidates = await Candidate.aggregate([
            {
                $match: {
                    skills: { $in: skillsFilter }
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    cpf: 1,
                    skills: 1,
                    numCommonElements: {
                        $size: {
                            $setIntersection: ['$skills', skillsFilter]
                        }
                    }
                }
            },
            {
                $sort: {
                    numCommonElements: -1
                }
            },
            {
                $limit: 1
            },
            {
                $project: {
                    //_id: 1,
                    name: 1,
                    //cpf: 1,
                    //skills: 1,
                    //numCommonElements: 1,
                    commonElements: {
                        $setIntersection: ['$skills', skillsFilter]
                    }
                }
            },
        ]);
        return candidates;
    } catch(error) {    
        console.log(error);
    }
    
};

export default { create, findBySkills };