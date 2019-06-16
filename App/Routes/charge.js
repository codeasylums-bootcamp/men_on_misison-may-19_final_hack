const express =require('express');
const router =express.Router();

app.get('/success', (req,res) => {
	res.render('success');
});

// Charge Route
app.post('/charge',(req, res) => {
	const amount = 200000;

	stripe.customers.create({
		email: req.body.stripeEmail,
		source: req.body.stripeToken
	})
	.then(customer => stripe.charges.create({
		amount,
		description: 'Premium fee to stay fit',
		currency: 'USD',
		customer:customer.id
	}))
	.then(charge => res.sendfile(`${__dirname}`+"/success2.html");
});   
 

module.exports=router;

