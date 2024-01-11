import mongoose from "mongoose";

const CandidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true,
        unique: true
    },
    skills: {
        type: [String],
        required: true
    }
});

const Candidate = mongoose.model("Candidate", CandidateSchema);

export default Candidate;