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

  var Student = mongoose.model('Student', studentSchema);
  var Type = mongoose.model('Type', typeSchema);
  var Course = mongoose.model('Course', courseSchema);

  return {
    studentSchema: studentSchema,
    typeSchema: typeSchema,
    courseSchema: courseSchema,
    Student: Student,
    Type: Type,
    Course: Course
  };
};
