module.exports = (mongoose) => {
  var Schema = mongoose.Schema;
  var studentSchema = Schema({
    id: Number,
    year: Number,
    class: Number,
    number: Number
  });

  var typeSchema = Schema({
    id: Number,
    types: [Number]
  });

  var lessonSchema = Schema({
    id: Number,
    lessonId: Number
  });

  var Student = mongoose.model('Student', studentSchema);
  var Type = mongoose.model('Type', typeSchema);
  var Lesson = mongoose.model('Lesson', lessonSchema);

  return {
    studentSchema: studentSchema,
    typeSchema: typeSchema,
    lessonSchema: lessonSchema,
    Student: Student,
    Type: Type,
    Lesson: Lesson
  };
};
