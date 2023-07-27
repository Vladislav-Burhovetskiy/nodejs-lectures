exports.notFound = (req, res, next) => {
  res.status(404).render("not-found", { title: "Not Found", path: "" });
  // .sendFile(path.join(__dirname, "views", "not-found.page.html"));
};
