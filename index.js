module.exports = (mongoose) => {
  var Schema = mongoose.Schema;
  var studentSchema = Schema({
    studentId: Number,
    year: Number,
    class: Number,
    number: Number
  });

  var typeSchema = Schema({
    studentId: Number,
    types: [Number]
  });

  var courseSchema = Schema({
    studentId: Number,
    courseId: Number
  });

  var teacherSchema = Schema({
    teacherId: Number,
    name: String
  });

  var orgSchema = Schema({
    orgId: Number,
    name: String,
    class: [Number],
    teacherId: Number,
    courseId: Number,
    times: Number
  });

  var Student = mongoose.model('Student', studentSchema);
  var Type = mongoose.model('Type', typeSchema);
  var Course = mongoose.model('Course', courseSchema);
  var Teacher = mongoose.model('Teacher', teacherSchema);
  var Org = mongoose.model('Org', orgSchema);

  return {
    studentSchema: studentSchema,
    typeSchema: typeSchema,
    courseSchema: courseSchema,
    teacherSchema: teacherSchema,
    orgSchema: orgSchema,
    Student: Student,
    Type: Type,
    Course: Course,
    Teacher: Teacher,
    Org: Org
  };
};
