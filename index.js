module.exports = (mongoose) => {
  var Schema = mongoose.Schema;
  var studentSchema = Schema({
    _id: Number,
    year: Number,
    class: Number,
    number: Number,
    courses: [{type: Number, ref: 'Course'}]
  });

  var teacherSchema = Schema({
    _id: Number,
    name: String,
    courses: [{type: Number, ref: 'Course'}]
  });

  var courseSchema = Schema({
    _id: Number,
    name: String
  });

  var organizationSchema = Schema({
    _id: Number,
    name: String,
    parent: {type: Number, ref: 'Organization'},
    teacher: {type: Number, ref: 'Teacher'},
    course: {type: Number, ref: 'Course'},
    students: [{type: Number, ref: 'Student'}],
    count: Number,
    times: [Number]
  });

  var Student = mongoose.model('Student', studentSchema);
  var Course = mongoose.model('Course', courseSchema);
  var Teacher = mongoose.model('Teacher', teacherSchema);
  var Organization = mongoose.model('Organization', organizationSchema);

  return {
    studentSchema: studentSchema,
    courseSchema: courseSchema,
    teacherSchema: teacherSchema,
    organizationSchema: organizationSchema,
    Student: Student,
    Course: Course,
    Teacher: Teacher,
    Organization: Organization
  };
};
