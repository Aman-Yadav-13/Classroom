const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Principal = require('./model/Principal');
const Teacher = require('./model/Teacher');
const Student = require('./model/Student');
const Classroom = require('./model/Classroom');

const app = express();
const mongoURI = 'mongodb+srv://aman13092003:rWyIKMDwZH7OW04g@cluster0.3vl4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware to enable CORS and configure allowed origins, methods, and headers
app.use(cors({
    origin: ['http://localhost:1234', 'https://classroom-coral.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: 'Content-Type,Authorization', 
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoURI)
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Endpoint to handle Principal login
app.post('/api/login/Principal', async (req, res) => {
    console.log('inside principal');
    try {
        const { id, password } = req.body;
        console.log(id, password);

        const principal = await Principal.findOne({ id: id, password: password });

        if (principal == null) {
            res.status(400).json({ message: 'Invalid id or password' });
        } else {
            res.status(200).json({ message: 'Login Successful...' });
        }
    } catch (err) {
        console.log('Error during login : ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to handle Student login
app.post('/api/login/Student', async (req, res) => {
    console.log('inside student');
    try {
        const { id, password } = req.body;
        console.log(id, password);

        const student = await Student.findOne({ id: id, password: password });

        if (student == null) {
            res.status(400).json({ message: 'Invalid id or password' });
        } else {
            res.status(200).json({ message: 'Login Successful...' });
        }
    } catch (err) {
        console.log('Error during login : ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to handle Teacher login
app.post('/api/login/Teacher', async (req, res) => {
    console.log('inside teacher');
    try {
        const { id, password } = req.body;
        console.log(id, password);

        const teacher = await Teacher.findOne({ id: id, password: password });

        if (teacher == null) {
            res.status(400).json({ message: 'Invalid id or password' });
        } else {
            res.status(200).json({ message: 'Login Successful...' });
        }
    } catch (err) {
        console.log('Error during login : ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to fetch the list of teachers
app.get('/api/teacher-list', async (req, res) => {
    try {
        const teacher = await Teacher.find();

        if (teacher == null) {
            res.status(400).json({ message: 'Teacher collection not found' });
        } else {
            res.status(200).json({ message: 'Teachers fetched successfully...', data: teacher });
        }
    } catch (err) {
        console.log('Error during fetching teachers : ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to fetch students for a specific teacher
app.get('/api/teacher/student-list', async (req, res) => {
    try {
        const { id } = req.query;
        const owner = await Teacher.findOne({ id: id });
        console.log('owner : ', owner)
        const student = await Student.find({ classroomid: owner.classroomid });

        if (student == null) {
            res.status(400).json({ message: 'Student collection not found' });
        } else {
            res.status(200).json({ message: 'Students fetched successfully...', data: student });
        }
    } catch (err) {
        console.log('Error during fetching students : ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to fetch the list of classrooms
app.get('/api/classroom-list', async (req, res) => {
    try {
        const classroom = await Classroom.find();

        if (classroom == null) {
            res.status(400).json({ message: 'Classroom collection not found' });
        } else {
            res.status(200).json({ message: 'Classroom fetched successfully...', data: classroom });
        }
    } catch (err) {
        console.log('Error during fetching Classroom : ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to fetch the list of students
app.get('/api/student-list', async (req, res) => {
    console.log('inside principal student list')
    try {
        const student = await Student.find();

        if (student == null) {
            res.status(400).json({ message: 'Student collection not found' });
        } else {
            res.status(200).json({ message: 'Students fetched successfully...', data: student });
        }
    } catch (err) {
        console.log('Error during fetching students : ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to fetch students for a specific student
app.get('/api/student/student-list', async (req, res) => {
    try {
        const { id } = req.query;
        const owner = await Student.findOne({ id: id });
        // console.log('owner : ', owner)
        const student = await Student.find({ classroomid: owner.classroomid });

        if (student == null) {
            res.status(400).json({ message: 'Student collection not found' });
        } else {
            res.status(200).json({ message: 'Students fetched successfully...', data: student });
        }
    } catch (err) {
        console.log('Error during fetching students : ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to add a new teacher
app.post('/api/add-teacher', async (req, res) => {
    try {
        const { name, id, password, classroomid } = req.body;

        const teacher = new Teacher({
            name,
            id,
            password,
            classroomid
        });

        await teacher.save();

        res.status(200).json({ message: 'Teacher added successfully...' });
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to add a new student
app.post('/api/add-student', async (req, res) => {
    try {
        const { name, id, password, classroomid, teacherid } = req.body;
        console.log(req.body);

        const student = new Student({
            name,
            id,
            password,
            classroomid,
            teacherid
        });

        await student.save();

        res.status(200).json({ message: 'Student added successfully...' });
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to add a new classroom
app.post('/api/add-classroom', async (req, res) => {
    try {
        const { name, id } = req.body;
        console.log(req.body);

        const classroom = new Classroom({
            id,
            name,
        });

        await classroom.save();

        res.status(200).json({ message: 'Classroom added successfully...' });
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to update an existing student
app.put('/api/update-student', async (req, res) => {
    try {
        const { name, id, password, classroomid, teacherid } = req.body;
        console.log(req.body);

        const updateStudent = await Student.findOneAndUpdate({ id: id }, {
            name,
            id,
            password,
            classroomid,
            teacherid
        }, { new: true });

        if (!updateStudent) {
            res.status(400).json({ message: 'Student not found' });
        } else {
            res.status(200).json({ message: 'Student updated successfully...' });
        }
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to update an existing teacher
app.put('/api/update-teacher', async (req, res) => {
    try {
        const { name, id, password, classroomid } = req.body;
        console.log(req.body);

        const updateTeacher = await Teacher.findOneAndUpdate({ id: id }, {
            name,
            id,
            password,
            classroomid
        }, { new: true });

        if (!updateTeacher) {
            res.status(400).json({ message: 'Teacher not found' });
        } else {
            res.status(200).json({ message: 'Teacher updated successfully...' });
        }
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to update an existing classroom
app.put('/api/update-classroom', async (req, res) => {
    try {
        const { name, id } = req.body;
        console.log(req.body);

        const updateClassroom = await Classroom.findOneAndUpdate({ id: id }, {
            id,
            name,
        }, { new: true });

        if (!updateClassroom) {
            res.status(400).json({ message: 'Classroom not found' });
        } else {
            res.status(200).json({ message: 'Classroom updated successfully...' });
        }
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Endpoint to delete a classroom
app.delete('/api/delete-classroom', async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        const deleteClassroom = await Classroom.findOneAndDelete({ id: id });

        if (deleteClassroom) {
            res.status(200).json({ message: 'Classroom deleted successfully...' });
        } else {
            res.status(400).json({ message: 'Classroom not found...' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server error' });
    }
});

// Endpoint to delete a teacher
app.delete('/api/delete-teacher', async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        const deleteTeacher = await Teacher.findOneAndDelete({ id: id });

        if (deleteTeacher) {
            res.status(200).json({ message: 'Teacher deleted successfully...' });
        } else {
            res.status(400).json({ message: 'Teacher not found...' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server error' });
    }
});

// Endpoint to delete a student
app.delete('/api/delete-student', async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        const deleteStudent = await Student.findOneAndDelete({ id: id });

        if (deleteStudent) {
            res.status(200).json({ message: 'Student deleted successfully...' });
        } else {
            res.status(400).json({ message: 'Student not found...' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal Server error' });
    }
});

// Simple route to check if the server is running
app.get('/', (req, res) => {
    res.end('Server is running...');
})

// Start the server on port 3000
app.listen(3000, (err) => {
    if (err) {
        console.log('Error occurred while establishing server : ', err);
    } else {
        console.log('Server is established successfully...');
    }
})
