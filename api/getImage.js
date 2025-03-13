const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const { image } = req.query;

  if (!image) {
    return res.status(400).json({ error: "يجب تحديد اسم الصورة!" });
  }

  const imagePath = path.join(__dirname, "..", "images", image);

  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: "الصورة غير موجودة!" });
  }

  res.setHeader("Content-Type", "image/jpg"); // أو image/jpeg حسب نوع الصورة
  fs.createReadStream(imagePath).pipe(res);
};
