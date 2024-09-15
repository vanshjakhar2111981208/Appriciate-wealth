const express = require('express');
const bodyParser = require('body-parser');
const { loadData, normalizeData } = require('./data');
const { createModel, trainModel, prepareData } = require('./model');
const tf = require('@tensorflow/tfjs-node');

const app = express();
app.use(bodyParser.json());

let model;

// Load data and train the model when the server starts
(async function initialize() {
    const transactions = await loadData();
    const normalizedData = normalizeData(transactions);
    const { inputTensor, labelTensor } = prepareData(normalizedData);

    model = await createModel();
    await trainModel(model, inputTensor, labelTensor);
    console.log('Model training complete.');
})();

// Predict fraud
app.post('/predict', async(req, res) => {
    const { transaction_amount, merchant_category, customer_age, customer_demographics } = req.body;

    // Preprocess input
    const input = tf.tensor2d([
        [
            transaction_amount,
            customer_age,
            ...oneHotEncode([{ merchant_category }], 'merchant_category')[0],
            ...oneHotEncode([{ customer_demographics }], 'customer_demographics')[0]
        ]
    ]);

    // Make prediction
    const prediction = model.predict(input);
    const fraudProbability = await prediction.data();

    res.json({ fraud_probability: fraudProbability[0] });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});