const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const { image } = req.query; // استلام اسم الصورة من الطلب

  if (!image) {
    return res.status(400).json({ error: "يجب تحديد اسم الصورة!" });
  }

  const imagePath = path.join(__dirname, "..", "images", image); // تحديد مسار الصورة

  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: "الصورة غير موجودة!" });
  }

  const imageBuffer = fs.readFileSync(imagePath); // قراءة الصورة
  const base64Image = imageBuffer.toString("base64"); // تحويل الصورة إلى Base64

  res.json({ image: `data:image/png;base64,${base64Image}` }); // إرجاع الصورة على شكل Base64
};
