function uploadFile(req, res) {
  if (!req.file) {
    return res.status(400).json({
      status: "error",
      message: "Debes adjuntar un archivo en el campo 'archivo'",
      data: null
    });
  }

  res.status(201).json({
    status: "success",
    message: "Archivo subido correctamente",
    data: {
      originalName: req.file.originalname,
      filename: req.file.filename,
      mimetype: req.file.mimetype,
      size: req.file.size,
      url: `/uploads/${req.file.filename}`
    }
  });
}

module.exports = { uploadFile };
