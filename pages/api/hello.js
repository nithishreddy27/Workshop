// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const requestBody = req.body
  const studentName = requestBody.studentName;
  const studentRollNumber = requestBody.studentRollNumber;
  console.log("name ",studentName , " Roll Number ",studentRollNumber);
  
  
  // Store in momngodb 


  res.status(200).json({ message : true});
}
