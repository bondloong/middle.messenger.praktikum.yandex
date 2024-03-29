// eslint-disable-next-line @typescript-eslint/no-var-requires
let express = require('express');
// eslint-disable-next-line @typescript-eslint/no-var-requires
let path = require('path');
let app = express();
let PORT = 3000;

app.use(express.static('./dist'));
app.use('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
