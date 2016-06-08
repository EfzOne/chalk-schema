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
    typeId: Number
  });

  var Student = mongoose.model('Student', studentSchema);
  var Type = mongoose.model('Type', typeSchema);
  return {
    studentSchema: studentSchema,
    typeSchema: typeSchema,
    Student: Student,
    Type: Type
  };
};
