const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./src"));

app.get("/", (req, res) => {
	res.render("index");
});

app.post("/realizaLogin", (req, res) => {
	const { email, senha } = req.body;

	console.log(email, senha);

	const emailPadrao = "leobellei@dev.com";
	const senhaPadrao = "123123";

	if (email === emailPadrao && senha === senhaPadrao) {
		return res.status(200).end();
	} else {
		return res.status(400).end();
	}
});

app.listen(3030, () => console.log("Site rodando na porta 3030"));
