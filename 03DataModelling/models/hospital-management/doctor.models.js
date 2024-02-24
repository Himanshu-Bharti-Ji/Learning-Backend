import mongoose, { mongo } from "mongoose";

const hospitalWorkHoursSchema = new mongoose.Schema({
    hospitalName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    workInHours: {
        type: Number,
        default: 0
    }
});

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        default: 0
    },
    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ],
    WorkInHours: {
        type: [hospitalWorkHoursSchema]
    }
}, {timestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema);