/*
    steps:
    ======
    * create a button for payment
    * make a component 
    * make a route for that component
    * link the button with id to that component
    * make an api for that specific id
    * use Loader for getting data for specific id
    * load data form data base using useLoaderData
    * make a form on that component
    * install stripe in project
    * create an account in stripe
    * make a checkout form component
    * write the code of given below on checkout page:
        import[import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';]

        const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { price, patient, email, _id } = booking;

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctors-portal-server-rosy.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (error) {
            setCardError(error.message)
            return
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id

            }
            fetch('https://doctors-portal-server-rosy.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false)


        then,

        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit"
                    className='btn btn-primary text-white'
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className='text-red-500'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your Transaction ID : <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>



    * connect checkout page with parent
    * write the code of given below on parent page:
    /*
        const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    /*


    * backend:
    ==========
    * install: npm install --save stripe
    * then write the code:
    * 
    const stripe = require("stripe")(process.env.STRIPE_SECRET);
    
    //stripe
    app.post('/create-payment-intent', async(req, res) =>{
        const booking = req.body;
        const price = booking.price;
        const amount = price * 100;
        
        const paymentIntent = await stripe.paymentIntents.create({
            currency: 'usd',
            amount: amount,
            "payment_method_types" : [
                "card"
                ],
        })
        res.send({
            clientSecret :  paymentIntent.client_secret
        })
    })

    //payment collection
    app.post('/payments', async(req, res) =>{
        const payment = req.body;
        const result = await paymentsCollection.insertOne(payment)
        const id = payment.bookingId;
        const filter = {_id : ObjectId(id)}
        const updatedDoc = {
            $set: {
                paid: true,
                transactionId: payment.transactionId
            }
        }
        const updatedResult = await bookingsCollection.updateOne(filter, updatedDoc)
        res.send(result)
    })




*/